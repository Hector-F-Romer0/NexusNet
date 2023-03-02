import React from "react";
import CRUDTableHeader from "./CRUDTableHeader";
import CRUDTableRow from "./CRUDTableRow";

const CRUDTable = () => {
	return (
		<table>
			<thead>
				<CRUDTableHeader />
			</thead>
			<tbody>
				<CRUDTableRow />
				<CRUDTableRow />
			</tbody>
		</table>
	);
};

export default CRUDTable;
