import React from "react";
import { PrimaryButtonStyle } from "../../styled-components/index/index";

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
