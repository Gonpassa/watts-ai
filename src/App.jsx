import Chat from "./components/Chat";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <section className="h-screen w-full">
        <Header />
        <Chat />
      </section>
    </>
  );
}

export default App;
