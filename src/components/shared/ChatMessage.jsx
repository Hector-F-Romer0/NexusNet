import React from "react";
import RecipientMessage from "./RecipientMessage";
import SenderMessage from "./SenderMessage";

const ChatMessage = () => {
	return (
		<div className="items-center">
			<div className="flex-1 fixed overflow-hidden p:2 sm:p-6 justify-between flex flex-col h-5/6">
				<div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
					<div className="relative">
						<span className="absolute text-green-500 right-0 bottom-0">
							<svg width="20" height="20">
								<circle cx="8" cy="8" r="8" fill="currentColor"></circle>
							</svg>
						</span>
						<img
							src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
							alt=""
							className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
						/>
					</div>
					<div className="flex flex-col leading-tight">
						<div className="text-2xl mt-1 flex items-center">
							<span className="text-gray-700 mr-3">Anderson Vanhron</span>
						</div>
						<span className="text-lg text-gray-600">Junior Developer</span>
					</div>
				</div>
				<div
					id="messages"
					className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
					<div className="chat-message">
						<div className="flex items-end">
							<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
								<div>
									<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
										Can be verified on any platform using docker
									</span>
								</div>
							</div>
							<img
								src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
								alt="My profile"
								className="w-6 h-6 rounded-full order-1"
							/>
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
							<img
								src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
								alt="My profile"
								className="w-6 h-6 rounded-full order-2"
							/>
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
							<img
								src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
								alt="My profile"
								className="w-6 h-6 rounded-full order-1"
							/>
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
							<img
								src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
								alt="My profile"
								className="w-6 h-6 rounded-full order-2"
							/>
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
							<img
								src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
								alt="My profile"
								className="w-6 h-6 rounded-full order-1"
							/>
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
							<img
								src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
								alt="My profile"
								className="w-6 h-6 rounded-full order-2"
							/>
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
							<img
								src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
								alt="My profile"
								className="w-6 h-6 rounded-full order-1"
							/>
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
							<img
								src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
								alt="My profile"
								className="w-6 h-6 rounded-full order-2"
							/>
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
							<img
								src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
								alt="My profile"
								className="w-6 h-6 rounded-full order-1"
							/>
						</div>
					</div>
				</div>
				<div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
					<div className="relative flex">
						<span className="absolute inset-y-0 flex items-center">
							<button
								type="button"
								className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6 text-gray-600">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
								</svg>
							</button>
						</span>
						<input
							type="text"
							placeholder="Write your message!"
							className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
						/>
					</div>
				</div>
			</div>
			{/* <div>
				<h2>Enrique Manos Cuchillas</h2>
			</div>
			<div>
				<RecipientMessage />
				<div>
					<SenderMessage />
				</div>
			</div>
			<div>
				<input></input>
			</div> */}
		</div>
	);
};

export default ChatMessage;
