import React, { Component } from "react";
import axios from "axios";
import LearnUp from "../components/LearnUp";

class LearnUpContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataToLearn: []
		}
	}

	componentDidMount() {
		this.getApi()
	}

	getApi = () => {
		axios.get('/api/to_learn')
			.then((response) => {
				this.setState({
					dataToLearn: response.data
				})
			})
	}

	removeLink = (item) => {
		let links = this.state.dataToLearn;
		links.splice(links.indexOf(item), 1);
		this.setState({
				dataToLearn: links
			});
		axios.post(
				`/api/remove`,
				item
			)
	}

	render() {
		if (!this.state.dataToLearn.length) return null
		return (
			<LearnUp
				data={this.state.dataToLearn}
				removeLink={this.removeLink}
			/>
		)
	}
}

export default LearnUpContainer;
