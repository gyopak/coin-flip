import './style.css'
import * as THREE from 'three'

/*
* Scene
*/
const scene = new THREE.Scene()
scene.background = new THREE.Color('black')

/*
* Camera
*/
const resolution = window.innerWidth / window.innerHeight
console.log(resolution)
const camera = new THREE.PerspectiveCamera(25, resolution, 15, 150)
camera.position.setZ(20)

/*
* Renderer
*/
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#app')
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

/*
* Lighting
*/
const pointLight = new THREE.PointLight('white')
pointLight.position.set(5, -28.5, 5)

const pointLight2 = new THREE.PointLight('white', 0.4)
pointLight2.position.set(5, 5, 5)

const ambientLight = new THREE.AmbientLight('white', 0.4)
// const directionalLight = new THREE.DirectionalLight( 'white', 0.3 )

scene.add(
    pointLight,
    pointLight2,
    ambientLight,
    // directionalLight
)

/*
* Coin
*/
const textureLoader = new THREE.TextureLoader()

// Face 1
const face1Texture = textureLoader.load('/coin-front.png')
const face1Map = textureLoader.load('/coin-front-map.png')
const face1Material = new THREE.MeshStandardMaterial({
    map: face1Texture,
    displacementMap: face1Map,
    displacementScale: 0.3,
    alphaMap: 
})

// Face 2
const face2Texture = textureLoader.load('/coin-back.png')
face2Texture.rotation = 3.15
console.log(face2Texture)
const face2Material = new THREE.MeshStandardMaterial({ map: face2Texture })

// Face 3
const face3Texture = textureLoader.load('/coin-edge.png')
const face3Material = new THREE.MeshStandardMaterial({ map: face3Texture })

// // Edge
// const whiteMaterial = new THREE.MeshStandardMaterial({color: 'rgba(0,0,0,0.1)'})

const coinMaterials = [
    face3Material, // Coin edge
    face1Material, // Coin face 1
    face2Material, // Coin face 2
]

const coinGeometry = new THREE.CylinderGeometry(3, 3, 0.15, 20, 20, false)
const coin = new THREE.Mesh(coinGeometry, coinMaterials)
const a = new THREE.Vector3(1, 0, 0);
scene.add(coin)

function animate() {
    requestAnimationFrame(animate)

    // coin.rotation.y += 0.005
    // coin.rotation.x += 0.01
    coin.rotateOnAxis(a, 0.003)
    // coin.rotation.z += 0.005

    renderer.render(scene, camera)
}
coin.rotation.x = 1.5
coin.rotation.y = 1.5
coin.rotation.z = 0
console.log(coin)

animate()