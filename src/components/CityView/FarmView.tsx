import { useEffect, useState } from "react";
import { useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";
import Farm from "../../contracts/Farm.json";

export default function FarmView({ tokenId, idx }) {
    const [harvestActive, setHarvestActive] = useState("");

	const {
		data: eligibleFood,
		isLoading,
		isSuccess,
	} = useContractRead({
		address: Farm.address,
		abi: Farm.abi,
		functionName: "getEligibleFood",
		args: [tokenId, idx],
	});

    const {
        data: farmInfo,
    } = useContractRead({
        address: Farm.address,
        abi: Farm.abi,
        functionName: "getBuildingInfo",
        args: [tokenId, idx]
    });

	const { config, error } = usePrepareContractWrite({
		address: harvestActive,
		abi: Farm.abi,
		functionName: "harvest",
		args: [tokenId, idx],
	});
	const { write } = useContractWrite(config);

    useEffect(() => {
        if (eligibleFood && eligibleFood > 0) {
            setHarvestActive(Farm.address);
        }
    }, [eligibleFood])

	return (
		<div className="pl-14 py-4">
			{(farmInfo && eligibleFood) && <p className="inline">Tier {farmInfo[1]} Ready to harvest {eligibleFood.toString()} Food</p>}
            {!eligibleFood && <p>No food ready!</p>}
            <button className="ml-4 btn btn-secondary inline pl-4" disabled={!harvestActive} onClick={write}>Harvest</button>
		</div>
	);
}