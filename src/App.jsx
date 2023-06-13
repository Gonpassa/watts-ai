import Chat from "./components/Chat";
import Header from "./components/Header";

function App() {
  return (
    <>
      <section className="h-screen w-full p-4">
        <Header />
        <Chat />
      </section>
    </>
  );
}

export default App;
