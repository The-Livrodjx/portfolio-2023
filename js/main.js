import '../styles/style.css';
import '../styles/responsive.css';
import * as THREE from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000 // far
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg")
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(
  20, 3, 20, 100
);
const material = new THREE.MeshBasicMaterial({
  color: "rgb(110, 72, 237)",
  wireframe: true
});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

renderer.render(scene, camera);
// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.07, 5, 5);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(300).fill().forEach(addStar);


const moveCamera = () => {
  const t = document.body.getBoundingClientRect().top;
  torus.rotation.x += 0.05;
  torus.rotation.y -= 0.075;
  torus.rotation.z += 0.05;

  camera.position.z = t * 0.11;
}

document.body.onscroll = moveCamera;
moveCamera();

const animate = () => {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.003;

  renderer.render(scene, camera);
};

animate();
