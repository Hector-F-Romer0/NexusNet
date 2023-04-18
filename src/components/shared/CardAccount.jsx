import React from "react";
import imgClient from "../../assets/imgClient.jpg";

const CardAccount = () => {
	return (
		<div className="flex items-center justify-center bg-white">
			<div className="w-10/12 h-5/6 py-8 my-6 flex flex-row items-center justify-center bg-[#E8F1FF] rounded-3xl shadow-xl">
				<div className="flex flex-col md:flex-row w-3/4 md:w-5/6">
					<div className="w-full md:w-2/6 flex flex-col items-center justify-center mx-0 md:mx-10">
						<img src={imgClient} className="w-1/2 md:w-full bg-slate-600 rounded-3xl overflow-hidden"></img>
						<h1 className="text-lg my-3"> Client </h1>
						<p className="text-xs">
							{" "}
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste laborum soluta, ex ducimus,
							quas saepe nostrum nesciunt illum, dolore perferendis dignissimos iusto? Ipsa culpa, autem
							repudiandae aliquid facere pariatur nisi?{" "}
						</p>
					</div>
					<div className="md:w-3/5 space-y-4 flex flex-col justify-start items-center">
						<div className="flex flex-col justify-center">
							<div className="my-5">
								<h1 className="text-center text-base md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-4 text-[##010334]">
									Pedro Manos Tijeras
								</h1>
								<hr className="my-2 mb-4 bg-black h-1 w-full"></hr>
							</div>
							<ul className="flex flex-col justify-center items-start w-full mb-4">
								<li className="flex flex-col sm:flex-row text-xs sm:text-sm md:text-base xl:text-xl text-gray-800 my-1 md:my-2 lg:my-4">
									<strong className="text-gray-900 sm:px-2">Email:</strong>
									<p>pedromtijeras@example.com </p>
								</li>
								<li className="flex flex-col sm:flex-row text-xs sm:text-sm md:text-base xl:text-xl text-gray-800 my-1 md:my-2 lg:my-4">
									<strong className="text-gray-900 sm:px-2">Phone number:</strong>
									<p> 317 000 0000 </p>
								</li>
								<li className="flex flex-col sm:flex-row text-xs sm:text-sm md:text-base xl:text-xl text-gray-800 my-1 md:my-2 lg:my-4">
									<strong className="text-gray-900 sm:px-2">Country:</strong>
									<p> Colombia </p>
								</li>
								<li className="flex flex-col sm:flex-row text-xs sm:text-sm md:text-base xl:text-xl text-gray-800 my-1 md:my-2 lg:my-4">
									<strong className="text-gray-900 sm:px-2">State:</strong>
									<p> Boyacá </p>
								</li>
								<li className="flex flex-col sm:flex-row text-xs sm:text-sm md:text-base xl:text-xl text-gray-800 my-1 md:my-2 lg:my-4">
									<strong className="text-gray-900 sm:px-2">City:</strong>
									<p> Sogamoso </p>
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
