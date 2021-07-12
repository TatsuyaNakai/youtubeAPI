import React, { useContext } from "react";
import { toggleContext, valContext } from "../App";

const MovieLabel = ({ width, height, endSrc }) => {
	const toggle = useContext(toggleContext);
	const val = useContext(valContext);

	return (
		<>
			{toggle && (
				<iframe
					title={val}
					id="player"
					width={width}
					height={height}
					src={`https://www.youtube.com/embed/${endSrc}`}
					frameBorder="0"
					allowFullScreen
				/>
			)}
		</>
	);
};

export default MovieLabel;
