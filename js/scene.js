const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls(camera, renderer.domElement)

const geometry = new THREE.SphereGeometry(2, 24, 16);

const loader = new THREE.TextureLoader();

const texture = loader.load('textures/earth.jpeg');
const spaceTexture = loader.load('textures/space.jpg');

scene.background = spaceTexture

// const material = new THREE.MeshPhongMaterial();

//setting material property
// material.map = texture;

const material = new THREE.MeshBasicMaterial( { map: texture } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	controls.update();

	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();
