import React from "react";
import {
	Card,
	Input,
} from "antd";

const NoteDetailsText = ({
	setActiveNote,
	textTemp,
	setTextTemp,
}) => {
	const textTempHandler = (e) => {
		setTextTemp(e.target.value);
	};

	const addTextHandler = (e) => {
		setActiveNote((prevState) => {
			return {
				...prevState,
				text: textTemp,
			};
		});
        e.preventDefault()
	};

	return (
		<>
			<Card title='Note Text' style={{ borderRadius: 10, minHeight: 250 }}>
				<Input.TextArea
					autoSize
					bordered={false}
					value={textTemp}
					size='small'
					onChange={textTempHandler}
                    onPressEnter={addTextHandler}
				/>
			</Card>
		</>
	);
};

export default NoteDetailsText;
