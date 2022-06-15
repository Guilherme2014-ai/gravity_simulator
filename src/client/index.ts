import * as THREE from "three";

// Tools
import { GUI } from "dat.gui";
import Stats from "three/examples/jsm/libs/stats.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Funcs
import { onWindowResize } from "./GameBaseFunctions/onWindowResize";
import { animate } from "./GameBaseFunctions/animate";
import { render } from "./GameBaseFunctions/render";

// CSS
import "./index.scss";

//--------------------------------------------------------------------------------

const gui = new GUI();
const scene = new THREE.Scene();
const element = document.getElementById("content");

const axes = new THREE.AxesHelper(5); // param: units distance
scene.add(axes);

const stats = Stats();
stats.dom.style.position = "absolute";
element.appendChild(stats.dom);

const ambientLight = new THREE.AmbientLight("white");
scene.add(ambientLight);

const light01 = new THREE.PointLight();
light01.position.set(10, 10, 10);
scene.add(light01);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 20;
camera.position.x = 25;
camera.position.y = 10;

const cameraGui = gui.addFolder("Camera");
const cameraGuiPosition = cameraGui.addFolder("Position");
cameraGuiPosition.add(camera.position, "x", 0, 20);
cameraGuiPosition.add(camera.position, "y", 0, 20);
cameraGuiPosition.add(camera.position, "z", 0, 20);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
element.appendChild(renderer.domElement);

const circleGeometry = new THREE.SphereBufferGeometry();

const circle01 = new THREE.Mesh(
  circleGeometry,
  new THREE.MeshLambertMaterial({ color: "blue" }),
);

const ballsControllGui = gui.addFolder("Balls");

const redBallControllGui = ballsControllGui.addFolder("Blue Ball");
redBallControllGui.add(circle01.position, "x", 0, 20);
redBallControllGui.add(circle01.position, "y", 0, 20);
redBallControllGui.add(circle01.position, "z", 0, 20);

scene.add(
  new THREE.Mesh(
    new THREE.SphereBufferGeometry(10),
    new THREE.MeshLambertMaterial({ color: "yellow" }),
  ),
);
scene.add(circle01);

window.addEventListener("click", () => {
  console.log(circle01.getWorldDirection(new THREE.Vector3()));
});

/*
const cubeGeometry = new THREE.TorusKnotGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
const cubeFolderGui = gui.addFolder("Cube");

const cubeFolderGuiRotation = cubeFolderGui.addFolder("Rotation");

cubeFolderGuiRotation.add(cube.rotation, "x", 0, 2 * Math.PI);
cubeFolderGuiRotation.add(cube.rotation, "y", 0, 2 * Math.PI);
cubeFolderGuiRotation.add(cube.rotation, "z", 0, 2 * Math.PI);

const cubeFolderGuiPosition = cubeFolderGui.addFolder("Position");

cubeFolderGuiPosition.add(cube.position, "x", -10, 10);
cubeFolderGuiPosition.add(cube.position, "y", -10, 10);
cubeFolderGuiPosition.add(cube.position, "z", -10, 10);

const cubeFolderGuiScale = cubeFolderGui.addFolder("Scale");

cubeFolderGuiScale.add(cube.scale, "x", 0, 10);
cubeFolderGuiScale.add(cube.scale, "y", 0, 10);
cubeFolderGuiScale.add(cube.scale, "z", 0, 10);

const cubeFolderGuiIsVisible = cubeFolderGui.addFolder("Visible");
cubeFolderGuiIsVisible.add(cube, "visible");

scene.add(cube);
*/

new OrbitControls(camera, renderer.domElement);

window.addEventListener(
  "resize",
  () => onWindowResize(camera, renderer),
  false,
);

animate(render, renderer, stats, scene, camera);

export { circle01 };
