import React from "react";

const CardCase = () => {
	return (
		<div className="block min-w-sm w-4/5 pt-5 px-10  rounded-lg shadow bg-card">
			<div className="flex flex-row gap-5 mb-3 flex-wrap text-sm md:text-xl">
				<div className="text-sm inline-flex items-center font-bold leading-sm px-7 py-1 bg-categoryTag rounded-full text-white">
					Health
				</div>
				<div className=" text-sm inline-flex items-center font-bold leading-sm px-7 py-1 bg-serviceTag rounded-full text-white">
					Services
				</div>
			</div>
			<h3 className="mb-2 text-3xl font-bold tracking-tight text-black">Title case</h3>
			<hr className="h-1 bg-black mb-5 f" />
			<p className="font-light text-gray-700 text-sm md:text-xl">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe repudiandae commodi facere voluptate
				dolores aliquam, mollitia deserunt, quis illo dolorem velit a voluptatum nobis totam illum voluptatibus
				non ipsum sequi. Esse nesciunt quo vero? Rem, soluta dolorum iusto eos distinctio repellat reiciendis
				atque inventore voluptatibus vel sequi, ut nesciunt error esse accusamus accusantium! Perferendis
				accusantium fugiat aperiam ipsum pariatur quibusdam.
			</p>
			<h4 className="font-thin text-base text-right text-gray-700 mt-4 pb-2">Taken on dd/mm/yy</h4>
		</div>
	);
};

export default CardCase;
