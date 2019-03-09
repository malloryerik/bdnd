import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from "./initial-data"
import Column from './column.jsx'
import './index.css'

export default class App extends Component {
	state = {
		tasks: {
			"task-1": { id: "task-1", content: "feed the sticks"},
		},
		columns: {
			'column-1': {
				id: 'column-1',
				title: "To-do",
				taskIds: ["task-1",]
			},
		},
		columnOrder: ["column-1"],
	}

	//reordering logic
	// result is an object with several fields -- see example-result.js -- which we destructure, 
	// taking three values, dest, source and the dragId
	// onDragEnd is used in DragDropContext.
	// example:
	// const result = {
	// 	draggableId: 'task-1',
	// 	type: 'TYPE',
	// 	reason: 'DROP',
	// 	source: {
	// 		droppableId: 'column-1',
	// 		index: 0,
	// 	},
	// 	destination: null,
	// }
	onDragEnd = (result) => {
		const { destination, source, draggableId } = result
		if (!destination) {
			return
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return
		}

		const column = this.state.columns[source.droppableId]
		const newTaskIds = Array.from(column.taskIds)
		newTaskIds.splice(source.index, 1)
		newTaskIds.splice(destination.index, 0, draggableId)

		const newColumn = {
			...column,
			taskIds: newTaskIds
		}

		const newState = {
			...this.state,
			columns: {
				...this.state.columns,
				[newColumn.id]: newColumn,
			}
		}

		this.setState(newState)
	}

	render() {
		return (
			<DragDropContext className
				onDragEnd={this.onDragEnd}

			>
				{this.state.columnOrder.map((col) => {
					const column = this.state.columns[col]
					const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

					return <Column key={column.id} column={column} tasks={tasks} />
				})}
			</DragDropContext>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));