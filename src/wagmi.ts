import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, defaultChains, chain } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { alchemyProvider } from "wagmi/providers/alchemy";

const { chains, provider, webSocketProvider } = configureChains(
	[chain.polygonMumbai],
	[alchemyProvider({apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || ""})]
);

const { connectors } = getDefaultWallets({
	appName: "Crypto Cities",
	chains,
});

export const client = createClient({
	autoConnect: true,
	connectors,
	provider,
	webSocketProvider,
});

export { chains };
