import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { Card } from "antd";
//Components
import NoteDetailsCard from "./components/DetailsOfNote/NoteDetailsCard";
import SearchBar from "./components/SearchBar";

const App = () => {
	//States
	const [isMyNoteOpen, setIsMyNoteOpen] = useState(false);
	const [activeNote, setActiveNote] = useState({});
	const [activeNoteId, setActiveNoteId] = useState("");

	return (
		<div className='App'>
			<Card bordered={false} style={{ height: 800 }}>
				<SearchBar
					isMyNoteOpen={isMyNoteOpen}
					setIsMyNoteOpen={setIsMyNoteOpen}
					activeNote={activeNote}
					setActiveNote={setActiveNote}
					activeNoteId={activeNoteId}
					setActiveNoteId={setActiveNoteId}
				/>
			</Card>
			{isMyNoteOpen && (
				<NoteDetailsCard
					isMyNoteOpen={isMyNoteOpen}
					setIsMyNoteOpen={setIsMyNoteOpen}
					activeNote={activeNote}
					setActiveNote={setActiveNote}
					activeNoteId={activeNoteId}
					setActiveNoteId={setActiveNoteId}
				/>
			)}
		</div>
	);
};

export default App;
