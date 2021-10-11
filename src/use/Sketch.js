import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import vertex from './shader/vertex.glsl'
import fragment from './shader/fragment.glsl'

export default class Sketch{
    constructor(options) {
        this.container = options.domElement
        this.width = this.container.offsetWidth
        this.height = this.container.offsetHeight
        console.log(this.width)

        this.positionZ = 600
        this.fov = 2*Math.atan(this.height/ this.positionZ /2) * 180 / Math.PI;
        this.camera = new THREE.PerspectiveCamera(this.fov,
            this.width / this.height, 10, 1000)
        this.camera.position.z = this.positionZ


        this.scene = new THREE.Scene()

        this.axesHelper = new THREE.AxisHelper()
        this.scene.add(this.axesHelper)

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        })
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.container.appendChild(this.renderer.domElement)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)

        this.addObject()
        this.resize()
        this.render()
    }
    addObject(){
        this.geometry = new THREE.PlaneBufferGeometry(350,350,100,100)
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertex,
            fragmentShader: fragment,
        })
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.scene.add(this.mesh)
    }
    resize(){
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize( this.width, this.height );
        this.camera.aspect = this.width/this.height;
        this.camera.updateProjectionMatrix();

    }

    render() {
        this.renderer.render(this.scene, this.camera)
        window.requestAnimationFrame(this.render.bind(this))
    }
}