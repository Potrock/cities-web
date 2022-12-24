import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, defaultChains, chain } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { alchemyProvider } from "wagmi/providers/alchemy";

const { chains, provider, webSocketProvider } = configureChains(
	[chain.polygonMumbai],
	[alchemyProvider({apiKey: "OWb3U7rJFrgVFsYXrGu-h0LId9ki14_V"})]
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
