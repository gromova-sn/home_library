import React, { Component } from "react";
import { connect } from "react-redux";
import WatchUp from "../components/WatchUp";
import { fetchDataGet, fetchDataPost } from "../actions/index";

class WatchUpContainer extends Component {
	componentDidMount() {
		this.getApi()
	}

	getApi = () => {
		this.props.fetchDataGet("to_watch")
	}

	removeLink = (item) => {
		this.props.fetchDataPost("remove", item)
	}

	render() {
		return (
			<WatchUp
				data={this.props.data}
				removeLink={this.removeLink}
				isFetching={this.props.isFetching}
			/>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchDataGet: get => dispatch(fetchDataGet(get)),
		fetchDataPost: (post, item) => dispatch(fetchDataPost(post, item)),
	}
};

const mapStateToProps = state => {
	return {
		data: state.data,
		isFetching: state.isFetching,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchUpContainer);
