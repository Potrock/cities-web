import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContractRead } from "wagmi";
import { address, abi } from "../contracts/Chunk";

import { useEffect, useRef, useState } from "react";
import ChunkView from "../components/ChunkView";
import OwnedChunks from "../components/OwnedChunks";

function Page() {
  const { isConnected, address: userAddress } = useAccount();

  const { data: chunkBalance } = useContractRead({
    address: address,
    abi: abi,
    functionName: "balanceOf",
    args: [userAddress],
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

      <OwnedChunks amount={chunkBalance} />
    </>
  );
}

export default Page;
