import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import ContentEditable from 'react-contenteditable'
import './task.css'

const Container = styled.div`
	padding: 8px;
	margin-bottom: 8px;
	margin-right: 8px;
	/* background-color: black; */
	outline: 0px solid transparent;
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
		this.contentEditable = React.createRef();
		this.state = {
			html: ".",
			dragVisible: "hide"
		}
	}
	handleChange = (e) => {
		this.setState({ html: e.target.value })
		console.log("hi")
	}
	onMouseOver = () => {
		this.setState({ dragVisible: "show" })
		console.log("mouae")
	}
	onMouseOut = () => {
		this.setState({ dragVisible: "hide" })
		console.log("hide")
	}

	render = () => {
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
						onMouseOver={this.onMouseOver}
						onMouseOut={this.onMouseOut}
					>

						{/* {this.props.task.content} */}

						<DragHandle className={this.state.dragVisible} {...provided.dragHandleProps}>:::</DragHandle>
						<ContentEditable
							innerRef={this.contentEditable}
							html={this.state.html} // innerHTML of the editable div
							disabled={false}       // use true to disable editing
							onChange={this.handleChange} // handle innerHTML change
							tagName='article' // Use a custom HTML tag (uses a div by default)
						/>
					</Container>
				)}
			</Draggable>
		)
	}
}

export default Task