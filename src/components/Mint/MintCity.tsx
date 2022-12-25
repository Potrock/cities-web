import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { address, abi } from "../../contracts/City";

export default function MintCity() {
  const { isConnected } = useAccount();

  const { config, error } = usePrepareContractWrite({
    address: address,
    abi: abi,
    functionName: "mint",
  });

  const { write: mint, isLoading, isError }: any = useContractWrite(config);

  return (
    <>
      <button
        className="btn btn-accent"
        disabled={!isConnected || isLoading}
        onClick={mint}
      >
        Mint a City
      </button>
    </>
  );
}
