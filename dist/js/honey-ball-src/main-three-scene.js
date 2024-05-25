class MainThreeSceneClass {
    constructor() {
        this.bind()
        this.camera
        this.scene
        this.renderer
        this.controls
        this.refrTextures = []

        this.params = {
            bubbles: {
                count: 0,
                speed: 0.9,
                blur: .1,
                refractionIndex: 1.093,
            },
            mainBall: {
                reflectionColor: 0xEDECE2,
                blur: 0,
                refractionIndex: 1.030,
                animationParams: {
                    rotationAnim: {
                        duration: 0.8,
                        ease: Power4.easeOut
                    },
                    pulseAnim: {
                        duration: 0.35,
                        ease: Power4.easeInOut
                    }
                }
            },
        }

        this.rafId = null
        this.then = Date.now()
    }

    init(container) {
        //RENDERER SETUP
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.autoClear = false
        this.renderer.debug.checkShaderErrors = true
        this.container = container
        this.container.appendChild(this.renderer.domElement)

        //MAIN SCENE INSTANCE
        this.scene = new THREE.Scene()

        //CAMERA AND ORBIT CONTROLLER
        this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.camera.position.set(0, 0, 15)
        if (window.innerWidth < 768) {
            this.camera.position.set(0, 0, 28)
        }

        CamParallax.init(this.camera)

        // OscDisk.init(THREE, this.scene)
        BubblesFBO.init(THREE, this.scene, this.camera, this.params.bubbles)
        HoneyBall.init(THREE, this.scene, this.camera, this.params.mainBall)

        this.raycaster = new THREE.Raycaster()
        this.pointer = new THREE.Vector2(-200, -200)
        this.intersects = []


    }

    start() {
        window.addEventListener("resize", this.resizeCanvas)
        window.addEventListener("mousemove", this.onMouseMove)
        this.container.style = 'display: block'
        this.update()

    }

    pause() {
        window.removeEventListener("resize", this.resizeCanvas)
        window.removeEventListener("mousemove", this.onMouseMove)
        cancelAnimationFrame(this.rafId);
        this.container.style = 'display: none'
    }

    initTextures(urls, texIndex) {
        this.texLoader = new THREE.TextureLoader()
        urls.forEach(url => {
            this.refrTextures.push(this.texLoader.load(url))
        });

        HoneyBall.setRefrTex(this.refrTextures[texIndex])
        BubblesFBO.setRefrTex(this.refrTextures[texIndex])
    }

    setParams(params) {
        if (params.bubbles) {
            BubblesFBO.setParams(params.bubbles)
        }
        if (params.mainBall)
            HoneyBall.setParams(params.mainBall)
    }

    changeTexture(targetTexIndex, clockWise) {
        HoneyBall.changeTexture(this.refrTextures[targetTexIndex])
        BubblesFBO.changeTexture(this.refrTextures[targetTexIndex])
        this.pulse(clockWise)
    }

    pulse(clockWise) {
        HoneyBall.pulse(clockWise)
    }

    update() {

        this.rafId = requestAnimationFrame(this.update)

        // Computing the time elapsed since the last frame
        this.dt = Date.now() - this.then

        // Updating methode with delta time as a parameter

        // Reset then varaible for next frame elapsed time computing

        this.raycaster.setFromCamera(this.pointer, this.camera)

        // calculate objects intersecting the picking ray
        this.intersects = this.raycaster.intersectObjects(this.scene.children)

        this.renderer.clear()
        this.renderer.render(this.scene, this.camera)
        HoneyBall.update(this.intersects, this.dt)
        BubblesFBO.update(this.renderer, this.dt)
        CamParallax.update()

        this.then = Date.now()

    }

    onMouseMove(event) {
        this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1
        this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    resizeCanvas() {
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        HoneyBall.windowResize(THREE)
        BubblesFBO.windowResize()
    }

    bind() {
        this.resizeCanvas = this.resizeCanvas.bind(this)
        this.update = this.update.bind(this)
        this.start = this.start.bind(this)
        this.pause = this.pause.bind(this)
        this.onMouseMove = this.onMouseMove.bind(this)
        this.init = this.init.bind(this)
    }
}


const MainThreeScene = new MainThreeSceneClass()