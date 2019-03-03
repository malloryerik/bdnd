import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
	border: 1px solid lightgrey;
	border-radius: 2px;
	padding: 8px;
	margin-bottom: 8px;
	margin-right: 8px;
`

const Papyrus = styled.span`
	margin-left: 25px;
`


export default class Task extends Component {
	render() {
		return (
			// TODO make contentEditable sane
			<Draggable
				draggableId={this.props.task.id}
				index={this.props.index}
			>
				{(provided) => (
					<Container
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						// should be innerRef dedpending on version of 
						ref={provided.innerRef}
					>

						{/* {this.props.task.content} */}
						:::
						<Papyrus contentEditable={true}>edit me</Papyrus>
						<div contentEditable={true}> {this.props.task.content}</div>
					</Container>
				)}
			</Draggable>
		)
	}
}
