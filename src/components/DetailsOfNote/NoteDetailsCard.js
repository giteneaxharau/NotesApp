import React from "react";
import { Card, Typography } from "antd";

//Components
import NoteDetails from "./NoteDetails";


const NoteDetailsCard = ({
	notes,
	setNotes,
	isMyNoteOpen,
	setIsMyNoteOpen,
	activeNote,
	setActiveNote,
	activeNoteId,
	setActiveNoteId,
}) => {
	const saveTitleHandler = (e) => {
		console.log(e);
		setActiveNote((prevState) => {
			return { ...prevState, title: e, label: e };
		});
	};

	return (
		<>
			<Card
				title={
					<Typography>
						<Typography.Title
							level={2}
							style={{ color: "#FFFFFF", textAlign: "center" }}
							editable={{
								triggerType: "text",
								onChange: saveTitleHandler,
							}}>
							{activeNote.title}
						</Typography.Title>
					</Typography>
				}
				hoverable={true}
				bordered={true}
				style={{
					minWidth: 800,
					maxWidth: 1000,
					minHeight: 750,
					borderRadius: 10,
				}}
				headStyle={{ backgroundColor: "#1890FF", borderRadius: 10 }}>
				<NoteDetails
					notes={notes}
					setNotes={setNotes}
					activeNote={activeNote}
					setActiveNote={setActiveNote}
					isMyNoteOpen={isMyNoteOpen}
					setIsMyNoteOpen={setIsMyNoteOpen}
					setActiveNoteId={setActiveNoteId}
					activeNoteId={activeNoteId}
				/>
			</Card>
		</>
	);
};

export default NoteDetailsCard;
