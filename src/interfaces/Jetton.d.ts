export type PriceDiff = {
    TON: string;
  }
  
  export type Prices = {
    TON: number;
  }
  
  export type Price ={
    prices: Prices;
    diff_24h: PriceDiff;
    diff_7d: PriceDiff;
    diff_30d: PriceDiff;
  }
  
  export type  WalletAddress ={
    address: string;
    name: string;
    is_scam: boolean;
    icon: string;
    is_wallet: boolean;
  }
  
  export type  Jetton = {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    image: string;
    verification: string;
  }
  
  export type Lock = {
    amount: string;
    till: number;
  }
  
  export type Balance = {
    balance: string;
    price: Price;
    wallet_address: WalletAddress;
    jetton: Jetton;
    lock: Lock;
  }
  
  export type JettonsResponse = {
    balances: Balance[];
  }
  

//   const exampleData: JettonsResponse = {
//     balances: [
//       {
//         balance: "597968399",
//         price: {
//           prices: {
//             TON: 1.3710752873163712
//           },
//           diff_24h: {
//             TON: "-1.28%"
//           },
//           diff_7d: {
//             TON: "-2.74%"
//           },
//           diff_30d: {
//             TON: "-0.56%"
//           }
//         },
//         wallet_address: {
//           address: "0:10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365",
//           name: "Ton foundation",
//           is_scam: true,
//           icon: "https://ton.org/logo.png",
//           is_wallet: true
//         },
//         jetton: {
//           address: "0:0BB5A9F69043EEBDDA5AD2E946EB953242BD8F603FE795D90698CEEC6BFC60A0",
//           name: "Wrapped TON",
//           symbol: "WTON",
//           decimals: 9,
//           image: "https://cache.tonapi.io/images/jetton.jpg",
//           verification: "whitelist"
//         },
//         lock: {
//           amount: "597968399",
//           till: 1678223064
//         }
//       }
//     ]
//   };
  