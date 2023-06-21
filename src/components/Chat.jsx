import InputField from "./InputField";
import History from "./History";
import { useState, useEffect } from "react";
function Chat() {
  const [messages, setMessages] = useState([]);
  const [assistantResponse, setAssistantResponse] = useState({
    role: "assistant",
    content: "",
    isLoading: false,
  });
  const [conversation, setConversation] = useState(
    JSON.parse(localStorage.getItem("conversation")) || []
  );

  const addMessage = (message) => {
    setConversation((prevConversation) => [
      ...prevConversation,
      { role: "user", content: message },
    ]);
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: message },
    ]);
  };

  useEffect(() => {
    if (messages.length !== 0) {
      fetch("http://172.24.112.1:5000/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversation: conversation,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((reply) => {
          setConversation(reply);
        })
        .then(() => {
          setAssistantResponse((prevAssistantResponse) => ({
            ...prevAssistantResponse,
            isLoading: !assistantResponse.isLoading,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [messages]);

  //useEffect for when conversation is updated by api response
  useEffect(() => {
    console.log(conversation);

    if (conversation.length > 1 && !assistantResponse.isLoading) {
      setAssistantResponse((prevAssistantResponse) => ({
        ...prevAssistantResponse,
        isLoading: !assistantResponse.isLoading,
        content: conversation[conversation.length - 1].content,
      }));
    }
  }, [conversation]);
  return (
    <section className="chat h-[600px] w-full bg-white rounded flex flex-col mx-auto drop-shadow md:w-3/4 lg:3/4">
      <h1 className="text-xl font-bold self-start p-2 w-full border-solid border-b border-gray-200 shadow h-[50px] text-center">
        Chat History
      </h1>
      <History
        messages={messages}
        assistantResponse={assistantResponse}
        conversation={conversation}
      />
      <InputField
        onSubmitMessage={addMessage}
        loading={assistantResponse.isLoading}
      />
    </section>
  );
}

export default Chat;
