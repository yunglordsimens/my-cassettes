import React from 'react';

export default {
  title: 'My Cassettes/Sketches',
  tags: ['demo', 'html'],
};

export const Hello = {
  render: () => (
    <div style={{ padding: 20, background: 'tomato', color: 'white' }}>
      Привет, это моя первая кассета!
    </div>
  ),
};

export const GradientText = {
  render: () => (
    <p style={{
      fontSize: '2rem',
      background: 'linear-gradient(to right, red, orange)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>
      Градиентный текст
    </p>
  ),
  tags: ['css', 'typography'],
};