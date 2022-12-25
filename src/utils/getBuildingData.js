import Web3 from "web3";
import BuildingManager from "../contracts/BuildingManager.json";

export const getBuildingData = async (tokenId) => {
	const web3 = new Web3("wss://polygon-mumbai.g.alchemy.com/v2/OWb3U7rJFrgVFsYXrGu-h0LId9ki14_V");
	const BuildingManagerContract = new web3.eth.Contract(
		BuildingManager.abi,
		BuildingManager.address
	);

	// const houseCount = await BuildingManagerContract.methods
	// 	.getBuildingCountById(0, tokenId)
	// 	.call();
	const farmCount = await BuildingManagerContract.methods
		.getBuildingCountById(0, tokenId)
		.call();
	return { farmCount: farmCount };
};
