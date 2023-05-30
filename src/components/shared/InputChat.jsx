import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const InputChat = ({ socket }) => {
	const { register, handleSubmit, reset } = useForm();
	// const dispatch = useDispatch();
	const { chatId } = useSelector((state) => state.chat);

	const onSubmit = (data) => {
		// console.log(data);
		const token = JSON.parse(localStorage.getItem("auth-token"));

		// Send new message to backend
		socket.emit("send-message", {
			message: data.userMessage,
			token,
			chatId: chatId,
		});

		// Clean the input
		reset();
	};

	return (
		<div className="border-gray-200">
			<form onSubmit={handleSubmit(onSubmit)} className="relative flex">
				<input
					type="text"
					placeholder="Write your message..."
					className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
					{...register("userMessage")}
				/>
				<button type="submit">
					<span className="absolute inset-y-0 right-5 flex items-center justify-end">
						<FiSend
							size={30}
							className=" inline-flex rounded-fulltransition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 "></FiSend>
					</span>
				</button>
			</form>
		</div>
	);
};

export default InputChat;
