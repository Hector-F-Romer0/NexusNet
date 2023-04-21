import React from "react";
import { Rating } from "react-simple-star-rating";
import KeyWord from "./KeyWord";
import { FiStar, FiX, FiCheck } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteProvider } from "../../store/slices/providers/providersSlice";

const CardProvider = ({ data }) => {
	const dispatch = useDispatch();

	const deletePrv = () => {
		dispatch(deleteProvider(data));
	};

	return (
		<div className="flex flex-col bg-card w-9/12 my-12 justify-center px-1 py-10 rounded-3xl lg:px-10 md:my-10 md:px-6 shadow-2xl">
			<div className="grid grid-cols-1  md:grid-cols-[150px_minMax(99px,_1fr)] lg:grid-cols-[150px_minMax(99px,_1fr)] gap-4">
				<div className=" h-full">
					<img src={data?.urlImg} alt="Provider photo" className="rounded-lg" />
				</div>
				<div className="">
					<div className="flex flex-col lg:flex-row  items-center justify-between">
						<h2 className="mb-2 text-xl md:text-3xl font-semibold tracking-tight text-black">
							{`${data?.names} ${data?.lastnames}`}
						</h2>
						<h3 className="mb-2 text-xs md:text-base font-normal tracking-tight text-black">
							@{data?.username}
						</h3>
					</div>
					<hr className="h-1 bg-black mb-5 f" />
					<div className="flex flex-wrap gap-2 lg:flex-row lg:gap-4 my-4">
						<div className="text-sm inline-flex items-center font-bold leading-sm px-4 py-1 bg-categoryTag rounded-full text-white w-fit">
							{data?.category?.name}
						</div>
						<div className=" text-sm inline-flex items-center font-bold leading-sm px-4 py-1 bg-serviceTag rounded-full text-white w-fit">
							{data?.service?.name}
						</div>
					</div>
					<div className="flex flex-col lg:flex-row justify-around items-center align-middle">
						<div className="flex flex-row">
							<Rating
								readonly={true}
								allowFraction={true}
								initialValue={data?.rate}
								emptyStyle={{ display: "flex" }}
								fillStyle={{ display: "-webkit-inline-box" }}
								fillIcon={<FiStar className="fill-[#FFCB45] text-xl md:text-3xl stroke-none" />}
								emptyIcon={<FiStar className="fill-[#D1D5DB] text-xl md:text-3xl stroke-none" />}
							/>
							<h3 className="mb-2 text-base md:text-lg font-semibold text-black">{data?.rate}</h3>
						</div>
						<div className="flex flex-row md:flex row">
							<button
								onClick={() => deletePrv()}
								className="bg-white w-16 h-16 hover:bg-gray-300 rounded-full items-center justify-center cursor-pointerl mx-2">
								<FiX className="text-[#FF0000] text-4xl mx-auto" />
							</button>
							<button className="bg-white w-16 h-16 hover:bg-gray-300 rounded-full items-center cursor-pointerl mx-2">
								<FiCheck className="text-[#1DCD0D] text-4xl mx-auto" />
							</button>
						</div>
					</div>

					<div className="flex flex-row flex-wrap mt-5">
						{data?.keywords?.map((keyword) => (
							<KeyWord key={keyword.id} data={keyword} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardProvider;
