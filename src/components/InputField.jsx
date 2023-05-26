import { useState } from "react";
import { FiSend } from "react-icons/fi";

function InputField({ onSubmitMessage }) {
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    document.querySelector("input").value = "";
    onSubmitMessage(message);
    setMessage("");
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const buttonClassName = `self-stretch ${
    !message ? "bg-gray-100" : "bg-primaryBtn"
  }`;

  return (
    <form
      className="inputs flex flex-row items-center w-full h-[50px]"
      onSubmit={handleSubmit}
    >
      <div className="w-[95%] mr-auto h-full flex flex-wrap">
        <input
          type="text"
          placeholder="Type your message"
          className="bg-gray-100 w-full h-full p-2 text-gray-700 focus:outline-none rounded"
          name="msg"
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <button
        type="submit"
        id="btn"
        disabled={!message}
        className={buttonClassName}
      >
        <FiSend className="w-[50px] h-full p-4 mx-auto hover:scale-125 text-background" />
      </button>
    </form>
  );
}

export default InputField;
