import {FiSend} from 'react-icons/fi';
function Chat() {
  return (
    <div className='bg-background h-full w-full'>
        <section className="chat h-[600px] w-full bg-white rounded flex flex-col mx-auto drop-shadow md:w-3/4 lg:3/4">
            <h1 className="text-xl font-bold self-start p-2 w-full border-solid border-b border-gray-200 shadow h-[50px]">Chat History</h1>
            <section className="history h-[517px]"></section>
            <div className="inputs flex flex-row items-center w-full h-[50px]">
                <input type="text" placeholder='Type your message' className='bg-gray-100 w-full h-full p-2 text-black focus:outline-none rounded'/>
                <button className='self-stretch bg-gray-100 rounded'>
                    <FiSend className='w-[50px] h-full p-4 mx-auto hover:scale-125 text-gray-500'/>
                </button>
            </div>
        </section>
    </div>
  )
}

export default Chat