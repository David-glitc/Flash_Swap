import "./App.css";
import "@twa-dev/sdk";
import Navbar from "./components/Navbar";
import SwapForm from "./components/SwapForm";

function App() {

  return (
    <>
      <main className="container mx-auto"> 
      <Navbar/>
      <div>
        <SwapForm/>
      </div>
      </main>
    </>
  );
}

export default App;
