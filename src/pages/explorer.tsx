import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContractRead } from "wagmi";
import { address, abi } from "../contracts/City";
import MintCity from "../components/Mint/MintCity";
import { useEffect, useState } from "react";
import CityView from "../components/GridMap/CityView";

export default function Explorer() {
	const { isConnected, address: userAddress } = useAccount();
	const [tokenIds, setTokenIds]: any = useState([]);

	const { data: cityBalance }: any = useContractRead({
		address: address,
		abi: abi,
		functionName: "balanceOf",
		args: [userAddress],
		watch: true,
	});

	const { data: citySupply } = useContractRead({
		address: address,
		abi: abi,
		functionName: "totalSupply",
		watch: true,
	});

	useEffect(() => {
		if (citySupply) {
			const l = [];
			for (let i = 0; i < citySupply; i++) {
				l.push(i);
			}

			setTokenIds(l);
		}
	}, [citySupply]);

	return (
		<>
			<div className="min-h-screen flex flex-col">
				<div className="items-center mx-auto mt-4 px-4 py-8">
					<div className="text-5xl justify-center flex font-medium text-white">
						City Explorer
					</div>
					<div className="pt-4 justify-center flex">
						<ConnectButton />
					</div>
				</div>
				<div className="items-center mx-auto px-36 grow">
					<div className="pb-4 flex">
						{isConnected && (
							<div>
								<MintCity />
								<span className="self-center text-xl text-white pl-6">
									Cities under your control: {" "}
									{!cityBalance && 
										<p className="inline">0</p>
									}
									{cityBalance && 
										<p className="inline">
											{cityBalance.toString()}
										</p>
									}
								</span>
							</div>
						)}
					</div>
					<div className="pt-4 pb-4 grid overflow-hidden grid-cols-6 gap-1.5">
						{tokenIds.map((tokenId: any) => (
							<CityView tokenId={tokenId} key={tokenId} />
						))}
					</div>
				</div>
				<footer className="footer footer-center p-4 text-base-content">
					<div>
						<p>
            <a href="https://twitter.com/Potrock_"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
						</p>
					</div>
				</footer>
			</div>
		</>
	);
}