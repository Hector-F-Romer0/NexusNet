import React, { useState } from "react";
import { FiGlobe, FiList, FiTool, FiBook, FiLogOut, FiAlignRight } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const AdminSideBar = () => {
	const menus = [
		{ name: "Home", link: "/admin/home", icon: FiGlobe },
		{ name: "Categories", link: "/admin/categories", icon: FiList },
		{ name: "Services", link: "/admin/services", icon: FiTool },
		{ name: "Key words", link: "/admin/keywords", icon: FiBook },
		{ name: "Log Out", link: "/signin", icon: FiLogOut },
	];
	const [open, setOpen] = useState(true);

	return (
		<div
			className={`bg-navbar min-h-screen sticky top-0 ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4`}>
			<div className="py-3 flex justify-end ">
				<FiAlignRight size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
			</div>
			<div className="mt-4 flex flex-col gap-4 max-h-screen">
				{menus?.map((menu, i) => (
					<NavLink
						to={menu?.link}
						key={i}
						className={` ${
							menu?.margin && "mt-5"
						} group flex items-center text-sm  gap-3.5 font-bold p-2 hover:bg-gray-800 rounded-md`}>
						<div>{React.createElement(menu?.icon, { size: "20" })}</div>
						<h2
							style={{
								transitionDelay: `${i + 3}00ms`,
							}}
							className={`whitespace-pre duration-500 ${
								!open && "opacity-0 translate-x-28 overflow-hidden"
							}`}>
							{menu?.name}
						</h2>
						<h2
							className={`${
								open && "hidden"
							} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
							{menu?.name}
						</h2>
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default AdminSideBar;
