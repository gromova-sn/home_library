import React, { Component } from "react";
import { connect } from "react-redux";
import { addLink, sendToPage } from "../../actions/index";
import AddLinks from "../components/AddLinks";
import axios from "axios";

class AddLinksContainer extends Component {
	sendTo = (field) => {
		axios.post(
			`/api/add`,
			{
				url: this.props.memoryLink,
				[field]: true,
			}
		)
		this.props.sendToPage()
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
		sendToPage: () => dispatch(sendToPage())
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