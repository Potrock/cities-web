import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import FarmView from "../../components/CityView/FarmView";
import { address, abi } from "../../contracts/City";

export default function Page() {
	const [serverData, setServerData] = useState([]);
	const [idxList, setIdxList] = useState([]);
	const router = useRouter();
	const { id } = router.query;

	const { data, isLoading, isSuccess } = useContractRead({
		address: address,
		abi: abi,
		functionName: "tokenURI",
		args: [id],
	});

	useEffect(() => {
		if (!data) {
			return;
		}

		const fetchData = async () => {
			const serverData = await fetch(data);
			const res = await serverData.json();
			setServerData(res);
		};

		fetchData().catch(console.error);
	}, [isSuccess]);

	useEffect(() => {
		const l = [];
		for (let i = 0; i < serverData.farmCount; i++) {
			l.push(i);
		}
		setIdxList(l);
	}, [serverData]);

	return (
		<>
			<div className="flex justify-center">
				<h1 className="pt-10 text-4xl text-bold">City #{id}</h1>
			</div>
			<div className="pt-5 flex justify-center">
				<Link href="/explorer">
					<button className="btn btn-accent">Back</button>
				</Link>
			</div>
			<div className="pt-24 grid overflow-hidden grid-cols-3 grid-rows-1 gap-1.5">
				<div className="col-start-2 bg-gray-900 rounded-xl">
					<div className="relative px-4 h-80">
						{serverData.image && (
							<Image
								src={serverData.image}
								alt="image"
								layout="fill"
								objectFit="contain"
							/>
						)}
					</div>
					<div className="pt-6 pb-6">
						<p className="flex justify-center text-lg text-bold">
							Stats
						</p>
						<p className="pl-20 text-lg">Farms</p>
						{idxList.map((idx) => (
							<FarmView tokenId={id} idx={idx} key={idx} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}