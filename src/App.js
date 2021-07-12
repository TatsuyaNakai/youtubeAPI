import React, { useState, createContext } from "react";
import MovieArea from "./components/MovieArea";
import Label from "./components/Label";
import Header from "./components/Header";
import axios from "axios";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const YOUTUBE_SEARCH_API_URL = "https://www.googleapis.com/youtube/v3/search?";
const API_KEY = "AIzaSyC6bK-C9qZKMtOdGIKX_oBjhZgObnSJHsQ";

export const toggleContext = createContext();
export const valContext = createContext();

const useStyles = makeStyles({
	center: {
		textAlign: "center",
		margin: "0 auto",
	},
});

function App() {
	const classes = useStyles();

	const [mainVideo, setMainVideo] = useState("");
	const [thumbVideo, setThumbVideo] = useState("");
	const [thumb2Video, setThumb2Video] = useState("");

	const [val, setVal] = useState("");
	const [toggle, setToggle] = useState(false);

	const handleSearch = () => {
		setToggle(true);

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
			setMainVideo(paramsData[0].id.videoId);
			setThumbVideo(paramsData[1].id.videoId);
			setThumb2Video(paramsData[2].id.videoId);
			// これを1つのコードに書けるように
		};
		callApi();
	};
	return (
		<>
			<Header />
			<form className={classes.center}>
				<Label value={"いぬ"} handleClick={() => setVal("いぬ")} />
				<Label value={"ネコ"} handleClick={() => setVal("ネコ")} />
				<Label value={"たぬき"} handleClick={() => setVal("たぬき")} />
			</form>
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
			<toggleContext.Provider value={toggle}>
				<valContext.Provider value={val}>
					<MovieArea
						mainVideo={mainVideo}
						thumbVideo={thumbVideo}
						thumb2Video={thumb2Video}
					/>
				</valContext.Provider>
			</toggleContext.Provider>
		</>
	);
}

export default App;

//切り替わる時間にローディングみたいな画面を入れたい。
