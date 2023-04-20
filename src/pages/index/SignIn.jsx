import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from "react-redux";

import FormInput from "../../components/shared/FormInput";
import GoogleButton from "../../components/shared/GoogleButton.jsx";
import FacebookButton from "../../components/shared/FacebookButton.jsx";
import Logo from "../../assets/logo.png";

import { getUser } from "../../store/slices/user/thunks";
import { getUsersDB } from "../../store/slices/usersDB/thunks";
import { setUser } from "../../store/slices/user/userSlice";

const SignIn = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const MySwal = withReactContent(Swal);
	const { usersDB } = useSelector((state) => state.usersDB);

	useEffect(() => {
		// TODO: AJUSTAR TODAS LAS CARGAS DE ESTADO DEL REDUCER PUESTO QUE ESTA ES LA RUTA RAÍZ DEL APLICATIVO.
		dispatch(getUsersDB());
	}, []);

	const onSubmitSignIn = (data) => {
		const existsUser = usersDB.find((user) => user.username == data.username);

		// ! POSIBLE ELIMINACIÓN DE ESTO Y MANEJARLO POR THUNKS
		if (!existsUser || data.password !== existsUser?.password) {
			MySwal.fire({
				title: "Incorrect data",
				icon: "error",
				text: "That password or username was incorrect. Please try again.",
				confirmButtonColor: "#007BFF",
			});
		} else {
			console.log(data);

			dispatch(setUser(existsUser));
			navigate("/client/home");
		}
	};

	return (
		<div className="bg-white flex justify-center items-center h-screen">
			<div className="bg-card w-3/4 h-auto flex flex-col justify-center px-6 py-16 gap-6 rounded-lg  lg:gap-16 lg:px-10 md:flex-row md:my-0">
				<div>
					<h1 className="text-4xl font-bold text-center mt-9">Sign In</h1>
					<img src={Logo} alt="NexusNet logo" className="w-2/4 mx-auto lg:w-3/5" />
					<h2 className="text-base font-normal text-center my-5">Don't have an account?</h2>
					<span
						onClick={() => navigate("/signup")}
						className="text-blue-700 text-base font-semibold text-center block mx-auto cursor-pointer hover:text-blue-950">
						Sign up
					</span>
				</div>
				<div className="self-center">
					<form action="" onSubmit={handleSubmit(onSubmitSignIn)}>
						<FormInput
							label="Username"
							type="text"
							registerName="username"
							placeholder="Username"
							register={register}
							validations={{
								required: {
									value: true,
									message: "Username is required.",
								},
								minLength: {
									value: 3,
									message: "Username must be between 3 and 18 characters.",
								},
							}}
							error={errors.username}
						/>
						<FormInput
							label="Password"
							type="password"
							placeholder="Password"
							registerName="password"
							register={register}
							validations={{
								required: {
									value: true,
									message: "Password is required.",
								},
							}}
							error={errors.password}
						/>
						<button
							type="submit"
							className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 w-full">
							Sign in
						</button>
					</form>
					<div className="flex flex-col mt-10">
						<GoogleButton />
						<FacebookButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
