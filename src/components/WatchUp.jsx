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

const WatchUp = ({ data, removeLink, isFetching }) => (
	<Container textAlign='justified'>
		<div>WatchUp</div>
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

WatchUp.propTypes = {
	data: PropTypes.array.isRequired,
	removeLink: PropTypes.func,
	isFetching: PropTypes.bool,
}

export default WatchUp;
