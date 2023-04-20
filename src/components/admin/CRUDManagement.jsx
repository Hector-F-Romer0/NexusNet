import React from "react";
import { PrimaryButtonStyle } from "../../styled-components/index/Button.style";
import SearchBar from "../shared/SearchBar";
import CRUDRow from "./CRUDRow";
import CRUDHeader from "./CRUDHeader";

const CRUDManagement = () => {
	return (
		<div className="bg-white p-8 rounded-md w-full">
			<div>
				<CRUDHeader></CRUDHeader>
				<div>
					<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
						<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
							<table className="min-w-full leading-normal">
								<thead>
									<tr className="w-full">
										<th className="px-15 w-44 py-3 border-b-2 border-[#2A3042] bg-[#2A3042] text-center text-xs font-semibold text-white uppercase tracking-wider">
											Id. Categories
										</th>
										<th className="px-15 py-3 border-b-2 border-[#2A3042] bg-[#2A3042] text-center text-xs font-semibold text-white uppercase tracking-wider">
											products
										</th>
										<th className="border-b-2 border-[#2A3042] bg-[#2A3042] text-xs font-semibold text-white uppercase tracking-wider">
											Status
										</th>
									</tr>
								</thead>
								<tbody>
									<CRUDRow />
									<CRUDRow />
									<CRUDRow />
									<CRUDRow />
									<CRUDRow />
									<CRUDRow />
									<CRUDRow />
									<CRUDRow />
									<CRUDRow />
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CRUDManagement;
