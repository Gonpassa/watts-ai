export default function ChatBubble({ message }) {
  return (
    <div className="flex flex-row items-start w-full">
      <div className="bubble bg-blue-500 rounded p-2 max-w-[50%] mt-4 mx-1 break-words">
        {message}
      </div>
    </div>
  );
}
