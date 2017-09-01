import React from "react";
import PropTypes from "prop-types";
import {
	List,
	Icon,
} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import "../style/Pages.css";

const ListItem = ({ item, removeLink }) => (
	<List.Item>
		<a
			href={item.url}
			target="_blank"
			rel="noopener noreferrer"
			className="toLink"
		>
			{item.url}
		</a>
		<span
			className="iconInline"
			onClick={removeLink.bind(this, item)}
		>
			<Icon
				name="trash"
				color="blue" 
			/>
		</span>
	</List.Item>
)

ListItem.propTypes = {
	item: PropTypes.object.isRequired,
	removeLink: PropTypes.func,
}

export default ListItem;
