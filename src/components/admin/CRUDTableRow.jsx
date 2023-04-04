import React from "react";
import { PrimaryButtonStyle } from "../../styled-components/index/Button.style";
// import { PrimaryButtonStyle } from "../../styled-components/index/Button.style";

const CRUDTableRow = () => {
	return (
		<tr>
			<td>
				<p>1</p>
			</td>
			<td>FME Organizations Ltd</td>
			<td>
				<PrimaryButtonStyle />
				<PrimaryButtonStyle />
			</td>
		</tr>
	);
};

export default CRUDTableRow;
