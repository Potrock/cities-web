import { address, abi } from "../contracts/Chunk";
import { useState, useEffect } from "react"; 
import { useContractReads } from "wagmi";
import ChunkView from "./ChunkView";

export default function OtherChunks({ otherChunks }) {
  const [contracts, setContracts] = useState([]);
  const { data, isError, isLoading } = useContractReads({
    contracts: contracts,
  });

  useEffect(() => {
    if (!otherChunks) {
        return;
    }
    const contractList = [];
    for (let i = 0; i < otherChunks.length; i ++) {
        contractList.push({
            address: address,
            abi: abi,
            functionName: 'tokenByIndex',
            args: [otherChunks[i]]
        })
    }
    setContracts(contractList);
  }, [otherChunks])

  return (
    <div className="pt-4 pb-4 grid overflow-hidden grid-cols-6 gap-1.5">
      {data?.map((id) => (
        <ChunkView tokenId={id.toString()} key={id.toString()} />
      ))}
    </div>
  );
}
