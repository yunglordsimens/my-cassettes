import React, { useState } from 'react';

const SCALE = 0.28;
const CARD_W = 280;
const CARD_H = 180;

// Vite собирает все .stories.jsx в папке, кроме этого файла, на этапе сборки.
// При добавлении нового файла он появится в галерее автоматически — без ручного списка.
const storyModules = import.meta.glob(
  ['./*.stories.jsx', '!./Gallery.stories.jsx'],
  { eager: true }
);

// Преобразует title + имя экспорта в Storybook story ID.
// Пример: 'Мои кассеты/Processing' + 'TypingGlitch' → 'мои-кассеты-processing--typing-glitch'
function makeStoryId(title, exportName) {
  const titleSlug = title
    .toLowerCase()
    .replace(/\s*\/\s*/g, '-')
    .replace(/\s+/g, '-');
  const nameSlug = exportName
    .replace(/([A-Z])/g, (_, l, i) => i === 0 ? l.toLowerCase() : `-${l.toLowerCase()}`);
  return `${titleSlug}--${nameSlug}`;
}

// Строим плоский список кассет из всех найденных модулей
const cassettes = [];
for (const mod of Object.values(storyModules)) {
  const meta = mod.default;
  if (!meta?.title) continue;

  for (const [exportName, story] of Object.entries(mod)) {
    if (exportName === 'default') continue;
    if (typeof story !== 'object' || typeof story.render !== 'function') continue;

    cassettes.push({
      id: makeStoryId(meta.title, exportName),
      title: exportName.replace(/([A-Z])/g, ' $1').trim(),
      tags: [...(meta.tags ?? []), ...(story.tags ?? [])],
      renderFn: story.render,
    });
  }
}

// Навигация: читаем реальный URL родительского фрейма и меняем только ?path=
// Работает и на localhost, и на GitHub Pages (/my-cassettes/)
function navigateToStory(storyId) {
  // iframe всегда находится по адресу [base]/iframe.html
  // убираем iframe.html — получаем правильный base для любого деплоя
  const base = window.location.pathname.replace('iframe.html', '');
  window.parent.location.href = `${window.location.origin}${base}?path=/story/${storyId}`;
}

class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(e) { return { error: e }; }
  render() {
    if (this.state.error) return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100%', color: '#444', fontSize: 12, fontFamily: 'sans-serif',
      }}>
        preview unavailable
      </div>
    );
    return this.props.children;
  }
}

function MiniCard({ id, title, tags, renderFn }) {
  const innerW = CARD_W / SCALE;
  const innerH = CARD_H / SCALE;

  return (
    <div onClick={() => navigateToStory(id)} style={{ cursor: 'pointer' }}>
      <div
        style={{
          width: CARD_W, height: CARD_H,
          overflow: 'hidden', position: 'relative',
          borderRadius: 10, border: '1px solid #1f1f1f',
          background: '#080808', transition: 'border-color 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = '#444'}
        onMouseLeave={e => e.currentTarget.style.borderColor = '#1f1f1f'}
      >
        <div style={{
          width: innerW, height: innerH,
          transform: `scale(${SCALE})`, transformOrigin: 'top left',
          pointerEvents: 'none',
        }}>
          <ErrorBoundary>{renderFn()}</ErrorBoundary>
        </div>

        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '8px 12px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
          color: '#fff', fontFamily: 'system-ui, sans-serif',
        }}>
          <div style={{ fontWeight: 600, fontSize: 12 }}>{title}</div>
          <div style={{ fontSize: 10, opacity: 0.5 }}>{tags.join(' · ')}</div>
        </div>
      </div>
    </div>
  );
}

function GalleryPage() {
  const [activeTag, setActiveTag] = useState(null);

  const allTags = [...new Set(cassettes.flatMap(c => c.tags))];
  const visible = activeTag
    ? cassettes.filter(c => c.tags.includes(activeTag))
    : cassettes;

  const tagBtn = (label, isActive, onClick) => (
    <button key={label} onClick={onClick} style={{
      padding: '4px 14px', borderRadius: 20, border: '1px solid',
      borderColor: isActive ? '#fff' : '#333',
      background: isActive ? '#fff' : 'transparent',
      color: isActive ? '#000' : '#888',
      fontSize: 12, cursor: 'pointer',
    }}>
      {label}
    </button>
  );

  return (
    <div style={{ background: '#050505', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ display: 'flex', gap: 8, padding: '20px 24px 0', flexWrap: 'wrap' }}>
        {tagBtn('all', activeTag === null, () => setActiveTag(null))}
        {allTags.map(tag =>
          tagBtn(tag, activeTag === tag, () => setActiveTag(tag === activeTag ? null : tag))
        )}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 16, padding: 24,
      }}>
        {visible.map(c => <MiniCard key={c.id} {...c} />)}
      </div>
    </div>
  );
}

export default { title: 'Cassette Gallery' };

export const Gallery = {
  render: () => <GalleryPage />,
  parameters: { layout: 'fullscreen' },
};
