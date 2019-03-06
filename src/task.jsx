import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import './task.css'

const Container = styled.div`
	border: 1px solid black;
	border-radius: 2px;
	padding: 8px;
	margin-bottom: 8px;
	margin-right: 8px;
	background-color: black;
`

const DragHandle = styled.span`

`;

const Papyrus = styled.span`
	margin-left: 25px;
	margin-right: 8px;
	word-wrap: true;
	
	/* ${DragHandle}:hover & {
    visibility: visible;
  } */
`



class Task extends Component {
	constructor(props) {
		super(props);
		this.state = { text: "..." };

		this.handleChange = this.handleChange.bind(this);

	}
		handleChange(e) {
			this.setState({text: e.target.value})
			console.log("hi")
	}

	render() {
		return (
			// TODO make contentEditable sane
			<Draggable className="taskBody"
				draggableId={this.props.task.id}
				index={this.props.index}
			>
				{(provided) => (
					<Container
						{...provided.draggableProps}

						// should be innerRef dedpending on version of 
						ref={provided.innerRef}
					>

						{/* {this.props.task.content} */}

						<DragHandle className="hideNSeek" {...provided.dragHandleProps}>::::::</DragHandle>
						{/* <Papyrus contentEditable={true}>{this.props.task.content} </Papyrus> */}
						<Papyrus
							contentEditable={true}
							onKeyDown={this.handleChange}
						>{this.state.text} .. {this.state.text}	<textarea name="t" id="t" cols="30" rows="10"></textarea> </Papyrus>
					</Container>
				)}
			</Draggable>
		)
	}
}

export default Task