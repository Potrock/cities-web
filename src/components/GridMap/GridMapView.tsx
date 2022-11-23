import OtherChunks from "../OtherChunks";
import OwnedChunks from "../OwnedChunks";
import { address, abi } from "../../contracts/Chunk";
import { useState, useEffect } from "react";
import { useAccount, useContractReads } from "wagmi";

export default function GridMapView({ amountOwned, amountExisting }) {
  const { address: userAddress } = useAccount();
  const [contracts, setContracts] = useState([]);
  const [ otherChunks, setOtherChunks ] = useState([]);
  const { data: ownedChunks, isSuccess: didReadOwnedIds } = useContractReads({
    contracts: contracts,
  });

  useEffect(() => {
    const contractList = [];
    console.log('Amount owned:', amountOwned.toString());
    for (let i = 0; i < amountOwned; i++) {
      contractList.push({
        address: address,
        abi: abi,
        functionName: "tokenOfOwnerByIndex",
        args: [userAddress, i],
      });
    }
    setContracts(contractList);
  }, [amountOwned]);

  useEffect(() => {
    const l = []
    const owned = ownedChunks?.map(val => val.toString())
    for (let i = 0; i < amountExisting; i++) {
        if (!owned?.includes(i.toString())) {
            l.push(i);
        }
    }

    setOtherChunks(l);
  }, [didReadOwnedIds, amountOwned, ownedChunks])

  return (
    <div>
      <h2 className="text-3xl">Your chunks:</h2>
      <OwnedChunks ownedChunks={ownedChunks} />
      <h2 className="text-3xl pt-1">Enemy Chunks:</h2>
      <OtherChunks otherChunks={otherChunks} />
    </div>
  );
}
