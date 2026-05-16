import{u as r,j as e}from"./index-CAvL3ciB.js";import"./iframe-SPdtdknn.js";import"./preload-helper-B6Kc3ndg.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"title-how-to-add-a-cassette",children:"title: How to add a cassette"}),`
`,e.jsx(n.h1,{id:"how-to-add-a-cassette",children:"How to add a cassette"}),`
`,e.jsx(n.h2,{id:"1-create-a-new-file",children:"1. Create a new file"}),`
`,e.jsxs(n.p,{children:["Add a file to the ",e.jsx(n.code,{children:"stories/"})," folder — name it anything:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`stories/MyCoolSketch.stories.jsx
`})}),`
`,e.jsx(n.h2,{id:"2-paste-this-template",children:"2. Paste this template"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React from 'react';

export default {
  title: 'My Cassettes/Your Group Name',
  tags: ['your-tag'],
};

export const SketchName = {
  render: () => (
    <div style={{ background: '#000', width: 800, height: 500 }}>
      {/* your code here */}
    </div>
  ),
};
`})}),`
`,e.jsx(n.h2,{id:"3-for-p5js-sketches",children:"3. For p5.js sketches"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React from 'react';
import P5Sketch from './P5Sketch';

export default {
  title: 'My Cassettes/Processing',
  tags: ['p5', 'interactive'],
};

const sketchCode = \`
p.setup = function() {
  p.createCanvas(800, 500);
};

p.draw = function() {
  p.background(0);
  p.fill(255);
  p.ellipse(p.mouseX, p.mouseY, 50, 50);
};
\`;

export const MySketch = {
  render: () => <P5Sketch sketchCode={sketchCode} />,
};
`})}),`
`,e.jsx(n.h2,{id:"4-deploy",children:"4. Deploy"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run deploy
`})}),`
`,e.jsx(n.p,{children:"That's it — the cassette appears in the gallery automatically."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tips",children:"Tips"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tags"})," — add to ",e.jsx(n.code,{children:"tags: []"})," to use the gallery filter"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Groups"})," — everything after ",e.jsx(n.code,{children:"/"})," in ",e.jsx(n.code,{children:"title"})," is the group name in the sidebar"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test locally first"})," — run ",e.jsx(n.code,{children:"npm run storybook"})," before deploying"]}),`
`]})]})}function d(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{d as default};
