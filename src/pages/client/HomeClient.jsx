import SideBar from "../../components/shared/SideBar";
import CardCase from "../../components/shared/CardCase";
import Footer from "../../components/shared/Footer";
const HomeClient = () => {
	return (
		<section className="flex">
			<SideBar />
			<div className=" text-gray-900 font-semibold">
				<h1 className="text-4xl font-bold text-center mt-9">Welcome to my cases - client</h1>
				<div className="flex flex-row justify-center align-middle gap-10 my-7 text-xs md:text-2xl ">
					<button className="bg-gray-200 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer ">
						Search providers
					</button>
					<button className="bg-gray-200 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer">
						Upload your cases
					</button>
				</div>
				<div className="flex flex-col items-center justify-center flex-wrap gap-11 mb-5">
					<CardCase />
					<CardCase />
					<CardCase />
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default HomeClient;
