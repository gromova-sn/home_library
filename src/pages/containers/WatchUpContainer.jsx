import React, { Component } from "react";
import axios from "axios";
import WatchUp from "../components/WatchUp";

class WatchUpContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataToWatch: []
		}
	}

	componentDidMount() {
		this.getApi()
	}

	getApi = () => {
		axios.get('/api/to_watch')
			.then((response) => {
				this.setState({
					dataToWatch: response.data
				})
			})
	}

	render() {
		if (!this.state.dataToWatch.length) return null
		return (
			<WatchUp data={this.state.dataToWatch} />
		)
	}
}

export default WatchUpContainer;
