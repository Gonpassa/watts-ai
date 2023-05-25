import ChatBubble from "./ChatBubble";

function History({ message }) {
  return (
    <section className="history h-[517px]">
      <ChatBubble message={message} />
    </section>
  );
}

export default History;
