import ChatBubble from "./ChatBubble";

function History({ messages }) {
  const bubbles = messages.map((message, i) => (
    <ChatBubble key={i} message={message} />
  ));

  return <section className="history h-[517px]">{bubbles}</section>;
}

export default History;
