import React, { useEffect, useState } from "react";
import { FiStar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const CardTopProvider = ({ data }) => {
	const [lastComments, setLastComments] = useState([]);
	console.log(data);

	useEffect(() => {
		const comments = data?.comments.slice(-3);
		setLastComments(comments);
		console.log(comments);
	}, [data]);
	return (
		<>
			<div className="flex flex-col justify-center items-center w-3/4 ">
				<div className="bg-[#D3E5FF] justify-center w-full items-center px-10 rounded-lg">
					<div className="flex flex-row  gap-2 sm:gap-8 min-w-sm w-3/5 py-8 px-8 bg-[#D3E5FF] items-center ">
						<img className="h-auto w-1/4 rounded-lg" src={data?.urlImg} alt="Provider photo" />
						<h3 className="text-lg font-bold">{`${data?.names} ${data?.lastnames}`}</h3>
						<Rating
							initialValue={data?.rate}
							readonly={true}
							allowFraction={true}
							emptyStyle={{ display: "flex" }}
							fillIcon={<FiStar className="fill-[#FFCB45] text-xs md:text-3xl stroke-none" />}
							emptyIcon={<FiStar className="fill-[#D1D5DB] text-xs md:text-3xl stroke-none" />}
							fillStyle={{ display: "-webkit-inline-box" }}
						/>
						<h3 className="text-lg font-bold">{data?.rate}</h3>
					</div>
					<div>
						{data?.comments?.length === 0 ? (
							""
						) : (
							<div className="mb-3">
								<span>{`Some users say this about ${data?.names} ${data?.lastnames}`} : </span>
								{lastComments?.map((comment) => {
									return (
										<span key={comment?._id} className="mt-4 text-md text-gray-600">
											{` ${comment?.comment}, `}
										</span>
									);
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default CardTopProvider;
