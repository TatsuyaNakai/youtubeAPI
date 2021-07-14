import React, { useContext } from "react";
import { valContext } from "../App";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	flex: {
		display: "flex",
		justifyContent: "space-between",
	},
	item2: {
		flex: 2,
		marginRight: "3%",
	},
	item: {
		flex: 1,
	},
});

const MovieArea = ({ videos, mainVideo }) => {
	const classes = useStyles();
	const val = useContext(valContext);
	return (
		<div className={classes.flex}>
			<div className={classes.item2}>
				<iframe
					title={val}
					id="player"
					width={"100%"}
					height={"100%"}
					src={`https://www.youtube.com/embed/${mainVideo}`}
					frameBorder="0"
					allowFullScreen
				/>
				<p>１番人気</p>
			</div>
			<ul className={classes.item}>
				{videos.map((video, index) => (
					<li key={index}>
						<p>{index + 2}番人気</p>
						<iframe
							title={val}
							id="player"
							// width={"100%"}
							// height={"100%"}
							src={`https://www.youtube.com/embed/${video}`}
							frameBorder="0"
							allowFullScreen
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MovieArea;
