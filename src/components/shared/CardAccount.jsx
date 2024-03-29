import React, { useEffect, useState } from "react";
import { FiStar } from "react-icons/fi";

import { Rating } from "react-simple-star-rating";
import { getUserToken } from "../../helpers/localStorageManagement";
import { verifyJWT } from "../../helpers/jwt";
import { getUserIdRequest } from "../../services/users.services";
import { USER_ROLES } from "../../db/config";
import Loading from "./Loading";

const CardAccount = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// Load user information
		getUserData();
	}, []);

	const getUserData = async () => {
		setIsLoading(true);
		const { uid } = await verifyJWT(getUserToken());
		const res = await getUserIdRequest(uid);
		console.log(res);
		setUser(res);
		setIsLoading(false);
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="flex items-center justify-center bg-white w-full h-screen">
			<div className="w-10/12 h-5/6 py-8 my-6 flex flex-row items-center justify-center bg-[#E8F1FF] rounded-3xl shadow-xl mb-24">
				<div className="flex flex-col md:flex-row w-3/4 md:w-5/6">
					<div className="w-full md:w-2/6 flex flex-col items-center justify-center mx-0 md:mx-10">
						<img
							src={user?.urlImg}
							className="w-1/2 md:w-full bg-slate-600 rounded-3xl overflow-hidden"></img>
						<h1 className="text-lg my-3 font-semibold">{user?.typeUser?.toUpperCase()}</h1>
						{user?.role?.role === USER_ROLES.CLIENT ? (
							""
						) : (
							<>
								<Rating
									initialValue={user?.rate}
									readonly={true}
									allowFraction={true}
									emptyStyle={{ display: "flex" }}
									fillIcon={<FiStar className="fill-[#FFCB45] text-xs md:text-3xl stroke-none" />}
									emptyIcon={<FiStar className="fill-[#D1D5DB] text-xs md:text-3xl stroke-none" />}
									fillStyle={{ display: "-webkit-inline-box" }}
								/>
								<span>{user?.rate}</span>
							</>
						)}
						<p className="text-xs mt-5">
							{user?.role?.id === USER_ROLES.PROVIDER ? <span>{user?.phrase}</span> : ""}
						</p>
					</div>
					<div className="md:w-3/5 space-y-4 flex flex-col justify-start items-center">
						<div className="flex flex-col justify-center">
							<div className="my-5">
								<h1 className="text-center text-base md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-4 text-[##010334]">
									{`${user?.names} ${user?.lastnames}`}
								</h1>
								<hr className="my-2 mb-4 bg-black h-1 w-full"></hr>
							</div>
							<ul className="flex flex-col justify-center items-start w-full mb-4">
								<li className="flex flex-col sm:flex-row text-xs sm:text-sm md:text-base xl:text-xl text-gray-800 my-1 md:my-2 lg:my-4">
									<strong className="text-gray-900 sm:px-2">Email:</strong>
									<p>{user?.email} </p>
								</li>
								<li className="flex flex-col sm:flex-row text-xs sm:text-sm md:text-base xl:text-xl text-gray-800 my-1 md:my-2 lg:my-4">
									<strong className="text-gray-900 sm:px-2">Phone number:</strong>
									<p> {user?.phoneNumber} </p>
								</li>
								<li className="flex flex-col sm:flex-row text-xs sm:text-sm md:text-base xl:text-xl text-gray-800 my-1 md:my-2 lg:my-4">
									<strong className="text-gray-900 sm:px-2">Country:</strong>
									<p> {user?.country} </p>
								</li>
								<li className="flex flex-col sm:flex-row text-xs sm:text-sm md:text-base xl:text-xl text-gray-800 my-1 md:my-2 lg:my-4">
									<strong className="text-gray-900 sm:px-2">State:</strong>
									<p> {user?.state} </p>
								</li>
								<li className="flex flex-col sm:flex-row text-xs sm:text-sm md:text-base xl:text-xl text-gray-800 my-1 md:my-2 lg:my-4">
									<strong className="text-gray-900 sm:px-2">City:</strong>
									<p> {user?.city} </p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardAccount;
