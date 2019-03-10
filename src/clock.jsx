import React, { Component } from 'react'

export default class Clock extends Component {
	constructor() {
		super()

		this.state = {
			timeNow: (new Date()).toLocaleString(),
		}
	}
	componentDidMount() {
		this.launchClock = setInterval(() => {
				this.setState({
					timeNow: (new Date()).toLocaleString()
				})
			}, 1000)		
		}
	

	render() {
		return (
			<h3>
				Time: {this.state.timeNow}
			</h3>
		)
	}
}
