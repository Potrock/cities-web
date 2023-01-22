import Image from "next/image";
import Link from "next/link";
import homeLogo from "../public/homeLogo.png"

export default function Landing() {
	return (
    <div className="bg-gray-900 min-h-screen px-8 pt-6">
      <div className="relative z-0 h-full overflow-y-auto focus:outline-none">
        <div className="items-center px-4 py-8 mx-auto mt-4 sm:mt-6 sm:px-8 md:px-12">
          <div className="relative px-4 md:px-24">
            <div className="flex justify-center">
              <Image src={homeLogo} height={400} width={400} alt="A pixel farm"/>
            </div>
            <div className="py-6 md:py-12 space-y-[1rem]">
              <div className="text-left text-6xl font-medium text-white md:text-[54px] md:text-center pb-4">
                <p>City Builder</p>
              </div>
              <div className="md:text-center lg:text-center md:block lg:block">
                <p>Fully decentralized on chain crypto strategy game.</p>
                <p>Claim your city. Build upgrades. All on-chain and non-custodial.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 py-6 mx-auto mb-12 md:py-12 2xl:w-3/4">
              <div className="space-y-4">
                <div className="flex flex-row no-wrap">
                  <div className="text-[1.69rem] font-medium text-white">
                    Claim
                  </div>
                </div>
                <div>
                  Mint your city. Unlock the full power of ERC721 compliant NFTs and integrate with other platforms.
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-row no-wrap">
                  <div className="text-[1.69rem] font-medium text-white">
                    Build
                  </div>
                </div>
                <div>
                  Build farms, barracks, and more. Harvest food, train troops, and upgrade buildings to boost production.
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-row no-wrap">
                  <div className="text-[1.69rem] font-medium text-white">
                    Own
                  </div>
                </div>
                <div>
                  You, and only you, own your city. Trade it, sell it, hodl it. All stats, and actions are completely on-chain and non-custodial.
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center flex">
            <Link href="/explorer">
            <button className="btn btn-lg btn-warning">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
);
}
