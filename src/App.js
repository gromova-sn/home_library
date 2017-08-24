import React, { Component } from "react";
import {
	Input,
	Button,
	Container,
	Divider,
	Form,
	Label,
} from "semantic-ui-react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonShow: false,
			memoryLink: "",
		}
	}

	showBottonAdd = () => {
		this.setState({
			buttonShow: true
		})
	}

	sendTo = (field) => {
		axios.post(
			`/api/add`,
			{
				url: this.state.memoryLink,
				[field]: true,
			}
		)
		this.setState({
			memoryLink: ""
		})
	}

	changeMemory = (e) => {
		this.setState({
			memoryLink: e.target.value
		})
	}

	render() {
		const { buttonShow, memoryLink } = this.state
		return (
			<Container textAlign="justified">
				<b>Oh, come on..realy?! </b>
				<Divider />
				<Form>
					<Form.Field>
						<Input
							focus
							placeholder="Add to memory.."
							onClick={this.showBottonAdd}
							onChange={this.changeMemory.bind(this)}
							value={memoryLink}
						/>
						<Label pointing>Add smth you want to save</Label>
					</Form.Field>
				</Form>
				<div className="btnGroup">
					{buttonShow &&
						<Button.Group>
							<Button color="teal" onClick={this.sendTo.bind(this, "to_learn")}>To Learn</Button>
							<Button.Or />
							<Button color="teal" onClick={this.sendTo.bind(this, "to_watch")}>To Watch</Button>
						</Button.Group>
					}
				</div>
			</Container>
		)
	}
}

export default App;
