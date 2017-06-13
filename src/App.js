import React, { Component } from "react";
import {
	Input,
	Button,
	Container,
	Divider,
	Form,
	Label,
} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
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

	changeMemory = (e) => {
		this.setState({
			memoryLink: e.target.value
		})
	}

	render() {
		const { buttonShow } = this.state
		return (
			<Container textAlign='justified'>
				<b>Oh, come on..realy?! </b>
				<Divider />
				<Form>
					<Form.Field>
						<Input
							focus
							placeholder="Add to memory.."
							onClick={this.showBottonAdd}
							onChange={this.changeMemory.bind(this)}
						/>
						<Label pointing>Add smth you want to save</Label>
					</Form.Field>
				</Form>
				<div className="btnGroup">
					{buttonShow &&
						<Button.Group>
							<Button color="teal" onClick={this.sendTo.bind(this, "learn")}>To Learn</Button>
							<Button.Or />
							<Button color="teal" onClick={this.sendTo.bind(this, "watch")}>To Watch</Button>
						</Button.Group>
					}
				</div>
			</Container>
		)
	}
}

export default App;
