import React from "react";
import AdminSideBar from "../../components/admin/AdminSideBar";
import ContainerProvider from "../../components/shared/ContainerProvider";
import Footer from "../../components/shared/Footer";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import Loading from "../../components/shared/Loading";

const HomeAdmin = () => {
	const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
		<Loading />;
	}

	return (
		<section className="flex">
			<ContainerSideBar>
				<AdminSideBar />
			</ContainerSideBar>
			<div className="w-full">
				<div className="flex flex-col justify-center items-center mt-10">
					<h1 className="text-mainTitle ml-5 text-5xl font-extrabold my-5"> Providers Management </h1>
					<h4 className="text-black ml-5 text-2xl my-4">
						Aprprove or decline providers according to your criteria
					</h4>
				</div>
				<ContainerProvider />
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default HomeAdmin;
