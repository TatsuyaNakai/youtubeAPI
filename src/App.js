import React, { useState, createContext } from "react";
import MovieArea from "./components/MovieArea";
import Spinner from "./components/Spinner";
import LabelList from "./components/LabelList";
import Header from "./components/Header";
import axios from "axios";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const YOUTUBE_SEARCH_API_URL = "https://www.googleapis.com/youtube/v3/search?";
const API_KEY = "AIzaSyC6bK-C9qZKMtOdGIKX_oBjhZgObnSJHsQ";

export const toggleContext = createContext();
export const valContext = createContext();
export const setValContext = createContext();

const useStyles = makeStyles({
	center: {
		textAlign: "center",
		margin: "0 auto",
	},
});

function App() {
	const classes = useStyles();
	const [isLoaded, setIsLoaded] = useState(false);
	const [mainVideo, setMainVideo] = useState("");
	const [thumbVideo, setThumbVideo] = useState("");
	const [thumb2Video, setThumb2Video] = useState("");

	const [val, setVal] = useState("");
	const [toggle, setToggle] = useState(false);

	const handleSearch = () => {
		setToggle(true);
		setIsLoaded(false);

		const params = {
			key: API_KEY,
			q: val,
			type: "video",
			maxResults: 3,
			order: "viewCount",
		};

		const queryParams = new URLSearchParams(params);
		const callApi = async () => {
			const res = await axios.get(YOUTUBE_SEARCH_API_URL + queryParams);
			const paramsData = await res.data.items;
			setIsLoaded(true);
			setMainVideo(paramsData[0].id.videoId);
			setThumbVideo(paramsData[1].id.videoId);
			setThumb2Video(paramsData[2].id.videoId);
			// これを1つのコードに書けるように
		};
		callApi();
	};

	// console.log(val);
	// debugger;
	return (
		<>
			<Header />
			<setValContext.Provider value={setVal}>
				<LabelList />
			</setValContext.Provider>
			<br />
			<form className={classes.center}>
				<Button onClick={handleSearch} variant="outlined">
					検索
				</Button>
				<Button onClick={() => setToggle(false)} variant="outlined">
					削除
				</Button>
			</form>
			<br />
			{toggle && (
				<valContext.Provider value={val}>
					{isLoaded ? (
						<MovieArea
							mainVideo={mainVideo}
							thumbVideo={thumbVideo}
							thumb2Video={thumb2Video}
						/>
					) : (
						<Spinner />
					)}
				</valContext.Provider>
			)}
		</>
	);
}

export default App;
