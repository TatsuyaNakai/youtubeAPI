import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6">カテゴリ検索アプリ</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;

// <>
// 	<h1>動物動画検索アプリ</h1>

// </>
