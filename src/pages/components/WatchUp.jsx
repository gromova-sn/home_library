import React from "react";
import PropTypes from "prop-types";
import {
	Container,
	Divider,
	List,
} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

const WatchUp = ({ data }) => (
	<Container textAlign='justified'>
		<div>WatchUp</div>
		<Divider />
		<List bulleted>
			{data.map((item, key) => {
			return (
				<List.Item key={key}>
					<a
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{item.url}
					</a>
				</List.Item>
			)
		})}
		</List>
	</Container>
)

WatchUp.PropTypes = {
	data: PropTypes.object
}


export default WatchUp;
