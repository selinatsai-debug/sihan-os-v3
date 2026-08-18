import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // 如果你的專案是用 index.css，如果是 tailwind.css 可以自行調整

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}