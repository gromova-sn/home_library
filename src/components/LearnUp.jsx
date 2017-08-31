import React from "react";
import PropTypes from "prop-types";
import {
	Container,
	Divider,
	List,
	Dimmer,
	Loader,
} from "semantic-ui-react";
import ListItem from "./ListItem";
import 'semantic-ui-css/semantic.min.css';

const LearnUp = ({ data, removeLink, isFetching }) => (
	<Container textAlign='justified'>
		<div>LearnUp</div>
		<Divider />
		{isFetching
			? <Dimmer active inverted>
				<Loader inverted>Loading</Loader>
			</Dimmer>
			: <List bulleted>
				{data.length 
					? data.map((item, key) => 
						<ListItem
							item={item}
							key={`item_${key}`}
							removeLink={removeLink}
						/>
					)
					: void 0
				}
			</List>
		}
	</Container>
)

LearnUp.propTypes = {
	data: PropTypes.array.isRequired,
	isFetching: PropTypes.bool,
	removeLink: PropTypes.func,
}

export default LearnUp;
