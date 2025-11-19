import React, { useState } from 'react';

function MessageInput({ onSend, disabled }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 전송(새로고침) 방지
    if (!inputText.trim() || disabled) return;
    onSend(inputText);
    setInputText(''); // 입력창 비우기
  };

  return (
    <form onSubmit={handleSubmit} className="message-input-form">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="메시지를 입력하세요..."
        disabled={disabled}
      />
      <button type="submit" disabled={disabled}>
        전송
      </button>
    </form>
  );
}
export default MessageInput;