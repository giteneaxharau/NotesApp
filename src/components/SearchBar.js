import React from "react";
import { useSelector } from "react-redux";
import { selectNotesList } from "../features/noteSlice";
import { Button, Row, Col, Typography, Divider, Input, List, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Downshift from "downshift";
import Note from "./Note";
import AddNote from "./AddNote";

const SearchBar = ({
	setIsMyNoteOpen,
	setActiveNote,
	activeNoteId,
	setActiveNoteId,
}) => {
	const notesList = useSelector(selectNotesList);

	return (
		<>
			<Card
				style={{ borderRadius: 10, height: "750px" }}
				bodyStyle={{
					backgroundColor: "#1890FF",
					borderRadius: 10,
					height: "100%",
				}}>
				<Typography>
					<Typography.Title
						level={3}
						style={{ textAlign: "center", color: "#FFFFFF" }}>
						All Notes
					</Typography.Title>
				</Typography>
				<Downshift
					initialIsOpen
					itemToString={(item) => (item ? item.value : "")}>
					{({ getInputProps, getMenuProps, inputValue, getRootProps }) => (
						<div>
							<Card
								style={{
									borderRadius: 10,
									marginBottom: 10,
									boxShadow: "-1px 3px lightgray",
								}}
								{...getRootProps({}, { suppressRefError: true })}>
								<Row justify='center' align='center'>
									<Col>
										<Input {...getInputProps()} />
									</Col>
									<Col>
										<Button type='primary'>
											<SearchOutlined />
										</Button>
									</Col>
								</Row>
							</Card>
							<Card
								bordered={true}
								style={{
									height: 560,
									width: 300,
									borderRadius: 10,
									display: "flex",
									flexDirection: "column",
									overflow: "auto",
									boxShadow: "-1px 3px lightgray",
								}}
								{...getMenuProps()}>
								<AddNote notesList={notesList} />
								<Divider style={{ marginTop: 10, marginBottom: 12 }}></Divider>
								{notesList
									.filter(
										(item) =>
											!inputValue.toLowerCase() ||
											item.title.toLowerCase().includes(inputValue)
									)
									.map((item, index) => (
										<List
											key={index}
											style={{ marginTop: 0 }}
											itemLayout='vertical'>
											<List.Item style={{ textAlign: "right" }}>
												<Note
													id={item.id}
													obj={item}
													setIsMyNoteOpen={setIsMyNoteOpen}
													setActiveNote={setActiveNote}
													setActiveNoteId={setActiveNoteId}
													activeNoteId={activeNoteId}
												/>
												<Divider
													style={{ marginBottom: 0, marginTop: 23 }}></Divider>
											</List.Item>
										</List>
									))}
							</Card>
						</div>
					)}
				</Downshift>
			</Card>
		</>
	);
};

export default SearchBar;
