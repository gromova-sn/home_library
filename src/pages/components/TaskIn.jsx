import React, { Component } from "react";
import { Input, Button } from 'semantic-ui-react';

class TaskIn extends Component {
	state = {
		buttonShow: false,
		memoryLink: ""
	}

	showBottonAdd = () => {
		this.setState({
			buttonShow: true
		})
	}

	sendTo = (field) => {
		console.log(field, this.state.memoryLink)
	}

	changeMemoryLink = (e) => {
		console.log(e.target.value)
		this.setState({
			memoryLink: e.target.value
		})
	}

	render() {
		const { buttonShow } = this.state
		return (
			<div>
				<div>TaskIn</div>
				<Input
					focus
					placeholder="Add to memory.."
					onClick={this.showBottonAdd}
					onChange={this.changeMemoryLink.bind(this)}
				/>
				{buttonShow &&
					<Button.Group>
						<Button color="teal" onClick={this.sendTo.bind(this, "learn")}>To Learn</Button>
						<Button.Or />
						<Button color="teal" onClick={this.sendTo.bind(this, "watch")}>To Watch</Button>
					</Button.Group>
				}
			</div>
		)
	}
}

export default TaskIn;
