import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";
import CardTopProvider from "../../components/shared/CardTopProvider";
import { FiCornerUpLeft, FiThumbsUp, FiMessageCircle, FiTrash2 } from "react-icons/fi";
import { assingCase, deleteCase } from "../../store/slices/cases/casesSlice";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import KeyWord from "../../components/shared/KeyWord";
import { assignCaseProvider } from "../../store/slices/providers/providersSlice";
import { deleteCaseRequest, getCaseIdRequest } from "../../services/cases.services";
import { getUserToken } from "../../helpers/localStorageManagement";
import { verifyJWT } from "../../helpers/jwt";
import { USER_ROLES } from "../../db/config";
import { showSuccessModal } from "../../components/modals/customModals";

const CaseInformation = () => {
	const [userCase, setUserCase] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const { id } = useParams();
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const getDatBD = async () => {
			setIsLoading(true);
			const userToken = getUserToken();
			const { uid } = await verifyJWT(userToken);

			// TODO: Si el caso no existe, mostrar en pantalla que no existe el caso
			const res = await getCaseIdRequest(id, userToken);

			if (res.status === 404) {
				setUserCase(null);
			} else {
				console.log(res);
				// console.log(res);
				setUserCase(res);
			}
			setIsLoading(false);
		};

		getDatBD();
	}, []);

	const takeCaseProvider = () => {
		dispatch(assingCase({ idCase: Number(id), provider: user }));
		// TODO: asignar este caso a un proveedor
		dispatch(assignCaseProvider({ userCase: userCase, provider: user }));
		navigate("/provider/home");
	};

	const deleteCaseForProvider = () => {
		console.log("aa");
	};

	// TODO: Marcar que una tarea esté hecha en la BD
	const showButtonsClient = () => {
		// console.log(userCase?.createdBy?.role);
		// if (userCase?.takenBy === null || userCase?.createdBy?.role === USER_ROLES.PROVIDER) {
		// 	return;
		// }
		// else {
		// console.log("Cliente");
		return (
			<>
				{!userCase.takenBy ? null : (
					<>
						<button
							className="flex px-3 py-2 bg-[#1FCE1B] mr-1 text-white font-semibold rounded justify-center items-center my-1 text-xs w-40 lg:w-60"
							onClick={() =>
								navigate(`/client/rate/provider/${userCase.takenBy.id}`, {
									state: { idCase: userCase.id },
								})
							}>
							<FiThumbsUp size={26}></FiThumbsUp> <span className="ml-1">Mark as done</span>
						</button>
						<button
							className="flex px-8 py-2 bg-[#5A8FCC] mr-1 text-white font-semibold rounded justify-center items-center my-1 text-xs w-40 lg:w-60"
							onClick={() => navigate("/client/chats")}>
							<FiMessageCircle size={26}></FiMessageCircle> <span className="ml-1">Chat</span>
						</button>
					</>
				)}

				<button
					onClick={() => handleDeleteCase()}
					className="flex px-3 py-2 bg-[#E72E2E] mr-1 text-white font-semibold rounded justify-center items-center my-1 text-xs w-40 lg:w-60 md">
					<FiTrash2 size={26}></FiTrash2>
					<span className="ml-1">Delete Case</span>
				</button>
			</>
		);
	};

	const showButtonsProvider = () => {
		if (userCase?.takenBy === null) {
			return (
				<>
					<button
						onClick={() => takeCaseProvider()}
						className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5">
						Take case
					</button>
				</>
			);
		} else {
			<>
				<button
					onClick={() => deleteCaseForProvider()}
					className="flex px-3 py-2 bg-[#E72E2E] mr-1 text-white font-semibold rounded justify-center items-center my-1 text-xs w-40 lg:w-60 md">
					<FiTrash2 size={26}></FiTrash2>
					<span className="ml-1">Delete Case</span>
				</button>
			</>;
		}
	};

	const handleDoneCase = async () => {};

	const handleDeleteCase = async () => {
		// if (userCase?.createdBy?.role === USER_ROLES.CLIENT) {
		// 	console.log("Eliminar caso");
		// 	// navigate("/client/home");
		// 	// TODO: ELIMINO EL CASO DEL USUARIO, PERO ES NECESARIO COLOCARLO COMO DISPONIBLE PARA OTRO PROVEEDOR
		// 	// dispatch(deleteCase(userCase));
		// } else {
		//
		// }

		await deleteCaseRequest(userCase?.id, getUserToken());
		await showSuccessModal(
			"Case deleted successfully",
			`The case ${userCase.caseTitle} was deleted from database.`,
			"Ok, go home"
		);
		navigate("/provider/home");
	};

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (userCase === null) {
		return <h2>Not found</h2>;
	}

	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="flex flex-col w-full mb-20">
				<div className="flex-grow self-center min-w-sm w-4/5 py-5 px-5 md:px-10 rounded-lg shadow bg-card my-7">
					<div className="flex flex-row w-full items-center">
						<FiCornerUpLeft
							className="text-8xl sm:text-6xl md:text-5xl mb-2 mr-3 md:mr-10 cursor-pointer"
							onClick={() => navigate(-1)}></FiCornerUpLeft>
						<h1 className="mb-2 text-3xl font-bold tracking-tight text-black">{userCase?.caseTitle}</h1>
					</div>
					<hr className="h-1 bg-black mb-5 f" />
					<div className="text-sm inline-flex items-center font-bold leading-sm px-7 py-1 my-1 mx-1 bg-categoryTag rounded-full text-white">
						{userCase?.category?.label}
					</div>
					<div className=" text-sm inline-flex items-center font-bold leading-sm px-7 py-1 my-1 mx-1 bg-serviceTag rounded-full text-white">
						{userCase?.service?.label}
					</div>
					<p className="my-3">{userCase?.caseDescription}</p>
					<div className="flex flex-col sm:flex-row items-center sm:items-start">
						{userCase?.keywords?.map((keyword) => (
							<KeyWord key={keyword.id} data={keyword} />
						))}
					</div>
					<div className="my-1">
						<p className="text-end font-light">
							{userCase?.takenOn ? `Taken on ${userCase?.takenOn}` : "Not assumed"}
						</p>
					</div>
					<hr className="h-1 bg-black mb-5 f" />
					<h2 className="my-5 text-base md:text-xl font-semibold tracking-tight text-black">Files uploads</h2>
					<h2 className="my-5 text-base md:text-xl font-semibold tracking-tight text-black">Taken by</h2>
					{userCase?.takenBy !== null ? (
						<div className="flex items-center justify-center my-5">
							<CardTopProvider data={userCase?.takenBy} />
						</div>
					) : (
						<h3 className="my-5 text-sm md:text-base font-normal tracking-tight text-black">
							This case has not been taken
						</h3>
					)}
					<div className="flex items-center justify-center flex-col md:flex-row">
						{userCase?.createdBy?.role === USER_ROLES.CLIENT ? showButtonsClient() : showButtonsProvider()}
					</div>
				</div>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};
export default CaseInformation;
