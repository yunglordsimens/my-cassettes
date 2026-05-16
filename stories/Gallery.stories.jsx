import React from 'react';

import * as MyCassettes from './MyCassettes.stories';
import * as P5Mouse from './P5MouseTest.stories';
import * as Processing from './ProcessingSketch.stories';

// ─── МАСШТАБ МИНИАТЮРЫ ────────────────────────────────────────────
const SCALE = 0.28;
const CARD_W = 280;
const CARD_H = 180;

// ErrorBoundary — если скетч падает, показываем заглушку
class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(e) { return { error: e }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          height: '100%', color: '#555', fontSize: 13, fontFamily: 'sans-serif',
        }}>
          preview unavailable
        </div>
      );
    }
    return this.props.children;
  }
}

function MiniCard({ id, title, tags, renderFn }) {
  const innerW = CARD_W / SCALE;
  const innerH = CARD_H / SCALE;

  return (
    <a href={`/?path=/story/${id}`} target="_parent" style={{ textDecoration: 'none' }}>
      <div style={{
        width: CARD_W,
        height: CARD_H,
        overflow: 'hidden',
        position: 'relative',
        borderRadius: 10,
        border: '1px solid #1f1f1f',
        background: '#080808',
        cursor: 'pointer',
      }}>
        {/* Живая миниатюра — рендерим оригинальный компонент в уменьшении */}
        <div style={{
          width: innerW,
          height: innerH,
          transform: `scale(${SCALE})`,
          transformOrigin: 'top left',
          pointerEvents: 'none',
        }}>
          <ErrorBoundary>
            {renderFn()}
          </ErrorBoundary>
        </div>

        {/* Подпись внизу */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          padding: '8px 12px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
          color: '#fff',
          fontFamily: 'system-ui, sans-serif',
        }}>
          <div style={{ fontWeight: 600, fontSize: 12 }}>{title}</div>
          <div style={{ fontSize: 10, opacity: 0.5 }}>{tags.join(' · ')}</div>
        </div>
      </div>
    </a>
  );
}

// ─── МАНИФЕСТ — добавляй сюда новые кассеты ───────────────────────
// Одна строчка = одна кассета.
// id берёшь из URL Storybook после /?path=/story/
const cassettes = [
  {
    id: 'мои-кассеты-пример--hello',
    title: 'Hello',
    tags: ['demo', 'html'],
    renderFn: MyCassettes.Hello.render,
  },
  {
    id: 'мои-кассеты-пример--gradient-text',
    title: 'Gradient Text',
    tags: ['css', 'typography'],
    renderFn: MyCassettes.GradientText.render,
  },
  {
    id: 'мои-кассеты-p5-mouse-test--ellipse-follows-mouse',
    title: 'Ellipse Follows Mouse',
    tags: ['p5', 'interactive'],
    renderFn: P5Mouse.EllipseFollowsMouse.render,
  },
  {
    id: 'мои-кассеты-processing--typing-glitch',
    title: 'Typing Glitch',
    tags: ['processing', 'interactive'],
    renderFn: Processing.TypingGlitch.render,
  },
];
// ──────────────────────────────────────────────────────────────────

export default {
  title: 'Галерея',
};

export const Gallery = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: 16,
      padding: 24,
      background: '#050505',
      minHeight: '100vh',
    }}>
      {cassettes.map((c) => (
        <MiniCard key={c.id} {...c} />
      ))}
    </div>
  ),

  parameters: {
    layout: 'fullscreen',
  },
};
