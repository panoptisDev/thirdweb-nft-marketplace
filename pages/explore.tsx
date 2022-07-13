import { useState } from "react";
import { useRouter } from "next/router";

const Explore = () => {
  const [address, setAddress] = useState("");
  const router = useRouter();

  return (
    <div>
      <header className=" alchemy  mb-12 w-full   py-24">
        <div className="mr-12 mb-12 flex grow justify-end"></div>
        <div className="mb-12 flex flex-col items-center">
          <div className="mb-16 text-center text-white">
            <h1 className="font-body  mb-2 text-5xl font-bold">
              Alchemy NFT Explorer
            </h1>
            <p>An inspector to find NFTs by owner and contract address </p>
          </div>
          <div className="mb-4 flex w-2/6 flex-col items-center justify-center gap-y-2 ">
            <input
              className="w-full rounded-sm border py-2 px-3 focus:outline-none"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Paste wallet address"
            ></input>
          </div>
          <div className="flex w-2/6 justify-center">
            <button
              className="primary-button w-1/2"
              onClick={() => {
                console.log("goin", address);
                router.push(`/collection/${address}`);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Explore;
