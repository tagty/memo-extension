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
    <div className="w-[400px] m-0 p-2.5 font-sans">
      <h1 className="mb-2.5 text-base">Memo</h1>
      <textarea
        id="memo"
        className="w-full h-80 text-sm p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={memo}
        onChange={handleChange}
        placeholder="メモを入力してください..."
      />
    </div>
  )
}

export default Popup
