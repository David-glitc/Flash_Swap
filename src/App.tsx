import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";

import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";

function App() {
  const { network } = useTonConnect();

  return (
    <>
      <main className=" flex container justify-items-end gap-3 items-end mx-auto p-4">
        <TonConnectButton className=" items-end" />

        {network ? (
          <button>{network === CHAIN.MAINNET ? "mainnet" : "testnet"}</button>
        ) : (
          ""
        )}
      </main>
    </>
  );
}

export default App;
