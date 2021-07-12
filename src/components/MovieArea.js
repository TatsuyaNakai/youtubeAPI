import MovieLabel from "./MovieLabel";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	flex: {
		display: "flex",
		justifyContent: "space-between",
	},
	width: {
		width: "640px",
		margin: "0 auto",
	},
});

const MovieArea = ({ mainVideo, thumbVideo, thumb2Video }) => {
	const classes = useStyles();

	return (
		<div className={classes.width}>
			{/* {toggle && (
				<iframe
					title={val}
					id="player"
					width={width}
					height={height}
					src={`https://www.youtube.com/embed/${endSrc}`}
					frameBorder="0"
					allowFullScreen
				/>
			)} */}
			<MovieLabel width={"640"} height={"360"} endSrc={mainVideo} />
			<div className={classes.flex}>
				<MovieLabel width={"256"} height={"144"} endSrc={thumbVideo} />
				<MovieLabel width={"256"} height={"144"} endSrc={thumb2Video} />
			</div>
		</div>
	);
};

export default MovieArea;
