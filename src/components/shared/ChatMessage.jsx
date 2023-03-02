import React from "react";
import RecipientMessage from "./RecipientMessage";
import SenderMessage from "./SenderMessage";

const ChatMessage = () => {
	return (
		<div>
			<div>
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
			</div>
		</div>
	);
};

export default ChatMessage;
