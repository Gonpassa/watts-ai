export default function ChatBubble({ msg }) {
  return (
    <div className="flex flex-row items-start w-full">
      <div className="bubble bg-blue-500 rounded p-2 w-1/2 mt-4 mx-1">
        {msg}
      </div>
    </div>
  );
}
