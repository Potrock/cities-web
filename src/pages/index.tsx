import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContractRead } from "wagmi";
import { address, abi } from "../contracts/Chunk";
import MintChunk from "../components/MintChunk";
import GridMapView from "../components/GridMap/GridMapView";

function Page() {
  const { isConnected, address: userAddress } = useAccount();

  const { data: chunkBalance } = useContractRead({
    address: address,
    abi: abi,
    functionName: "balanceOf",
    args: [userAddress],
    watch: true,
  });

  const { data: chunksExisting } = useContractRead({
    address: address,
    abi: abi,
    functionName: "totalSupply",
    watch: true,
  });

  return (
    <>
      <h1 className="text-4xl">Chunk Explorer</h1>

      <ConnectButton />
      {isConnected && (
        <div>
          <p className="text-lg">
            Your chunk balance is: {chunkBalance && chunkBalance.toString()}
          </p>
        </div>
      )}
      <MintChunk />
      <GridMapView amountOwned={chunkBalance} amountExisting={chunksExisting}/>
    </>
  );
}

export default Page;
