import type { NextApiRequest, NextApiResponse } from "next";
import { getBuildingData } from "../../../utils/getBuildingData";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id } = req.query;

	const buildingInfo = await getBuildingData(id);

	res.json({
		id: id,
		// houseCount: buildingInfo.houseCount,
		farmCount: buildingInfo.farmCount,
		image: "https://i.postimg.cc/0yZTF3VS/overhead-image-town.png",
	});
}
