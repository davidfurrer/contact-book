import ContactBook from "./components/ContactBook/index";
import "./App.css";

function App() {
  return (
    <main>
      <header>
        <h1>Contact Book</h1>
      </header>
      <div className="mainSection">
        <ContactBook key="_" />
      </div>
    </main>
  );
}

export default App;
