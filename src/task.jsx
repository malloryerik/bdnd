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

const Papyrus = styled.span `
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
			html: "",
			dragVisible: "hide",
			placeholderViz: "hide",
			contentVisible: "show"
		}
	}
	handleChange = (e) => {
		this.setState({ html: e.target.value })
		console.log("hi")
	}
	onMouseOver = () => {
		this.setState({
			dragVisible: "show",
			placeholderViz: "hi, Baby!",
		})

		console.log("mouae")
	}
	onMouseOut = () => {
		this.setState({ 
			dragVisible: "hide",
			placeholderViz: "hi " 
		})
		console.log("hide")
	}
	onKeyDown = (e) => {
		console.log(e.key)
		if (e.key === 'Enter') {
			e.preventDefault()
			e.stopPropagation()
			console.log("Sweeeeeet Jamaica")
		}
	}


	render = () => {

		let visibility = () => {
			if (this.state.html == "") {
				console.log("no visibility")
				return "hide"
			} else {
				console.log("ICU")
				return "show"
			}
		}

		return (
			// TODO make contentEditable sane
			<Draggable className="taskBody "
				draggableId={this.props.task.id}
				index={this.props.index}
			>
				{(provided) => (
					<Container
					className="flex-container taskBody"
						{...provided.draggableProps}
						// should be innerRef dedpending on version of 
						ref={provided.innerRef}
						onMouseOver={this.onMouseOver}
						onMouseOut={this.onMouseOut}
					>

						{/* {this.props.task.content} */}

						<div className={`${this.state.dragVisible} draghandle flex-item`}>+  </div>

						<DragHandle 
							className={`${this.state.dragVisible} draghandle flex-item`}
							{...provided.dragHandleProps}
						> ::: </DragHandle>

						<ContentEditable
							onKeyDown={this.onKeyDown}
							className={`${visibility} flex-item` }
							innerRef={this.contentEditable}
							html={this.state.html} // innerHTML of the editable div
							disabled={false}       // use true to disable editing
							onChange={this.handleChange} // handle innerHTML change
							tagName='article' // Use a custom HTML tag (uses a div by default)
							placeholder={`hi`}
						/>
					</Container>
				)}
			</Draggable>
		)
	}
}

export default Task