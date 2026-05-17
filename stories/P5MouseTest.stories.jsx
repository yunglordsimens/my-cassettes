import React from 'react';
import P5Sketch from './P5Sketch';

export default {
  title: 'My Cassettes/P5 Mouse Test',
  tags: ['p5', 'interactive'],
};

const mouseEllipseCode = `
p.setup = function() {
  p.createCanvas(800, 500);
  p.background(20);
};

p.draw = function() {
  p.background(20, 20, 20, 40);
  p.noStroke();
  p.fill(255, 80, 180);
  p.ellipse(p.mouseX, p.mouseY, 60, 60);
};
`;

export const EllipseFollowsMouse = {
  render: () => <P5Sketch sketchCode={mouseEllipseCode} />,
};
