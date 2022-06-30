import { Card, Row, Col, Input, Divider, Alert } from "antd";
import React from "react";

const AddNoteModal = ({
	title,
	setTitle,
	setCategories,
	text,
	setText,
	disabled,
	categories
}) => {
	return (
		<>
			<Card bordered={false}>
				<Row justify='space-between' align='top' wrap={true}>
					<Col span={11}>
						<Card title='Title' bordered={false}>
							<Input
								value={title}
								placeholder='Enter a title for your note...'
								size='large'
								allowClear
								onChange={(e) => setTitle(e.target.value)}></Input>
						</Card>
					</Col>
					<Col span={11}>
						<Card title='Categories' bordered={false}>
							<Input
								value={categories}
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
			{disabled && (
				<Alert
					message='Warning'
					description='You shouldnt leave any of the fields empty'
					type='warning'
					showIcon
					closable
				/>
			)}
		</>
	);
};

export default AddNoteModal;
