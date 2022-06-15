let angleMoved = 0;
const g = 18;

export function getOrbitPosition(D) {
  const velocity = g / D ** 2; // Força inversamente proporcional ao quadrado da distancia

  angleMoved += velocity;

  const x = Math.cos(angleMoved) * D;
  const z = Math.sin(angleMoved) * D;

  return {
    x,
    z,
  };
}
