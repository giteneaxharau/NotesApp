import React from "react";
import {
	Card,
	Tag,
	Button,
	Input,
} from "antd";
import { CaretLeftOutlined, PlusCircleFilled } from "@ant-design/icons";

const NoteDetailsCategories = ({
	visibleAdd,
	setVisibleAdd,
	categoryTemp,
	setCategoryTemp,
	visible,
	setVisible,
	activeNote,
	setActiveNote,
}) => {
	const buttonCloseHandler = () => {
		setVisible(!visible);
		setVisibleAdd(false);
	};

	const categoryHandler = (e) => {
		setCategoryTemp([e.target.value]);
	};

	const addCategoryHandler = (e) => {
		if (e.keyCode === 13) {
			setActiveNote((prevState) => {
				return {
					...prevState,
					categories: [...activeNote.categories, categoryTemp],
				};
			});
			setCategoryTemp([]);
			setVisibleAdd(false);
		}
	};

	return (
		<>
			<Card title='Categories' style={{ borderRadius: 10, minHeight: 180 }}>
				{visible && (
					<Button
						shape='circle'
						size='large'
						style={{ marginRight: 8 }}
						onClick={() => setVisibleAdd(!visibleAdd)}>
						<PlusCircleFilled />
					</Button>
				)}
				{visibleAdd && (
					<Input
						placeholder='add category...'
						allowClear
						size='small'
						style={{ height: 25, width: 125, marginRight: 8, borderRadius: 15 }}
						value={categoryTemp}
						onChange={categoryHandler}
						onKeyDown={addCategoryHandler}
					/>
				)}
				{visible &&
					activeNote.categories.map((category) => (
						<Tag
							key={category}
							style={{ height: 25, textAlign: "center", borderRadius: 15 }}>
							{category}
						</Tag>
					))}

				<Button shape='circle' size='large' onClick={buttonCloseHandler}>
					<CaretLeftOutlined />
				</Button>
			</Card>
		</>
	);
};

export default NoteDetailsCategories;
