import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createClient, defaultChains, chain } from 'wagmi'
import {jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const { chains, provider, webSocketProvider } = configureChains([chain.hardhat], 
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `http://127.0.0.1:8545`,
      }),
    }),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'My wagmi + RainbowKit App',
  chains,
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains }
