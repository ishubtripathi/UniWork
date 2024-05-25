class HoneyBallClass {
    constructor() {
        this.bind()
    }
    init(THREE, scene, camera, params) {
        this.texLoader = new THREE.TextureLoader()
        this.scene = scene
        this.params = params
        this.THREE = THREE
        this.camera = camera
        this.pointInt = new THREE.Vector3()
        this.mIntTarget = 0
        this.animTween

        this.animationParamFactors = {
            amplitude: 6,
            frequency: 0.01,
            light: 2.5,
        }

        this.uniforms = {
            u_bubblesFBO: {
                value: BubblesFBO.FBO.texture
            },
            u_bubblesDepth: {
                value: BubblesFBO.FBO.depthTexture
            },
            u_matCap: {
                value: this.texLoader.load("../../../img/assets/matcap05.png")
            },
            u_curRefrTex: {
                value: null
            },
            u_tarRefrTex: {
                value: null
            },
            u_transFactor: {
                value: null,
            },
            u_targColor: {
                value: new THREE.Color(0x323232)
            },
            u_res: {
                value: new THREE.Vector2(window.innerWidth, window.innerHeight)
            },
            u_time: {
                value: 0.,
            },
            u_refColor: {
                value: new THREE.Color(params.reflectionColor)
            },
            u_speed1: {
                value: 9.18
            }, // was 5.18
            u_freq1: {
                value: 0.55
            },
            u_amp1: {
                value: 2.4
            },
            pi: {
                value: Math.PI
            },
            u_ior: {
                value: params.refractionIndex
            },
            u_blur: {
                value: params.blur
            },
            u_tintInt: {
                value: .05
            },
            u_lightfac: {
                value: 1
            },

            u_camPos: {
                value: camera.position
            },
            u_camNear: {
                value: 0.
            },
            u_camFar: {
                value: 10.
            },
        }

        this.shaderMat = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: ballshaders.vertexShader,
            fragmentShader: ballshaders.fragmentShader,
        })

        this.rotator = new THREE.Group()
        const geom = new THREE.IcosahedronGeometry(2.5, 15)
        this.ballMesh = new THREE.Mesh(geom, this.shaderMat)
        this.ballMesh.name = "HoneyBall"
        this.rotator.add(this.ballMesh)
        this.scene.add(this.rotator)
    }

    setRefrTex(texture) {
        this.uniforms.u_curRefrTex.value = texture
        this.uniforms.u_tarRefrTex.value = texture
    }

    changeTexture(texture) {
        this.uniforms.u_curRefrTex.value = this.uniforms.u_tarRefrTex.value
        this.uniforms.u_tarRefrTex.value = texture
        this.uniforms.u_transFactor.value = 0
        gsap.to(this.uniforms.u_transFactor, {
            value: 1,
            duration: 1,
        })
    }

    pulse(clockWise) {
        this.pulseFactor = 0
        if (this.animTween)
            this.animTween.kill()
        this.animTween = gsap.to(this, {
            pulseFactor: 1,
            duration: this.params.animationParams.pulseAnim.duration,
            ease: this.params.animationParams.pulseAnim.ease,
            yoyo: true,
            repeat: 1,
            onUpdate: () => {
                // this.uniforms.u_speed1.value = 4.18 + this.pulseFactor * 0.1
                this.uniforms.u_freq1.value = 0.55 + this.pulseFactor * this.animationParamFactors.frequency
                this.uniforms.u_amp1.value = 3.0 + this.pulseFactor * this.animationParamFactors.amplitude // was 2.09
                this.uniforms.u_lightfac.value = 1 + this.pulseFactor * this.animationParamFactors.light
            },
        })

        const rotDir = clockWise ? -1 : 1
        gsap.to(this.rotator.rotation, {
            y: this.rotator.rotation.y + rotDir * 2,
            duration: this.params.animationParams.rotationAnim.duration,
            ease: this.params.animationParams.rotationAnim.ease
        })

    }

    setParams(params) {
        if (params.refractionIndex)
            this.uniforms.u_ior.value = params.refractionIndex
        if (params.reflectionColor)
            this.uniforms.u_refColor.value = new this.THREE.Color(params.reflectionColor)

    }

    update(intersects, dt) {
        this.ballMesh.material.uniforms.u_time.value += dt
        this.mIntTarget = 0
        intersects.forEach(child => {
            if (child.object.name == this.ballMesh.name) {
                this.pointInt = child.point
                this.mIntTarget = 1
            }
        })

        this.ballMesh.material.uniforms.u_camPos.value = this.camera.position
        this.ballMesh.material.uniforms.u_bubblesDepth.value = BubblesFBO.FBO.depthTexture
    }

    windowResize(THREE) {
        this.ballMesh.material.uniforms.u_res.value = new THREE.Vector2(window.innerWidth, window.innerHeight)

    }

    bind() {
        this.init = this.init.bind(this)
        this.setParams = this.setParams.bind(this)
        this.windowResize = this.windowResize.bind(this)
    }
}

const HoneyBall = new HoneyBallClass()