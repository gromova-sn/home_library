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

	render() {
		if (!this.state.dataToLearn.length) return null
		return (
			<LearnUp
				data={this.state.dataToLearn}
			/>
		)
	}
}

export default LearnUpContainer;