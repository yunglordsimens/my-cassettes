import{c as r}from"./iframe-BVAVEnxW.js";import{P as p}from"./P5Sketch-CNePpcXM.js";import"./preload-helper-B6Kc3ndg.js";const i={title:"Мои кассеты/P5 Mouse Test",tags:["p5","interactive"]},a=`
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
`,e={render:()=>r.createElement(p,{sketchCode:a})};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <P5Sketch sketchCode={mouseEllipseCode} />
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const u=["EllipseFollowsMouse"];export{e as EllipseFollowsMouse,u as __namedExportsOrder,i as default};
