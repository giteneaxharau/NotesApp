import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
	name: "notes",
	initialState: {
		notes: [
			[
				{
					title: "First Note",
					label: "First Note",
					categories: ["general", "book"],
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi. Tortor aliquam nulla facilisi cras fermentum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. In aliquam sem fringilla ut morbi. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Tempus quam pellentesque nec nam aliquam sem. Eget egestas purus viverra accumsan. Massa vitae tortor condimentum lacinia.",
					date: "14/6/2022",
					id: "0",
				},
				{
					title: "Second Note",
					label: "Second Note",
					categories: ["books"],
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi. Tortor aliquam nulla facilisi cras fermentum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. In aliquam sem fringilla ut morbi. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Tempus quam pellentesque nec nam aliquam sem. Eget egestas purus viverra accumsan. Massa vitae tortor condimentum lacinia.",
					date: "15/6/2022",
					id: "1",
				},
				{
					title: "Third Note",
					label: "Third Note",
					categories: ["books", "movies", "romance", "work"],
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi. Tortor aliquam nulla facilisi cras fermentum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. In aliquam sem fringilla ut morbi. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Tempus quam pellentesque nec nam aliquam sem. Eget egestas purus viverra accumsan. Massa vitae tortor condimentum lacinia.",
					date: "16/6/2022",
					id: "2",
				},
			],
		],
	},
	reducers: {
		addNote: (state, action) => {
			const payload = action.payload;
			state.notes = [
				...state.notes,
				{
					title: payload.title,
					label: payload.title,
					categories: payload.categories,
					text: payload.text,
					date: payload.date,
					id: (parseInt(state.notes.at(-1).id) + 1).toString(),
				},
			];
		},
		remove: (state, action) => {
			state.notes = state.notes.filter((obj) => {
				return obj.id !== action.payload;
			});
		},
		updateNote: (state, action) => {
			const index = state.notes.findIndex((obj) => {
				return obj.id === action.payload.id;
			});
			state.notes[index].title = action.payload.title;
			state.notes[index].label = action.payload.title;
			state.notes[index].categories = action.payload.categories;
			state.notes[index].text = action.payload.text;
			state.notes[index].date = action.payload.date;
		},
	},
});

export const { addNote, remove, updateNote } = noteSlice.actions;

export default noteSlice.reducer;

export const selectNotes = (state) => state.notes.notes;
