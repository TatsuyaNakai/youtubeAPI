import React, { useContext } from "react";
import { setValContext } from "../App";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	label: {
		margin: "16px",
	},
});

const Label = ({ value }) => {
	const classes = useStyles();
	const setVal = useContext(setValContext);

	return (
		<label>
			<input
				className={classes.label}
				type="radio"
				name="lang"
				value={value}
				onClick={() => setVal(value)}
			/>
			{value}
		</label>
	);
};

export default Label;
