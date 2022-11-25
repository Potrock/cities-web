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
		image: "https://i.ibb.co/xhGK9vw/DALL-E-2022-11-24-11-31-25-pixel-art-of-the-top-down-view-of-a-farm-with-a-house-and-a-road.png",
	});
}
