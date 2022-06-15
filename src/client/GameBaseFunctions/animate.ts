/* eslint-disable @typescript-eslint/no-unused-vars */
import { PerspectiveCamera, WebGLRenderer } from "three";
import { circle01 } from "..";
import { getOrbitPosition } from "../mechanics/orbitMechanic";

let distance = 20;

window.addEventListener("keypress", (event) => {
  const key = event.key;
  if (key === "w") {
    distance += 0.5;
  }
  if (key == "s") {
    distance -= 0.5;
  }
});

export function animate(
  renderFunc: (
    renderer: WebGLRenderer,
    scene: THREE.Scene,
    camera: PerspectiveCamera,
  ) => void,
  renderer: WebGLRenderer,
  stats,
  scene: THREE.Scene,
  camera: PerspectiveCamera,
) {
  requestAnimationFrame(() =>
    animate(renderFunc, renderer, stats, scene, camera),
  );

  const circleOrbitPositions = getOrbitPosition(distance);

  circle01.position.x = circleOrbitPositions.x;
  circle01.position.z = circleOrbitPositions.z;

  stats.update();
  renderFunc(renderer, scene, camera);
}
