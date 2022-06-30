import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import { Col, Divider, Row } from "antd";
import NoteDetailsCategories from "./NoteDetailsCategories";
import NoteDetailsText from "./NoteDetailsText";

const NoteDetails = ({
	notes,
	setNotes,
	activeNote,
	setActiveNote,
	isMyNoteOpen,
	setIsMyNoteOpen,
	activeNoteId,
}) => {
	const [textTemp, setTextTemp] = useState(activeNote.text);
	const [categoryTemp, setCategoryTemp] = useState([]);
	const [visible, setVisible] = useState(false);
	const [visibleAdd, setVisibleAdd] = useState(false);

	useEffect(() => {
		setTextTemp(activeNote.text);
	}, [activeNote]);

	const saveHandler = () => {
		const newState = notes;
		newState[parseInt(activeNoteId)] = activeNote;
		setNotes(newState);
	};

	return (
		<>
			<Row justify='space-between' align='middle'>
				<Col span={16}>
					<NoteDetailsCategories
						visibleAdd={visibleAdd}
						setVisibleAdd={setVisibleAdd}
						categoryTemp={categoryTemp}
						setCategoryTemp={setCategoryTemp}
						visible={visible}
						setVisible={setVisible}
						activeNote={activeNote}
						setActiveNote={setActiveNote}
					/>
				</Col>
				<Col span={7}>
					<Card
						title='Created On'
						style={{ borderRadius: 10, textAlign: "center", minHeight: 180 }}>
						<Button type='secondary' shape='round' size='large'>
							{activeNote.date}
						</Button>
					</Card>
				</Col>
			</Row>
			<Divider />
			<NoteDetailsText
				activeNote={activeNote}
				setActiveNote={setActiveNote}
				textTemp={textTemp}
				setTextTemp={setTextTemp}
			/>
			<Divider></Divider>
			<Card
				bordered={false}
				style={{
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "flex-end",
					borderRadius: 10,
				}}>
				<Button
					size='large'
					shape='round'
					type='default'
					style={{ marginRight: 5 }}
					onClick={() => setIsMyNoteOpen(!isMyNoteOpen)}>
					Cancel
				</Button>
				<Button
					size='large'
					shape='round'
					type='primary'
					style={{ marginLeft: 5 }}
					onClick={saveHandler}>
					Save
				</Button>
			</Card>
		</>
	);
};

export default NoteDetails;
