import { useState, useEffect, ChangeEvent } from 'react'
import './popup.css'

function Popup(): JSX.Element {
  const [memo, setMemo] = useState<string>('')

  // 初期読み込み
  useEffect(() => {
    const savedMemo = localStorage.getItem('memo') || ''
    setMemo(savedMemo)
  }, [])

  // 入力ごとに自動保存
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const value = e.target.value
    setMemo(value)
    localStorage.setItem('memo', value)
  }

  return (
    <div className="w-[420px] min-h-[500px] m-0 p-6 font-sans bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="mb-5 flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
        <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">Mini Memo</h1>
      </div>
      <textarea
        id="memo"
        className="w-full h-[400px] text-sm p-4 rounded-xl border-0 bg-white shadow-lg
                   placeholder:text-gray-400 text-gray-700 leading-relaxed
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:shadow-xl
                   transition-all duration-300 ease-in-out"
        value={memo}
        onChange={handleChange}
        placeholder="メモを入力してください..."
      />
      <div className="mt-3 text-xs text-gray-500 text-right">
        {memo.length > 0 && `${memo.length} 文字`}
      </div>
    </div>
  )
}

export default Popup
