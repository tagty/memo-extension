import { useState, ChangeEvent } from 'react';
import './popup.css';

function Popup() {
  // 初期読み込み（useStateの初期化関数を使用）
  const [memo, setMemo] = useState<string>(
    () => localStorage.getItem('memo') || ''
  );

  // 入力ごとに自動保存
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const value = e.target.value;
    setMemo(value);
    localStorage.setItem('memo', value);
  };

  return (
    <div className="m-0 min-h-[500px] w-[420px] bg-gradient-to-br from-slate-50 to-gray-100 p-6 font-sans">
      <div className="mb-5 flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
        <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
          Mini Memo
        </h1>
      </div>
      <textarea
        id="memo"
        className="h-[400px] w-full rounded-xl border-0 bg-white p-4 text-sm leading-relaxed text-gray-700 shadow-lg transition-all duration-300 ease-in-out placeholder:text-gray-400 focus:shadow-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        value={memo}
        onChange={handleChange}
        placeholder="メモを入力してください..."
      />
      <div className="mt-3 text-right text-xs text-gray-500">
        {memo.length > 0 && `${memo.length} 文字`}
      </div>
    </div>
  );
}

export default Popup;
