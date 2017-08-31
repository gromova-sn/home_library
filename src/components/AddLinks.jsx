import React from "react";
import PropTypes from "prop-types";
import {
	Input,
	Button,
	Container,
	Divider,
	Form,
	Label,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../style/Pages.css";

const AddLinks = ({ showButtonAdd, buttonShow, memoryLink, sendTo, errorInputHint }) => (
	<Container textAlign="justified">
		<b>Oh, come on, let me remember for you.</b>
		<Divider />
		<Form>
			<Form.Field>
				<Input
					focus
					placeholder="Add to memory.."
					onChange={showButtonAdd.bind(this)}
					value={memoryLink}
				/>
				<Label pointing>Add smth you want to save</Label>
			</Form.Field>
		</Form>
		<div className="btnGroup">
			{buttonShow
				? <Button.Group>
					<Button
						color="teal"
						onClick={sendTo.bind(this, "to_learn")}
					>
						To Learn
					</Button>
					<Button.Or />
					<Button
						color="teal"
						onClick={sendTo.bind(this, "to_watch")}
					>
						To Watch
					</Button>
				</Button.Group>
				: void 0
			}
		</div>
	</Container>
)

AddLinks.propTypes = {
	showButtonAdd: PropTypes.func.isRequired,
	sendTo: PropTypes.func.isRequired,
	buttonShow: PropTypes.bool,
	memoryLink: PropTypes.string,
}

export default AddLinks;
