export default function ChatBubble({ message, id }) {
  const style = {
    justifyContent: id % 2 ? "flex-end" : "flex-start",
  };
  return (
    <div className="flex flex-row justify-start w-full" style={style}>
      {!(id % 2) ? (
        <div className="bubble bg-secondaryBtn rounded p-2 max-w-[50%] mt-4 mx-1 break-words text-textColor">
          {message}
        </div>
      ) : (
        <div className="bubble bg-accent rounded p-2 max-w-[50%] mt-4 mx-1 break-words justify-self-end">
          {message}
        </div>
      )}
    </div>
  );
}
