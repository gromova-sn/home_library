import React, { Component } from "react";
import { connect } from "react-redux";
import { addLink, fetchDataPost, emptyInput } from "../actions/index";
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

	showButtonAdd = (e) => {
		const inputText = e.target.value;
		if (inputText === "") {
			this.props.emptyInput()
		} else {
			this.props.showButtonAdd(inputText.trim())
		}
	}

	render() {
		return (
			<AddLinks
				showButtonAdd={this.showButtonAdd}
				buttonShow={this.props.buttonShow}
				sendTo={this.sendTo}
				sendClose={this.props.sendToPageClose}
				errorInputHint={this.props.errorInputHint}
				memoryLink={this.props.memoryLink}
			/>
		)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		showButtonAdd: inputText => dispatch(addLink(inputText)),
		emptyInput: () => {dispatch(emptyInput())},
		fetchDataPost: (post, item) => dispatch(fetchDataPost(post, item)),
	}
};

const mapStateToProps = state => {
	return {
		memoryLink: state.memoryLink,
		buttonShow: state.buttonShow,
		typeOfPage: state.typeOfPage,
		errorInputHint: state.errorInputHint,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLinksContainer);
