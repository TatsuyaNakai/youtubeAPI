import React, { useContext } from "react";
import { valContext } from "../App";

const MovieLabel = ({ width, height, endSrc }) => {
	const val = useContext(valContext);

	return (
		<>
			<iframe
				title={val}
				id="player"
				width={width}
				height={height}
				src={`https://www.youtube.com/embed/${endSrc}`}
				frameBorder="0"
				allowFullScreen
			/>
		</>
	);
};

export default MovieLabel;
