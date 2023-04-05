import React, { useState } from "react";

import {
	DropDownBtn,
	DropDownContent,
	DropDownItem,
	DropDownStyle,
	IconDeploy,
} from "../../styled-components/index/DropDownList.style";
import { InputLabelStyle } from "../../styled-components/index/Input.style";

const DropDownList = ({ selected, setSelected, label, availableOptions }) => {
	const [isActive, setIsActive] = useState(false);
	const [options, setOptions] = useState(availableOptions);
	// console.log(options);
	return (
		<DropDownStyle>
			<InputLabelStyle>{label}</InputLabelStyle>
			<DropDownBtn onClick={(e) => setIsActive(!isActive)}>{selected.name}</DropDownBtn>
			<IconDeploy />
			{isActive && (
				<DropDownContent>
					{options.map((option) => (
						<DropDownItem
							key={option.id}
							onClick={(e) => {
								setSelected(option);
								setIsActive(false);
							}}>
							{option.name}
						</DropDownItem>
					))}
				</DropDownContent>
			)}
		</DropDownStyle>
	);
};

export default DropDownList;
