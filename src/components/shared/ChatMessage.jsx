import React from "react";
import { FiSend, FiCornerUpLeft } from "react-icons/fi";

const ChatMessage = () => {
	return (
		<div className="items-center justify-between">
			<div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
				<div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
					<FiCornerUpLeft size={30} className="mx-3"></FiCornerUpLeft>
					<div className="relative">
						<span className="absolute text-green-500 right-0 bottom-0">
							<svg width="20" height="20">
								<circle cx="8" cy="8" r="8" fill="currentColor"></circle>
							</svg>
						</span>
						<img
							src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
							alt=""
							className="w-10 sm:w-16 h-10 sm:h-16 rounded-full mx-3"
						/>
					</div>
					<div className="flex flex-col leading-tight mx-3">
						<div className="text-2xl mt-1 flex items-center">
							<span className="text-gray-700 mr-3">Anderson Vanhron</span>
						</div>
						<span className="text-lg text-gray-600">Username</span>
					</div>
				</div>
				<div
					id="messages"
					className="flex flex-col space-y-4 p-3 overflow-y-scroll bg-[#E8F1FF]">
					<div className="chat-message ">
						<div className="flex items-end">
							<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
								<div>
									<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
										Can be verified on any platform using docker
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="chat-message">
						<div className="flex items-end justify-end">
							<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
								<div>
									<span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
										Your error message says permission denied, npm global installs must be given
										root privileges.
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="chat-message">
						<div className="flex items-end">
							<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
								<div>
									<span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
										Command was run with root privileges. I'm sure about that.
									</span>
								</div>
								<div>
									<span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
										I've update the description so it's more obviously now
									</span>
								</div>
								<div>
									<span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
										FYI https://askubuntu.com/a/700266/510172
									</span>
								</div>
								<div>
									<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
										Check the line above (it ends with a # so, I'm running it as root )
										<pre># npm install -g @vue/devtools</pre>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="chat-message">
						<div className="flex items-end justify-end">
							<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
								<div>
									<span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
										Any updates on this issue? I'm getting the same error when trying to install
										devtools. Thanks
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="chat-message">
						<div className="flex items-end">
							<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
								<div>
									<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
										Thanks for your message David. I thought I'm alone with this issue. Please, ?
										the issue to support it :)
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="chat-message">
						<div className="flex items-end justify-end">
							<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
								<div>
									<span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">
										Are you using sudo?
									</span>
								</div>
								<div></div>
							</div>
						</div>
					</div>
					<div className="chat-message">
						<div className="flex items-end">
							<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
								<div>
									<span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
										It seems like you are from Mac OS world. There is no /Users/ folder on linux ?
									</span>
								</div>
								<div>
									<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
										I have no issue with any other packages installed with root permission globally.
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="chat-message">
						<div className="flex items-end justify-end">
							<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
								<div>
									<span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
										yes, I have a mac. I never had issues with root permission as well, but this
										helped me to solve the problem
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="chat-message">
						<div className="flex items-end">
							<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
								<div>
									<span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
										I get the same error on Arch Linux (also with sudo)
									</span>
								</div>
								<div>
									<span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
										I also have this issue, Here is what I was doing until now: #1076
									</span>
								</div>
								<div>
									<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
										even i am facing
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
					<div className="relative flex">
						<input
							type="text"
							placeholder="Write your message..."
							className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
						/>
						<span className="absolute inset-y-0 right-5 flex items-center justify-end">
						<FiSend size={30} className=" inline-flex rounded-fulltransition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 text-gray-600"></FiSend>
						</span>
						
					</div>		
				</div>
			</div>
		</div>
	);
};

export default ChatMessage;
