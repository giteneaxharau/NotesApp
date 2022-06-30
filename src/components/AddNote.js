import React, { useState, useEffect } from "react";
import { Button, Modal, Typography } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import AddNoteModal from "./AddNoteModal";
import { addNote } from "../features/noteSlice";
import { useDispatch } from "react-redux";

const AddNote = ({ notesList }) => {
	const [visibleModal, setVisibleModal] = useState(false);
	const [title, setTitle] = useState("");
	const [categories, setCategories] = useState([]);
	const [text, setText] = useState("");
	const [disabled, setDisabled] = useState();

	const dispatch = useDispatch();

	useEffect(() => {
		setTitle("");
		setCategories([]);
		setText("");
	}, [notesList]);

	const handleOk = () => {
		let today = new Date().getTime();
		if (title.length > 1 && categories.length > 0 && text.length > 1) {
			if (notesList.length === 0) {
				dispatch(
					addNote({
						title: title,
						label: title,
						categories: categories,
						text: text,
						date: today,
						id: "0",
					})
				);
			} else {
				dispatch(
					addNote({
						title: title,
						label: title,
						categories: categories,
						text: text,
						date: today,
						id: (parseInt(notesList.at(-1).id) + 1).toString(),
					})
				);
			}

			setVisibleModal(false);
		} else {
			setTitle("");
			setCategories([]);
			setText("");
			setDisabled(true);
			setTimeout(() => {
				setDisabled(false);
			}, 3000);
		}
	};

	const handleCancel = () => {
		setVisibleModal(false);
	};

	return (
		<>
			<Button
				shape='circle'
				type='text'
				style={{ height: 75, width: 75, marginLeft: 85 }}
				onClick={() => setVisibleModal(true)}>
				<PlusCircleFilled style={{ fontSize: "300%", color: "darkgray" }} />
			</Button>
			<Modal
				centered
				title={
					<Typography>
						<Typography.Title level={2} style={{ textAlign: "center" }}>
							Add Note
						</Typography.Title>
					</Typography>
				}
				visible={visibleModal}
				onOk={handleOk}
				onCancel={handleCancel}
				width={1000}
				footer={[
					<Button shape='round' size='large' key='back' onClick={handleCancel}>
						Cancel
					</Button>,
					<Button
						type='primary'
						shape='round'
						size='large'
						key='submit'
						onClick={handleOk}>
						Save
					</Button>,
				]}>
				<AddNoteModal
					disabled={disabled}
					title={title}
					setTitle={setTitle}
					categories={categories}
					setCategories={setCategories}
					text={text}
					setText={setText}
				/>
			</Modal>
		</>
	);
};

export default AddNote;
