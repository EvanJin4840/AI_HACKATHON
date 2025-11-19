import React, { useEffect, useRef } from 'react';

function MessageList({ messages, isLoading }) {
  const endOfMessagesRef = useRef(null); // 스크롤을 위한 Ref

  // 새 메시지가 오면 맨 아래로 스크롤
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className={`message-bubble ${msg.sender}`}>
          {msg.text}
        </div>
      ))}
      {/* 로딩 인디케이터  */}
      {isLoading && (
        <div className="message-bubble bot loading">
          <span>.</span><span>.</span><span>.</span>
        </div>
      )}
      {/* 스크롤 기준점 */}
      <div ref={endOfMessagesRef} /> 
    </div>
  );
}
export default MessageList;