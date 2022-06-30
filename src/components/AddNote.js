import React, { useState, useEffect } from "react";
import { Button, Modal, Typography } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import AddNoteModal from "./AddNoteModal";

const AddNote = ({ notes, setNotes }) => {
	const [visibleModal, setVisibleModal] = useState(false);
	const [title, setTitle] = useState("");
	const [categories, setCategories] = useState([]);
	const [text, setText] = useState("");

	useEffect(() => {
		setTitle("");
		setCategories([]);
		setText("");
	}, [notes]);

	const handleOk = () => {
		let today = new Date();
		const dd = String(today.getDate()).padStart(2, "0");
		const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		const yyyy = today.getFullYear();
		today = dd + "/" + mm + "/" + yyyy;
		if (notes.length === 0) {
			setNotes([
				{
					title: title,
					label: title,
					categories: categories,
					text: text,
					date: today,
					id: "0",
				},
			]);
		} else {
			const newObj = {
				title: title,
				label: title,
				categories: categories,
				text: text,
				date: today,
				id: (parseInt(notes.at(-1).id) + 1).toString(),
			};
			const newObjects = [...notes, newObj];
			setNotes(newObjects);
		}

		setVisibleModal(false);
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
