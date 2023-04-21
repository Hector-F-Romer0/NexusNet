import React from "react";
import CRUDRow from "./CRUDRow";
import CRUDHeader from "./CRUDHeader";

const CRUDManagement = ({ data, nameToManage }) => {
	console.log(data);
	return (
		<div className="bg-white p-8 rounded-md w-full">
			<div>
				<CRUDHeader titleToManage={nameToManage} />
				<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
					<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
						<table className="min-w-full leading-normal">
							<thead>
								<tr className="w-full">
									<th className="px-15 w-44 py-3 border-b-2 border-[#2A3042] bg-[#2A3042] text-center text-xs font-semibold text-white uppercase tracking-wider">
										{`Id. ${nameToManage}`}
									</th>
									<th className="px-15 py-3 border-b-2 border-[#2A3042] bg-[#2A3042] text-center text-xs font-semibold text-white uppercase tracking-wider">
										{nameToManage}
									</th>
									<th className="border-b-2 border-[#2A3042] bg-[#2A3042] text-xs font-semibold text-white uppercase tracking-wider">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{data?.map((item) => (
									<CRUDRow key={item?.value} data={item} titleToManage={nameToManage} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CRUDManagement;
