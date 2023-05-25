import InputField from "./InputField";
import History from "./History";
import { useState } from "react";

function Chat() {
  const [message, setMessage] = useState("");

  return (
    <section className="chat h-[600px] w-full bg-white rounded flex flex-col mx-auto drop-shadow md:w-3/4 lg:3/4">
      <h1 className="text-xl font-bold self-start p-2 w-full border-solid border-b border-gray-200 shadow h-[50px]">
        Chat History
      </h1>
      <History />
      <InputField message={message} onMessageSubmit={setMessage} />
    </section>
  );
}

export default Chat;
