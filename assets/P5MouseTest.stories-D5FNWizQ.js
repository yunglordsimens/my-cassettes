import{c as r}from"./iframe-SPdtdknn.js";import{P as a}from"./P5Sketch-CcHAi4r-.js";const p={title:"My Cassettes/P5 Mouse Test",tags:["p5","interactive"]},c=`
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
`,e={render:()=>r.createElement(a,{sketchCode:c})};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <P5Sketch sketchCode={mouseEllipseCode} />
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const l=["EllipseFollowsMouse"],i=Object.freeze(Object.defineProperty({__proto__:null,EllipseFollowsMouse:e,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{i as _};
