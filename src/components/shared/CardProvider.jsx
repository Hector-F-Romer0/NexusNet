import React from "react";
import { Rating } from "react-simple-star-rating";
import KeyWord from "./KeyWord";

const CardProvider = ({ data }) => {
	return (
		<>
			<div className="bg-card w-9/12 h-fit flex flex-col justify-center px-1 py-10 gap-6 rounded-lg lg:px-10 md:my-0 md:px-6 ">
				<div className="grid grid-cols-[80px_minMax(99px,_1fr)] md:grid-cols-[250px_minMax(99px,_1fr)] gap-4">
					<div className=" h-full">
						<img src={data?.urlImg} alt="Provider photo" className="rounded-lg" />
					</div>
					<div className="">
						<div className="flex flex-row  items-center justify-between">
							<h2 className="mb-2 text-xl md:text-3xl font-semibold tracking-tight text-black">
								{`${data?.names} ${data?.lastnames}`}
							</h2>
							<h3 className="mb-2 text-xs md:text-base font-normal tracking-tight text-black">
								@{data?.username}
							</h3>
						</div>
						<hr className="h-1 bg-black mb-5 f" />
						<div className="flex justify-around items-center align-middle">
							<Rating
								readonly={true}
								allowFraction={true}
								initialValue={data?.rate}
								emptyStyle={{ display: "flex" }}
								fillStyle={{ display: "-webkit-inline-box" }}
							/>
							<h3 className="mb-2 text-base md:text-lg font-semibold text-black">{data?.rate}</h3>
						</div>
						<div className="flex flex-row flex-wrap mt-5">
							{data?.keywords?.map((keyword) => (
								<KeyWord key={keyword.id} data={keyword} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardProvider;
