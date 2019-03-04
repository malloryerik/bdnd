import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import './task.css'

const Container = styled.div`
	border: 1px solid lightgrey;
	border-radius: 2px;
	padding: 8px;
	margin-bottom: 8px;
	margin-right: 8px;
	background-color: white;
`

const DragHandle = styled.span`

`;

const Papyrus = styled.span`
	margin-left: 25px;
	/* ${DragHandle}:hover & {
    visibility: visible;
  } */
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
			
						// should be innerRef dedpending on version of 
						ref={provided.innerRef}
					>

						{/* {this.props.task.content} */}
					
						<DragHandle className="hideNSeek" {...provided.dragHandleProps}>::::::</DragHandle>
						<Papyrus contentEditable={true}>{this.props.task.content} </Papyrus>
					</Container>
				)}
			</Draggable>
		)
	}
}
