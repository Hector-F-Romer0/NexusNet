import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app, auth } from "../../../firebase.config";
import Swal from "sweetalert2";
import Select from "react-select";

import withReactContent from "sweetalert2-react-content";
import { getUserToken } from "../../helpers/localStorageManagement";
import { postKeywordRequest } from "../../services/keywords.services";
import { showErrorModal, showSuccessModal } from "../modals/customModals";
import { Controller, useForm } from "react-hook-form";
import { getRoleRegisterRequest, getRoleRequest } from "../../services/role.services";
import { USER_ROLES } from "../../db/config";
import { changeKeysOfArray } from "../../helpers/normalizeData";
import { getExisteUserEmailRequest, loginGoogleRequest } from "../../services/users.services";

const RegisterButtonGoogleButton = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState();
	const MySwal = withReactContent(Swal);
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data, user) => {
		// console.log(data.role);

		user.role = data.role;
		// console.log(user);
		setUser(user);
	};

	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then(async (result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;

				// Verificar si el email ya existe
				const exist = await getExisteUserEmailRequest({ email: user.email });
				console.log(exist);
				// console.log(user);
				const roles = await getRoleRegisterRequest();

				MySwal.fire({
					title: "Choose your role",
					html: (
						<form
							onSubmit={handleSubmit((data) => {
								onSubmit(data, user);
								MySwal.close();
							})}>
							<div className="my-3">
								<label htmlFor={"service"} className="block mb-2 text-base font-semibold text-gray-900">
									Services
								</label>
								<Controller
									control={control}
									name="role"
									rules={{ required: true }}
									render={({ field: { onChange } }) => (
										<Select onChange={onChange} options={roles} />
									)}></Controller>
							</div>
							<button
								type="submit"
								className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5">
								Select
							</button>
						</form>
					),
					width: "600px",
					showConfirmButton: false,
				}).then((result) => {
					console.log(user);
					if (user.role.value === USER_ROLES.CLIENT) {
						navigate("/register/client", {
							state: {
								userData: {
									email: user.email,
									password: user.uid,
									role: user.role,
									imageGoogle: user.photoURL,
								},
							},
						});
					} else {
						navigate("/register/provider", {
							state: {
								userData: {
									email: user.email,
									password: user.uid,
									role: user.role,
									imageGoogle: user.photoURL,
								},
							},
						});
						console.log("AAAAA");
					}
				});
				// await Swal.fire({
				// 	title: "Choose your role:",
				// 	input: "text",
				// 	inputLabel: "role",
				// }).then(async (result) => {
				// 	try {
				// 		MySwal.fire({
				// 			title: "Choose your role",
				// 			html: (
				// 				<>
				// 					<h1>Hola</h1>
				// 				</>
				// 			),
				// 		});
				// 		console.log(result);
				// 		// if (!result.value) {
				// 		// 	return await showErrorModal("Empty field", "You need to write something!", "Ok, I'll try");
				// 		// }
				// 		// await postKeywordRequest({ label: result.value }, getUserToken());

				// 		// showSuccessModal(
				// 		// 	"Keyword create successfully",
				// 		// 	`The keyword ${result.value} was created from database.`,
				// 		// 	"Done"
				// 		// );
				// 	} catch (error) {
				// 		return await showErrorModal(error.name, error.message, "Ok, I'll try");
				// 	}
				// });
			})
			.catch(async (error) => {
				// Handle Errors here.
				await showErrorModal(error.name, error.message, "Ok");
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
	};
	return (
		<button
			onClick={signInWithGoogle}
			type="button"
			className="flex break-inside bg-white text-black border-2 border-blue-200 rounded-3xl px-6 py-3 mb-4 w-full">
			<div className="m-auto">
				<div className="flex items-center justify-start flex-1 space-x-4">
					<svg width="25" height="25" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
						/>
					</svg>
					<span className="font-medium mb-[-2px] text-xs lg:text-base">Register with Google</span>
				</div>
			</div>
		</button>
	);
};

export default RegisterButtonGoogleButton;
