import React from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	center: {
		display: "block",
		margin: "60px auto",
	},
});

const Spinner = () => {
	const classes = useStyles();

	return (
		<>
			<CircularProgress className={classes.center} color="primary" />
		</>
	);
};

export default Spinner;
