import React, { Component } from "react";
import { connect } from "react-redux";
import { addLink, fetchDataPost } from "../actions/index";
import AddLinks from "../components/AddLinks";

class AddLinksContainer extends Component {
	sendTo = (field) => {
		this.props.fetchDataPost(
			"add",
			{
				url: this.props.memoryLink,
				[field]: true,
			},
			false
		)
	}

	render() {
		return (
			<AddLinks
				showButtonAdd={this.props.showButtonAdd}
				buttonShow={this.props.buttonShow}
				sendTo={this.sendTo}
				memoryLink={this.props.memoryLink}
			/>
		)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		showButtonAdd: e => dispatch(addLink(e.target.value)),
		fetchDataPost: (post, item) => dispatch(fetchDataPost(post, item)),
	}
};

const mapStateToProps = state => {
	return {
		memoryLink: state.memoryLink,
		buttonShow: state.buttonShow,
		typeOfPage: state.typeOfPage,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLinksContainer);
