import React from "react";
import { ButtonStyle } from "../../styled-components/index/Button.style";
import ContainerTagKeywords from "../shared/ContainerTagKeywords";
import DropDownList from "../shared/DropDownList";

const FormCase = () => {
	return (
		<div>
			<div>
				<input></input>
				<input></input>

				<input></input>
			</div>

			<DropDownList></DropDownList>
			<ContainerTagKeywords></ContainerTagKeywords>
			<ButtonStyle>Upload your case</ButtonStyle>
		</div>
	);
};

export default FormCase;
