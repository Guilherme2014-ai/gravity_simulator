import { PerspectiveCamera, WebGLRenderer } from "three";

export function render(
  renderer: WebGLRenderer,
  scene: THREE.Scene,
  camera: PerspectiveCamera,
) {
  renderer.render(scene, camera);
}
