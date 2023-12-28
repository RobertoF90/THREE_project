import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'lil-gui';

import HeroStateMachine from "./HeroStateMachine";
import { drawUI } from './ui/ui';



const hero1 = new HeroStateMachine();

// const gui = new dat.GUI();
const canvas = document.getElementById('canvas') as HTMLElement;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.x = 6;
camera.position.y = 5;
camera.position.z = 8;

// gui.add(camera.position, 'x');

const plane = new THREE.PlaneGeometry(25, 25);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const ground = new THREE.Mesh(plane, planeMaterial);

ground.position.y = 0;
ground.rotation.x = -Math.PI * 0.5;
scene.add(ground);

// Heroes

function makeInstance(geometry, color, x, y, z) {
  const material = new THREE.MeshPhongMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;
  return cube;
}

const hero = new THREE.BoxGeometry(1, 1, 1);

const heroes = [
  makeInstance(hero, 0x0000ff, 0, 0.5, -2.5),
  makeInstance(hero, 0x0000ff, -2.5, 0.5, -2.5),
  makeInstance(hero, 0x0000ff, 2.5, 0.5, -2.5),
];

// Enemies

const enemy = new THREE.BoxGeometry(1, 1, 1);

const enemies = [
  makeInstance(enemy, 0xff0000, 0, 0.5, 2.5),
  makeInstance(enemy, 0xff0000, -2.5, 0.5, 2.5),
  makeInstance(enemy, 0xff0000, 2.5, 0.5, 2.5),
];

const light = new THREE.AmbientLight(0xffffff, 3);
// light.position.set(-1, 2, 4);
scene.add(light);

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;

  if (needResize) {
    renderer.setSize(width, height, false);
  }

  return needResize;
}

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

function animate(time: number) {
  time *= 0.001;

  if (resizeRendererToDisplaySize(renderer)) {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  hero1.update();
  drawUI(hero1)

  //   cubes.forEach((cube, ndx) => {
  //     const speed = 1 + ndx * 0.1;
  //     const rot = time * speed;
  //     cube.rotation.x = rot;
  //     cube.rotation.y = rot;
  //   });

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
