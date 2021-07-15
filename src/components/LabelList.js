import React, { useContext } from "react";
import { setValContext } from "../App";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	flex: {
		display: "flex",
	},
});

const LabelList = () => {
	const setVal = useContext(setValContext);
	const classes = useStyles();

	const handleChange = (e) => {
		setVal(e.target.value);
	};

	return (
		<FormControl component="label">
			<RadioGroup row onChange={handleChange} defaultValue={"いぬ"}>
				<FormControlLabel value={"いぬ"} control={<Radio />} label="いぬ" />
				<FormControlLabel value={"ねこ"} control={<Radio />} label="ねこ" />
				<FormControlLabel value={"たぬき"} control={<Radio />} label="たぬき" />
			</RadioGroup>
		</FormControl>
	);
};

export default LabelList;
