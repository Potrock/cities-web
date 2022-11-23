import type { NextApiRequest, NextApiResponse } from 'next'
import { getBuildingData } from "../../../utils/getBuildingData";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    const buildingInfo = await getBuildingData(id);

    res.json({
        id: id,
        houseCount: buildingInfo,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuCu9i2z5SElrAJsq2fkjTie_2q_zCgl5TnY_VJKMPQ&s'
    });
}