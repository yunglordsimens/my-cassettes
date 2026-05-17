import React from 'react';
import P5Sketch from './P5Sketch';

export default {
  title: 'My Cassettes/Processing',
  tags: ['processing', 'interactive'],
};

// Твой скетч из примера (адаптированный под p5.js)
const mySketchCode = `
let texte = [];
let fond;

p.setup = function() {
  p.createCanvas(1280, 300);
  fond = p.createGraphics(p.width, p.height);
  fond.textFont('Times New Roman');
  fond.textSize(128);
  p.background(0);
  p.fill(100);
  p.textAlign(p.CENTER, p.CENTER);
  p.textSize(20);
  p.text('start typing...', p.width / 2, p.height / 2);
};

p.draw = function() {};

p.keyReleased = function() {
  if (p.keyCode === p.BACKSPACE) {
    if (texte.length > 0) texte.pop();
    redessine();
  } else if ((p.keyCode >= 65 && p.keyCode <= 90) || p.keyCode === 32) {
    texte.push(p.key);
    redessine();
  }
};

function redessine() {
  const t = texte.join('');
  fond.background(0);
  fond.textAlign(p.CENTER, p.CENTER);
  fond.fill(255);
  fond.text(t, fond.width / 2, fond.height / 2);
  fond.filter(p.BLUR, 5);
  fond.fill(255);
  fond.text(t, fond.width / 2, fond.height / 2);
  p.background(0);
  p.noFill();
  p.stroke(255);
  for (let a = 0; a < fond.height; a += 4) {
    p.beginShape();
    for (let b = 0; b < fond.width; b += 3) {
      const c = p.brightness(fond.get(b, a));
      p.vertex((b + a * 0.4) * 1.8 - 200, (a - c * 0.1 - b * 0.1) * 1.8 - 50);
    }
    p.endShape();
  }
}
`;

export const TypingGlitch = {
  render: () => <P5Sketch sketchCode={mySketchCode} />,
  parameters: {
    // здесь можно добавить кастомное превью (скриншот), если захочешь
  },
};