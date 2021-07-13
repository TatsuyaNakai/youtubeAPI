// import React, { useState } from "react";
import Label from "./Label";

// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormControlLabel";

// TypeError: Cannot read property 'props' of undefined
// これが解決できない。マテリアル使わなければ使える。

const LabelList = () => {
	// const [value, setValue] = useState("");

	// const handleChange = (e) => {
	// 	setValue(e.target.value);
	// };

	return (
		// <FormControl component="label">
		// 	<FormLabel component="label">気になるものにチェックをつけてね</FormLabel>
		// 	<RadioGroup
		// 		name="気になるものにチェックをつけてね"
		// 		onChange={handleChange}
		// 		value={value}
		// 	>
		// 		<FormControlLabel value="いぬ" control={<Radio />} いぬ />
		// 		<FormControlLabel value="ねこ" control={<Radio />} ねこ />
		// 		<FormControlLabel value="たぬき" control={<Radio />} たぬき />
		// 	</RadioGroup>
		// </FormControl>

		<form className="classes.center">
			<Label value={"いぬ"} />
			<Label value={"ネコ"} />
			<Label value={"たぬき"} />
		</form>
	);
};

export default LabelList;
