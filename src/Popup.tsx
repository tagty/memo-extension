import { useState, useRef, useEffect, ChangeEvent } from 'react';
import './popup.css';

function Popup() {
  const [memo, setMemo] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // textareaへの参照
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // マウント時にChrome Storage APIからデータを読み込み、textareaにフォーカスを当てる
  useEffect(() => {
    const loadMemo = async () => {
      try {
        const result = await chrome.storage.sync.get(['memo']);
        const savedMemo = result.memo;
        setMemo(typeof savedMemo === 'string' ? savedMemo : '');
        textareaRef.current?.focus();
      } catch (err) {
        setError('メモの読み込みに失敗しました');
        console.error('Failed to load memo:', err);
        textareaRef.current?.focus();
      }
    };

    loadMemo();
  }, []);

  // 入力ごとに自動保存
  const handleChange = async (
    e: ChangeEvent<HTMLTextAreaElement>
  ): Promise<void> => {
    const value = e.target.value;
    setMemo(value);

    try {
      await chrome.storage.sync.set({ memo: value });
      setError(null);
    } catch (err) {
      setError('メモの保存に失敗しました');
      console.error('Failed to save memo:', err);
    }
  };

  return (
    <div className="m-0 min-h-[500px] w-[420px] bg-gradient-to-br from-slate-50 to-gray-100 p-6 font-sans">
      <div className="mb-5 flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
        <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
          Mini Memo
        </h1>
      </div>
      {error && (
        <div className="mb-3 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}
      <textarea
        ref={textareaRef}
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
