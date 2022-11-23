import { useEffect, useState } from "react";
import { useAccount, useContractReads } from "wagmi";
import ChunkView from "./ChunkView";
import { address, abi } from "../contracts/Chunk";

export default function OwnedChunks({ amount }) {
  const { address: userAddress } = useAccount();
  const [contracts, setContracts] = useState([]);
  const { data, isError, isLoading } = useContractReads({
    contracts: contracts
  })

  useEffect(() => {
    const contractList = [];
    for (let i = 0; i < amount; i++) {
        contractList.push({
            address: address,
            abi: abi,
            functionName: 'tokenOfOwnerByIndex',
            args: [userAddress, i]
        })
    }
    setContracts(contractList);
  }, [])

  if (isLoading) {
    return (<p>Loading...</p>)
  }
  return (
    <div className="pt-4 grid overflow-hidden grid-cols-6 grid-rows-6 gap-1.5">
      {data?.map((id) => <ChunkView tokenId={id.toString()} key={id.toString()}/>)}
    </div>
  );
}
