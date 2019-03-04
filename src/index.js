import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from "./initial-data"
import Column from './column.jsx'



export default class App extends Component {
	state = initialData

	//reordering logic
	onDragEnd = result => {
		
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