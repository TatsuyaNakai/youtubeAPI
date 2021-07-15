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
	container: {
		width: "95%",
		margin: "0 auto",
	},
});

function App() {
	const classes = useStyles();
	const [isLoaded, setIsLoaded] = useState(false);
	const [videos, setVideos] = useState([]);
	const [mainVideo, setMainVideo] = useState([]);
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
			const movieIds = await res.data.items;
			setIsLoaded(true);
			const movies = movieIds.map((movieId) => movieId.id.videoId);
			setMainVideo(movies.splice(0, 1));
			setVideos(movies);
		};
		callApi();
	};
	return (
		<>
			<Header />
			<div div className={classes.container}>
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
							<MovieArea videos={videos} mainVideo={mainVideo} />
						) : (
							<Spinner />
						)}
					</valContext.Provider>
				)}
			</div>
		</>
	);
}

export default App;
