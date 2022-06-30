import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { Card } from "antd";

//Components

import NoteDetailsCard from "./components/DetailsOfNote/NoteDetailsCard";
import SearchBar from "./components/SearchBar";

const App = () => {
	const localNotes = JSON.parse(
		localStorage.getItem("flex-react-test-notebook")
	);
	//States
	const [notes, setNotes] = useState(
		localNotes
		// 	[
		// 	{
		// 		title: "First Note",
		// 		label: "First Note",
		// 		categories: ["general", "book"],
		// 		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi. Tortor aliquam nulla facilisi cras fermentum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. In aliquam sem fringilla ut morbi. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Tempus quam pellentesque nec nam aliquam sem. Eget egestas purus viverra accumsan. Massa vitae tortor condimentum lacinia.",
		// 		date: "14/6/2022",
		// 		id: "0",
		// 	},
		// 	{
		// 		title: "Second Note",
		// 		label: "Second Note",
		// 		categories: ["books"],
		// 		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi. Tortor aliquam nulla facilisi cras fermentum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. In aliquam sem fringilla ut morbi. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Tempus quam pellentesque nec nam aliquam sem. Eget egestas purus viverra accumsan. Massa vitae tortor condimentum lacinia.",
		// 		date: "15/6/2022",
		// 		id: "1",
		// 	},
		// 	{
		// 		title: "Third Note",
		// 		label: "Third Note",
		// 		categories: ["books", "movies", "romance", "work"],
		// 		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi. Tortor aliquam nulla facilisi cras fermentum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. In aliquam sem fringilla ut morbi. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Tempus quam pellentesque nec nam aliquam sem. Eget egestas purus viverra accumsan. Massa vitae tortor condimentum lacinia.",
		// 		date: "16/6/2022",
		// 		id: "2",
		// 	},
		// ]
	);
	const [isMyNoteOpen, setIsMyNoteOpen] = useState(false);
	const [activeNote, setActiveNote] = useState({});
	const [activeNoteId, setActiveNoteId] = useState("");

	useEffect(() => {
		if (localStorage.getItem("flex-react-test-notebook") === null) {
			localStorage.setItem("flex-react-test-notebook", JSON.stringify([]));
		} else {
			localStorage.setItem("flex-react-test-notebook", JSON.stringify(notes));
		}
	}, [notes, setNotes]);

	return (
		<div className='App'>
			{/* <Card style={{display: 'flex', flexWrap: 'wrap'}}> */}
			<Card bordered={false} style={{ height: 800 }}>
				<SearchBar
					notes={notes}
					setNotes={setNotes}
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
					notes={notes}
					setNotes={setNotes}
					isMyNoteOpen={isMyNoteOpen}
					setIsMyNoteOpen={setIsMyNoteOpen}
					activeNote={activeNote}
					setActiveNote={setActiveNote}
					activeNoteId={activeNoteId}
					setActiveNoteId={setActiveNoteId}
					s
				/>
			)}
			{/* </Card> */}
		</div>
	);
};

export default App;
