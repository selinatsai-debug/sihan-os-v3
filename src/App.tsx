import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-700">
        <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          斯涵 OS
        </h1>
        <p className="text-slate-400 text-center mb-6">個人專屬中央控制台</p>

        <div className="space-y-4">
          <div className="p-4 bg-slate-700/50 rounded-xl border border-slate-600 hover:border-purple-500 transition cursor-pointer" onClick={() => alert('歡迎使用斯涵 OS！')}>
            <h2 className="font-semibold text-lg text-purple-300">✨ 系統狀態</h2>
            <p className="text-sm text-slate-300 mt-1">目前運行順暢，隨時準備就緒。</p>
          </div>

          <div className="p-4 bg-slate-700/50 rounded-xl border border-slate-600 hover:border-pink-500 transition cursor-pointer" onClick={() => setActiveTab('tools')}>
            <h2 className="font-semibold text-lg text-pink-300">🛠️ 快捷工具</h2>
            <p className="text-sm text-slate-300 mt-1">點擊這裡解鎖你的專屬快捷功能。</p>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          Powered by Vercel & React
        </div>
      </div>
    </div>
  );
}
