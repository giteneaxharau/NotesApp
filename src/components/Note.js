import React, { useState } from "react";
import { Button, Typography, Row, Col } from "antd";
import { DeleteFilled } from "@ant-design/icons";

const Note = ({
	notes,
	setNotes,
	id,
	obj,
	isMyNoteOpen,
	setIsMyNoteOpen,
	activeNote,
	setActiveNote,
	setActiveNoteId,
	activeNoteId,
}) => {
	const [isClicked, setIsClicked] = useState(false);

	const activeNoteHandler = (e) => {
		setActiveNoteId(e.currentTarget.id);
		setActiveNote(obj);
		setIsMyNoteOpen(true);
		setIsClicked(true);
	};

	const deleteNoteHandler = () => {
		setActiveNoteId(id);
		setNotes(notes.filter((obj) => obj.id !== activeNoteId));
	};

	return (
		<>
			<Row justify='space-evenly' align='center'>
				<Col span={18}>
					<Button
						id={id}
						block={true}
						type='primary'
						onClick={(e) => activeNoteHandler(e)}>
						<Typography>
							<Typography.Text style={{ color: "#FFFFFF" }}>
								{obj.title}
							</Typography.Text>
						</Typography>
					</Button>
				</Col>
				<Col>
					<Button
						id={id}
						block={true}
						shape='circle'
						type='text'
						size='middle'
						style={{ backgroundColor: "darkgray" }}
						onClick={(e) => deleteNoteHandler(e.currentTarget.id)}>
						<DeleteFilled style={{ fontSize: "120%", color: "#FFFFFF" }} />
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default Note;
