import React from "react";
import { makeStyles } from "@material-ui/core";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles({
	label: {
		margin: "16px",
	},
});

const Label = ({ value, handleClick }) => {
	const classes = useStyles();

	return (
		// <FormControl component="fieldset">
		// 	<FormLabel component="legend" />
		// 	<RadioGroup aria-label="gender">
		// 		<FormControlLabel
		// 			value={value}
		// 			name="lang"
		// 			control={<Radio />}
		// 			label={value}
		// 			onClick={handleClick}
		// 		/>
		// 	</RadioGroup>
		// </FormControl>
		<label>
			<input
				className={classes.label}
				type="radio"
				name="lang"
				value={value}
				onClick={handleClick}
			/>
			{value}
		</label>
	);
};

export default Label;
