function remap(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1)
}

class BubblesFBOClass {
    constructor() {

    }

    init(THREE, scene, camera, params) {
        this.THREE = THREE
        this.orCamera = camera
        this.camera = camera.clone()
        this.camera.layers.set(1)
        this.scene = scene

        this.params = {
            bubbleCount: params.count,
            bubbleSpeed: params.speed,
        }



        this.texLoader = new THREE.TextureLoader()

        this.uniforms = {

            u_refrTex: {
                value: null
            },

            u_res: {
                value: new THREE.Vector2(window.innerWidth, window.innerHeight)
            },
            u_time: {
                value: 0.,
            },
            u_refColor: {
                value: new THREE.Color(0xFFFFFF)
            },
            u_speed1: {
                value: 4
            },
            u_freq1: {
                value: 0.7
            },
            u_amp1: {
                value: 0.41
            },
            pi: {
                value: Math.PI
            },
            u_blur: {
                value: params.blur
            },
            u_ior: {
                value: 10
            },

            u_camPos: {
                value: camera.position
            }
        }
        this.bubbleOr = new THREE.Mesh(new THREE.IcosahedronGeometry(.2, 2), new THREE.ShaderMaterial({
            vertexShader: bubbleShader.vertexShader,
            fragmentShader: bubbleShader.fragmentShader,
            uniforms: this.uniforms
        }))

        this.generateBubbles()

        const format = parseFloat(THREE.DepthFormat)
        const type = parseFloat(THREE.UnsignedShortType)



        this.FBO = new this.THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight)
        this.FBO.texture.minFilter = THREE.NearestFilter
        this.FBO.texture.magFilter = THREE.NearestFilter
        this.FBO.stencilBuffer = (format === THREE.DepthStencilFormat) ? true : false
        this.FBO.depthTexture = new THREE.DepthTexture()
        this.FBO.depthTexture.format = format
        this.FBO.depthTexture.type = type
    }

    generateBubbles() {
        // if (this.scene == undefined)
        let targetChild = null
        this.scene.traverse(child => {
            if (child.name == "bubbleGroup") {
                targetChild = child
            }
        })
        if (targetChild)
            this.scene.remove(targetChild)


        this.bubbles = new this.THREE.Group()
        this.bubbles.name = "bubbleGroup"
        this.bubbles.layers.set(1)
        this.scene.add(this.bubbles)

        for (let i = 0; i < this.params.bubbleCount; i++) {
            const cl = this.bubbleOr.clone()
            const x = remap(Math.random(), 0, 1, -5, 5)
            const z = remap(Math.random(), 0, 1, -10, 10)
            const y = remap(Math.random(), 0, 1, -5, 10)
            cl.layers.set(1)
            cl.position.set(x, y, z)
            cl.scale.multiplyScalar(remap(Math.random(), 0, 1, .01, 2))
            this.bubbles.add(cl)
        }
    }

    setRefrTex(texture) {
        this.uniforms.u_refrTex.value = texture
    }

    changeTexture(texture) {
        this.uniforms.u_refrTex.value = texture
    }

    setParams(params) {
        if (params.count) {
            this.params.bubbleCount = params.count
            this.generateBubbles()
        }
        if (params.speed)
            this.params.bubbleSpeed = params.speed
        if (params.refractionIndex)
            this.uniforms.u_ior.value = params.refractionIndex

    }

    update(renderer, dt) {

        let i = 0
        while (i < this.bubbles.children.length) {
            const cl = this.bubbles.children[i]
            cl.position.y -= dt * 0.001 * this.params.bubbleSpeed
            if (cl.position.y < -5)
                cl.position.y = remap(Math.random(), 0, 1, 7, 15)
            i++
        }

        this.camera.position.copy(this.orCamera.position)
        this.camera.rotation.copy(this.orCamera.rotation)

        renderer.setRenderTarget(this.FBO)
        renderer.clear()

        renderer.render(this.scene, this.camera)
        renderer.clearDepth()
        renderer.setRenderTarget(null)
    }

    windowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.FBO.setSize(window.innerWidth, window.innerHeight)
    }

    bind() {
        this.windowResize = this.windowResize.bind(this)
        this.setParams = this.setParams.bind(this)
        this.generateBubbles = this.generateBubbles.bind(this)
        this.uniforms.u_res.value.set(window.innerWidth, window.innerHeight)
    }
}

const BubblesFBO = new BubblesFBOClass()