import{c as p}from"./iframe-BVAVEnxW.js";import{P as r}from"./P5Sketch-CNePpcXM.js";import"./preload-helper-B6Kc3ndg.js";const c={title:"Мои кассеты/Processing",tags:["processing","interactive"]},s=`
let texte = [];
let fond;
let typo;

p.setup = function() {
  p.createCanvas(1280, 300);
  typo = p.createFont('Times New Roman', 128);
  fond = p.createGraphics(p.width, p.height);
  p.background(0);
  p.textAlign(p.CENTER, p.CENTER);
  p.text('start typing text', p.width / 2, p.height / 2);
};

p.draw = function() {
  // пусто, перерисовка только по событиям
};

p.keyReleased = function() {
  if (p.keyCode === p.BACKSPACE) {
    if (texte.length > 0) {
      texte.pop();
    }
    redessine();
  } else if ((p.keyCode >= 65 && p.keyCode <= 90) || p.keyCode === 32) {
    texte.push(p.key);
    redessine();
  }
};

function redessine() {
  const t = texte.join('');
  fond.background(0);
  fond.textFont(typo);
  fond.textAlign(p.CENTER, p.CENTER);
  fond.text(t, fond.width / 2, fond.height / 2);
  fond.filter(p.BLUR, 5);
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
`,e={render:()=>p.createElement(r,{sketchCode:s}),parameters:{}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <P5Sketch sketchCode={mySketchCode} />,
  parameters: {
    // здесь можно добавить кастомное превью (скриншот), если захочешь
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const h=["TypingGlitch"];export{e as TypingGlitch,h as __namedExportsOrder,c as default};
