import React, { useState } from "react";
import { FiMessageSquare, FiGlobe, FiAward, FiUser, FiLogOut, FiAlignRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
	const { user } = useSelector((state) => state.user);

	const menusClient = [
		{ name: "Home", link: "/client/home", icon: FiGlobe },
		{ name: "Top providers", link: "/top/providers", icon: FiAward },
		{ name: "Chats", link: "/client/chats", icon: FiMessageSquare },
		{ name: "Account", link: "/client/account", icon: FiUser },
		{ name: "Log Out", link: "/signin", icon: FiLogOut },
	];

	const menusProvider = [
		{ name: "Home", link: "/provider/home", icon: FiGlobe },
		{ name: "Top providers", link: "/top/providers", icon: FiAward },
		{ name: "Chats", link: "/provider/chats", icon: FiMessageSquare },
		{ name: "Account", link: "/provider/account", icon: FiUser },
		{ name: "Log Out", link: "/signin", icon: FiLogOut },
	];

	const [open, setOpen] = useState(true);

	const showSideBar = () => {
		if (user?.typeUser == "client") {
			return menusClient;
		} else {
			return menusProvider;
		}
	};

	return (
		<div className={`bg-navbar h-screen sticky top-0 ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4 `}>
			<div className="py-3 flex justify-end ">
				<FiAlignRight size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
			</div>
			<div className="mt-4 flex flex-col gap-4 max-h-screen">
				{showSideBar()?.map((menu, i) => (
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

export default SideBar;
