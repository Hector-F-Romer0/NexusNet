import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserToken } from "../../helpers/localStorageManagement";
import { verifyJWT } from "../../helpers/jwt";
import { USER_ROLES } from "../../db/config";

const CardCase = ({ data }) => {
	const navigate = useNavigate();

	const handleNavigate = async () => {
		const { role } = await verifyJWT(getUserToken());
		// TODO: Investigar si existe alguna mejor forma de centralizar algunos datos fijos de la BD como los id de cada rol. Guardo el id del rol en el token, pero ¿Cómo sé a qué rol pertenece en front? ¿Cómo sé que acciones puede hacer el rol sin mandar petición al backend?
		// console.log(role);
		if (role === USER_ROLES.CLIENT) {
			navigate(`/client/case/${data?.id}`);
		} else if (role === USER_ROLES.PROVIDER) {
			navigate(`/provider/case/${data?.id}`);
		}
		// ? ¿Es necesario validar los dos siguientes casos?
		else if (role === USER_ROLES.ADMIN) {
			navigate("/admin/home");
		} else {
			navigate("/");
		}
	};

	return (
		<div
			onClick={() => handleNavigate()}
			className="block min-w-sm w-4/5 pt-5 px-10  rounded-lg shadow bg-card cursor-pointer shadow-3xl">
			<div className="flex flex-row gap-5 mb-3 flex-wrap text-sm md:text-xl ">
				<div className="text-sm inline-flex items-center font-bold leading-sm px-7 py-1 bg-categoryTag rounded-full text-white">
					{data.category?.label}
				</div>
				<div className=" text-sm inline-flex items-center font-bold leading-sm px-7 py-1 bg-serviceTag rounded-full text-white">
					{data.service?.label}
				</div>
			</div>
			<h3 className="mb-2 text-3xl font-bold tracking-tight text-black ">{data?.caseTitle}</h3>
			<hr className="h-1 bg-black mb-5 f" />
			<p className="font-light text-gray-700 text-sm md:text-xl">{data?.caseDescription}</p>
			<h4 className="font-thin text-base text-right text-gray-700 mt-4 pb-2">
				{data.takenOn ? `Taken on ${data.takenOn}` : "Not assumed"}
			</h4>
		</div>
	);
};

export default CardCase;
