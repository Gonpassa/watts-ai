import { FiSend } from "react-icons/fi";

function InputField({ onSubmitMessage }) {
  return (
    <form
      className="inputs flex flex-row items-center w-full h-[50px]"
      onSubmit={onSubmitMessage}
    >
      <div className="w-5/6 h-full flex flex-wrap">
        <input
          type="text"
          placeholder="Type your message"
          className="break-words bg-gray-100 w-full h-full p-2 text-gray-700 focus:outline-none rounded"
          name="msg"
        />
      </div>
      <button
        type="submit"
        id="btn"
        className="self-stretch bg-gray-100 rounded w-1/6"
      >
        <FiSend className="w-[50px] h-full p-4 mx-auto hover:scale-125 text-gray-600" />
      </button>
    </form>
  );
}

export default InputField;