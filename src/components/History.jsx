import ChatBubble from "./ChatBubble";

function History({ messages, result }) {
  const bubbles = messages.map((message, i) => (
    <>
      <ChatBubble key={i} message={message} />
      <ChatBubble message={result} />
    </>
  ));

  return (
    <section className="history h-[517px] overflow-auto">{bubbles}</section>
  );
}

export default History;
