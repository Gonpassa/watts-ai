import ChatBubble from "./ChatBubble";

function History({ messages, assistantResponse, conversation }) {
  const bubbles = messages.map((message, index) => {
    return (
      <ChatBubble
        key={index}
        message={message.content}
        role={message.role}
        id={index}
      />
    );
  });
  return (
    <section className="history h-[517px] overflow-auto">{bubbles}</section>
  );
}

export default History;
