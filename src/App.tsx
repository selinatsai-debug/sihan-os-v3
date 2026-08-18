import React from 'react';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        backgroundColor: '#1e293b',
        borderRadius: '16px',
        padding: '30px',
        border: '1px solid #334155',
        textAlign: 'center',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
      }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', color: '#c084fc' }}>
          斯涵 OS
        </h1>
        <p style={{ color: '#94a3b8', marginBottom: '24px' }}>個人專屬中央控制台</p>

        <button 
          onClick={() => alert('成功點擊！系統運作完全正常！')}
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: '#9333ea',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '12px'
          }}
        >
          ✨ 點我測試互動反應
        </button>

        <button 
          onClick={() => alert('快捷工具箱解鎖成功！')}
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: '#db2777',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          🛠️ 快捷工具
        </button>
      </div>
    </div>
  );
}