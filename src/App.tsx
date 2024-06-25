import "./App.css";
import "@twa-dev/sdk";
import Navbar from "./components/Navbar";
import SwapForm from "./components/SwapForm";
import Balance from "./components/Balance";

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
