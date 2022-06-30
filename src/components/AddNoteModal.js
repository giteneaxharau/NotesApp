import { Card, Row, Col, Input, Divider } from "antd";
import React from "react";

const AddNoteModal = ({
	title,
	setTitle,
	categories,
	setCategories,
	text,
	setText,
}) => {

	

	return (
		<>
			<Card bordered={false}>
				<Row justify='space-between' align='top' wrap={true}>
					<Col span={11}>
						<Card hoverable title='Title' bordered={false}>
							<Input
								value={title}
								placeholder='Enter a title for your note...'
								size='large'
								allowClear
								onChange={(e) => setTitle(e.target.value)}></Input>
						</Card>
					</Col>
					<Col span={11}>
						<Card hoverable title='Categories' bordered={false}>
							<Input
								placeholder='Enter categories for your note...'
								size='large'
								allowClear
								onChange={(e) =>
									setCategories(e.target.value.split(" "))
								}></Input>
						</Card>
					</Col>
				</Row>
			</Card>
			<Divider></Divider>
			<Card bordered={false}>
				<Row justify='center' align='bottom'>
					<Card bordered={false} title="Note's Text" style={{ width: "100%" }}>
						<Input.TextArea
							value={text}
							placeholder='Enter the text of the note...'
							size='large'
							rows={6}
							showCount
							allowClear
							maxLength={300}
							onChange={(e) => setText(e.target.value)}></Input.TextArea>
					</Card>
				</Row>
			</Card>
		</>
	);
};

export default AddNoteModal;
