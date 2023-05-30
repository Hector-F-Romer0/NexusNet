import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

import Logo from "../../assets/logo.png";
import FormInput from "../../components/shared/FormInput";
import DropDownList from "../../components/shared/DropDownList";
import FacebookButton from "../../components/shared/FacebookButton";
import GoogleButton from "../../components/shared/GoogleButton";
import { getRoleRequest } from "../../services/role.services";
import { getUserToken } from "../../helpers/localStorageManagement";
import { USER_ROLES } from "../../db/config";
import Loading from "../../components/shared/Loading";

const SignUp = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [role, setRole] = useState([]);
	const MySwal = withReactContent(Swal);

	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		//? Cargar roles
		getDataBD();
	}, []);

	const getDataBD = async () => {
		const roles = await getRoleRequest(getUserToken());
		const rolesWithOutAdmin = roles.filter((role) => {
			if (role.value !== USER_ROLES.ADMIN) {
				return role;
			}
		});
		setRole(rolesWithOutAdmin);
	};

	const onSubmit = (data) => {
		console.log(data);
		if (data?.confirmationPassword !== data.password) {
			MySwal.fire({
				title: "Passwords don't matches.",
				icon: "error",
				text: "Passwords must be the same. Write again.",
				confirmButtonColor: "#007BFF",
			});
			return;
		}

		if (role === USER_ROLES.CLIENT) {
			navigate("/register/client", {
				state: {
					userData: data,
				},
			});
		} else {
			navigate("/register/Provider", {
				state: {
					userData: data,
				},
			});
		}
	};

	if (isLoading) {
		<Loading />;
	}

	return (
		<div className="bg-white flex justify-center items-center h-screen flex-wrap">
			<div className="bg-card w-11/12 lg:w-3/4 h-fit flex flex-col justify-center px-1 py-10 gap-6 rounded-lg lg:px-10 md:my-0 md:px-6 overflow-y-visible">
				<div className="flex flex-col items-center justify-center flex-wrap lg:flex-row">
					<div className="flex flex-row items-center justify-center">
						<img src={Logo} alt="NexusNet logo" className="w-2/12" />
						<h1 className=" text-2xl font-bold text-left pl-5 md:text-4xl">Sign Up</h1>
					</div>
					<div className="flex flex-col items-center gap-5 lg:flex-row">
						<h2 className="text-md  font-normal text-center my-5 lg:text-base">Don't have an account?</h2>
						<span
							onClick={() => navigate("/signin")}
							className="text-blue-700 text-base font-semibold text-center block mx-auto cursor-pointer hover:text-blue-950">
							Sign In
						</span>
					</div>
				</div>
				<div className="px-12">
					<form action="" onSubmit={handleSubmit(onSubmit)}>
						<FormInput
							label="Email"
							type="email"
							registerName="email"
							placeholder="email@example.com"
							register={register}
							validations={{
								required: {
									value: true,
									message: "Email is required.",
								},
								minLength: {
									value: 3,
									message: "Email must be between 3 and 18 characters.",
								},
							}}
							error={errors.email}
						/>
						<div className="flex flex-col justify-around gap-0 md:flex-row md:gap-7">
							<FormInput
								label="Password"
								type="password"
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
							<FormInput
								label="Confirm password"
								type="password"
								registerName="confirmationPassword"
								register={register}
								validations={{
									required: {
										value: true,
										message: "Password is required.",
									},
								}}
								error={errors.confirmationPassword}
							/>
						</div>
						<div className="my-3">
							<Controller
								control={control}
								name="role"
								rules={{ required: true }}
								defaultValue={role[0]?.id}
								render={({ field }) => (
									<Select {...field} options={role} getOptionLabel={(option) => option.role} />
								)}></Controller>
						</div>
						<div className="flex justify-center mt-5">
							<button
								type="submit"
								className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 w-2/4">
								Sign Up
							</button>
						</div>
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

export default SignUp;
