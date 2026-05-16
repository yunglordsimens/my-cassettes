import{c as e}from"./iframe-DjM9xLTZ.js";const i={title:"How to add a cassette"},n=r=>e.createElement("code",{style:{display:"block",background:"#111",color:"#7ec8a0",padding:"12px 16px",borderRadius:8,fontSize:13,fontFamily:"monospace",whiteSpace:"pre",margin:"8px 0 16px",overflowX:"auto"}},r),o=r=>e.createElement("h2",{style:{color:"#fff",marginTop:32,marginBottom:8,fontSize:16}},r),t={render:()=>e.createElement("div",{style:{background:"#0a0a0a",color:"#ccc",fontFamily:"system-ui, sans-serif",padding:40,minHeight:"100vh",lineHeight:1.6}},e.createElement("h1",{style:{color:"#fff",fontSize:24,marginBottom:8}},"How to add a cassette"),e.createElement("p",{style:{opacity:.5,marginBottom:32}},"New file → save → appears in gallery automatically."),o("1. Create a file in stories/"),n("stories/MyCoolSketch.stories.jsx"),o("2. Basic template"),n(`import React from 'react';

export default {
  title: 'My Cassettes/Group Name',
  tags: ['your-tag'],
};

export const SketchName = {
  render: () => (
    <div style={{ background: '#000', width: 800, height: 500 }}>
      {/* your code here */}
    </div>
  ),
};`),o("3. p5.js sketch"),n(`import React from 'react';
import P5Sketch from './P5Sketch';

export default {
  title: 'My Cassettes/Processing',
  tags: ['p5', 'interactive'],
};

const sketchCode = \`
p.setup = function() { p.createCanvas(800, 500); };
p.draw = function() {
  p.background(0);
  p.ellipse(p.mouseX, p.mouseY, 50, 50);
};
\`;

export const MySketch = {
  render: () => <P5Sketch sketchCode={sketchCode} />,
};`),o("4. Deploy"),n("npm run deploy"),e.createElement("p",{style:{marginTop:24,opacity:.4,fontSize:13}},"Tags → gallery filter  ·  Title group (after /) → sidebar folder  ·  Test locally: npm run storybook")),parameters:{layout:"fullscreen"}};var a,s,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#0a0a0a',
    color: '#ccc',
    fontFamily: 'system-ui, sans-serif',
    padding: 40,
    minHeight: '100vh',
    lineHeight: 1.6
  }}>
      <h1 style={{
      color: '#fff',
      fontSize: 24,
      marginBottom: 8
    }}>How to add a cassette</h1>
      <p style={{
      opacity: 0.5,
      marginBottom: 32
    }}>
        New file → save → appears in gallery automatically.
      </p>

      {h('1. Create a file in stories/')}
      {code('stories/MyCoolSketch.stories.jsx')}

      {h('2. Basic template')}
      {code(\`import React from 'react';

export default {
  title: 'My Cassettes/Group Name',
  tags: ['your-tag'],
};

export const SketchName = {
  render: () => (
    <div style={{ background: '#000', width: 800, height: 500 }}>
      {/* your code here */}
    </div>
  ),
};\`)}

      {h('3. p5.js sketch')}
      {code(\`import React from 'react';
import P5Sketch from './P5Sketch';

export default {
  title: 'My Cassettes/Processing',
  tags: ['p5', 'interactive'],
};

const sketchCode = \\\`
p.setup = function() { p.createCanvas(800, 500); };
p.draw = function() {
  p.background(0);
  p.ellipse(p.mouseX, p.mouseY, 50, 50);
};
\\\`;

export const MySketch = {
  render: () => <P5Sketch sketchCode={sketchCode} />,
};\`)}

      {h('4. Deploy')}
      {code('npm run deploy')}

      <p style={{
      marginTop: 24,
      opacity: 0.4,
      fontSize: 13
    }}>
        Tags → gallery filter &nbsp;·&nbsp;
        Title group (after /) → sidebar folder &nbsp;·&nbsp;
        Test locally: npm run storybook
      </p>
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const l=["Instructions"],d=Object.freeze(Object.defineProperty({__proto__:null,Instructions:t,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{d as _};
