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
    <div>
      <h1>Memo</h1>
      <textarea
        id="memo"
        value={memo}
        onChange={handleChange}
        placeholder="メモを入力してください..."
      />
    </div>
  )
}

export default Popup
