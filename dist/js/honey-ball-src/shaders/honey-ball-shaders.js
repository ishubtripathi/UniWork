const ballshaders = {
    vertexShader: `
varying vec2 vUv; 
varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vN;
varying vec3 eyeVector;
varying vec3 worldNormal;

uniform float u_time;
uniform float pi;

uniform vec3 u_camPos;

uniform float u_speed1;
uniform float u_freq1;
uniform float u_amp1;

uniform vec3 u_bumpPos;
uniform float u_bumpInt;
uniform float u_bumRadius;
uniform float u_bumAmp;

float tangentFactor = 0.005;


${shaderUtils.noise4}

float remap(float value, float low1, float high1, float low2, float high2){
  return low2 + (value - low1) * (high2 - low2) / (high1 - low1);
}

vec3 orthogonal(vec3 v) {
  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)
  : vec3(0.0, -v.z, v.y));
}

vec3 distorted(vec3 p) {
  vec3 outPoint = p;
    
  outPoint = p*(1.+snoise(vec4(p*u_freq1, u_time*0.0001*u_speed1))*0.05*u_amp1);

  return outPoint;
}

// vec3 normal_recompute()



void main() {
  vUv = uv; 
  vNormal = normal;
  vPosition = position;

  vec3 dispPos = distorted(position);
  vec3 tangent1 = orthogonal(normal);
  vec3 tangent2 = normalize(cross(normal, tangent1));
  vec3 nearby1 = position + tangent1 * tangentFactor;
  vec3 nearby2 = position + tangent2 * tangentFactor;
  vec3 distorted1 = distorted(nearby1);
  vec3 distorted2 = distorted(nearby2);

  vNormal = normalize(cross(distorted1 - dispPos, distorted2 - dispPos));

  vec4 p = vec4( position, 1. );

  vec3 e = normalize( vec3( modelViewMatrix * p ) );
  vec3 n = normalize( normalMatrix * vNormal );


  vec3 r = reflect( e, n );
  float m = 2. * sqrt(
    pow( r.x, 2. ) +
    pow( r.y, 2. ) +
    pow( r.z + 1., 2. )
  );
  vN = r.xy / m + .5;

  vec4 worldPosition = modelMatrix * vec4( position, 1.0);
  eyeVector = normalize(worldPosition.xyz - u_camPos);
  worldNormal = normalize( modelViewMatrix * vec4(vNormal, 0.0)).xyz;

  vec4 modelViewPosition = modelViewMatrix * vec4(dispPos, 1.0);
  gl_Position = projectionMatrix * modelViewPosition; 
}
  `,
    fragmentShader: `
  #include <packing>
  
  uniform sampler2D u_matCap;
  uniform float pi;
  
  uniform sampler2D u_curRefrTex;
  uniform sampler2D u_tarRefrTex;
  uniform float u_transFactor;
  
  uniform sampler2D u_bubblesFBO;
  uniform sampler2D u_bubblesDepth;
  uniform vec2 u_res;
  
  uniform float u_ior;
  uniform float u_blur;
  uniform float u_tintInt;
  uniform float u_lightfac;


  uniform vec3 u_targColor;
  uniform vec3 u_refColor;
  uniform vec3 u_camNear;
  uniform vec3 u_camFar;
  
  
  varying vec2 vN;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv; 
  
  varying vec3 eyeVector;
  varying vec3 worldNormal;
  
  
  float remap(float value, float low1, float high1, float low2, float high2){
    return low2 + (value - low1) * (high2 - low2) / (high1 - low1);
  }
  
  vec4 blur(sampler2D inputSamp, vec2 uv){
    vec4 outputCol = texture2D(inputSamp, uv);;
  
    float Directions = 16.0; // BLUR DIRECTIONS (Default 16.0 - More is better but slower)
    float Quality = 3.0; // BLUR QUALITY (Default 4.0 - More is better but slower)
    float Size = 50.0*u_blur; // BLUR SIZE (Radius)
    vec2 Radius = Size/u_res;
      
    for( float d=0.0; d<(pi*2.); d+=(pi*2.)/Directions)
    {
      for(float i=1.0/Quality; i<=1.0; i+=1.0/Quality)
        {
          outputCol += texture( inputSamp, uv+vec2(cos(d),sin(d))*Radius*i);		
        }
    }
    
    return outputCol /= Quality * Directions - 15.0;
  }
  
  float fresnel(vec3 eyeVector, vec3 worldNormal) {
    return pow( 1.0 + dot( eyeVector, worldNormal), 3.0 );
  }
  
  
  
  
  
  void main() {
  
    //_REFLECTION LIGHTS MATCAP_
    vec4 matCapCol = texture2D(u_matCap, vN);
  
  
    //_REFRACTION_
    vec2 uv = gl_FragCoord.xy / u_res;
    vec3 normal = worldNormal;
    float ior = u_ior+(1.-cos(u_transFactor*pi*2.))*0.1;
    vec3 refracted = refract(eyeVector, normal, 1.0/ior);
    uv += refracted.xy;
  
    //_BUBBLES MIX BACKGROUND REFRACTION_
    vec4 bubblesCol = texture2D(u_bubblesFBO,uv);
    vec4 darkerBubbles = mix(bubblesCol, vec4(0., 0., 0., 1.), .2);
    vec4 curBgCol = texture2D(u_curRefrTex, uv);
    vec4 tarBgCol = texture2D(u_tarRefrTex, uv);
    vec4 transBgCol = mix(curBgCol, tarBgCol, u_transFactor);
    vec4 bubblesMixBgOut = mix(transBgCol,darkerBubbles, bubblesCol.a);
  
  
    //DARKER BUBBLES
  
  
    //_END MIX_
    vec4 tintedRefrLayer = mix(bubblesMixBgOut,vec4(u_targColor,1.), 0.);
    vec4 matCapLayer = tintedRefrLayer*(matCapCol+.4);
    vec4 outCol = mix(matCapLayer, vec4(u_refColor, 1.), fresnel(eyeVector, normal));
  
    //_LIGHT EFFECT_
    vec4 lighting = vec4(u_lightfac);
    outCol *= lighting;

    gl_FragColor = outCol;
  }
    `,
}