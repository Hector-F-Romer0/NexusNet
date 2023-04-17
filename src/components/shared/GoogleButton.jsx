import React from "react";

const GoogleButton = () => {
	return (
		<button
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
					<span className="font-medium mb-[-2px] text-xs lg:text-base">Continue with Google</span>
				</div>
			</div>
		</button>
	);
};

export default GoogleButton;