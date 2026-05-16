// stories/P5Sketch.jsx
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

export default function P5Sketch({ sketchCode }) {
  const containerRef = useRef(null);
  const p5InstanceRef = useRef(null);

  useEffect(() => {
    // Убиваем предыдущий экземпляр, если он был
    if (p5InstanceRef.current) {
      p5InstanceRef.current.remove();
    }

    // Создаём новый экземпляр p5, передавая ему код скетча в виде функции
    const sketch = new Function('p', sketchCode);
    p5InstanceRef.current = new p5(sketch, containerRef.current);

    return () => {
      p5InstanceRef.current?.remove();
    };
  }, [sketchCode]);

  return <div ref={containerRef} />;
}