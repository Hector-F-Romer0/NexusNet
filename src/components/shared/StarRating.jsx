import React from "react";
import { Rating } from "react-simple-star-rating";
import { FiStar } from "react-icons/fi";

const StarRating = ({ setRating }) => {
	const handleRating = (rate) => {
		setRating(rate);
	};
	return (
		<>
			<Rating
				onClick={handleRating}
				emptyStyle={{ display: "flex" }}
				fillStyle={{ display: "-webkit-inline-box" }}
				fillIcon={<FiStar className="fill-[#FFCB45] text-4xl md:text-7xl stroke-none" />}
				emptyIcon={<FiStar className="fill-[#D1D5DB] text-4xl md:text-7xl stroke-none" />}
			/>
		</>
	);
};

export default StarRating;
