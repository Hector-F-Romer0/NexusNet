import FormCase from "../../components/client/FormCase";
import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";

const CaseForm = () => {
	return (
		<section className="flex">
			<SideBar />
			<div className="flex flex-col w-full">
				<div className="flex-grow self-center min-w-sm w-4/5 py-5 px-10 md:px-20 rounded-lg shadow bg-card my-7">
					<h1 className="text-xl md:text-4xl font-bold text-center mt-9">Case register</h1>
					<FormCase />
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default CaseForm;
