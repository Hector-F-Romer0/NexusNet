import React, { useState } from "react";
import { memo } from "react";

const SelectComponent = memo(({ options }) => {
	console.log("DENTRO DEL SELECT");
	console.log(options);

	return <div className="App"></div>;
});

export default SelectComponent;
