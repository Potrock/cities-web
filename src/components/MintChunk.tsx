import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { address, abi } from "../contracts/Chunk";

export default function MintChunk() {
  const { isConnected } = useAccount();

  const { config, error } = usePrepareContractWrite({
    address: address,
    abi: abi,
    functionName: "mintChunk",
  });

  const { write: mint, isLoading, isError } = useContractWrite(config);

  return (
    <>
      <button
        className="btn"
        disabled={!isConnected || isLoading}
        onClick={mint}
      >
        Mint a Chunk
      </button>
    </>
  );
}
