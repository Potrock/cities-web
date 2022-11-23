import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import { WagmiConfig } from "wagmi";

import { chains, client } from "../wagmi";
import { useEffect, useState } from "react";

import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          <NextHead>
            <title>Chunk Explorer</title>
          </NextHead>

          {mounted && <Component {...pageProps} />}
        </RainbowKitProvider>
      </WagmiConfig>
  );
}

export default App;
