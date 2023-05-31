import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FiStar, FiX, FiCheck } from "react-icons/fi";

import KeyWord from "./KeyWord";
import { USER_ROLES } from "../../db/config";
import { verifyJWT } from "../../helpers/jwt";
import { getUserToken } from "../../helpers/localStorageManagement";
import { approveProviderRequest, disapproveProviderRequest } from "../../services/providers.services";
import { showSuccessModal } from "../modals/customModals";

const CardProvider = ({ data, update }) => {
	const MySwal = withReactContent(Swal);
	const [role, setRole] = useState("");

	useEffect(() => {
		const getRoleToken = async () => {
			const { role } = await verifyJWT(getUserToken());
			console.log(role);

			setRole(role);
		};

		getRoleToken();
	}, []);

	const disapproveProvider = async (id) => {
		const res = await disapproveProviderRequest(id, getUserToken());
		showSuccessModal(
			"Provider deleted",
			`You decided that this provider doesn't comply with the rules of NexusNet. Thanks`,
			"Ok"
		);
		console.log(res);
		update();
	};

	const approveProvider = async (id) => {
		const res = await approveProviderRequest(id, getUserToken());
		showSuccessModal(
			"Provider accepted",
			`You decided that this provider complies with the rules of NexusNet. Thanks`,
			"Ok"
		);
		console.log(res);
		update();
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
							{data?.category?.label}
						</div>
						<div className=" text-sm inline-flex items-center font-bold leading-sm px-4 py-1 bg-serviceTag rounded-full text-white w-fit">
							{data?.service?.label}
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
						{role !== USER_ROLES.ADMIN ? (
							""
						) : (
							<div className="flex flex-row md:flex row">
								<button
									onClick={() => disapproveProvider(data.id)}
									className="bg-white w-16 h-16 hover:bg-gray-300 rounded-full items-center justify-center cursor-pointerl mx-2">
									<FiX className="text-[#FF0000] text-4xl mx-auto" />
								</button>
								<button
									onClick={() => approveProvider(data.id)}
									className="bg-white w-16 h-16 hover:bg-gray-300 rounded-full items-center cursor-pointerl mx-2">
									<FiCheck className="text-[#1DCD0D] text-4xl mx-auto" />
								</button>
							</div>
						)}
					</div>

					<div className="flex flex-row flex-wrap mt-5">
						{data?.keywords?.map((keyword) => (
							<KeyWord key={keyword.value} data={keyword} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardProvider;
