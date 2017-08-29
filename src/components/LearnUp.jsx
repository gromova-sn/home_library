import React from "react";
import PropTypes from "prop-types";
import {
	Container,
	Divider,
	List,
	Icon,
	Dimmer,
	Loader,
} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import "../style/Pages.css";

const LearnUp = ({ data, removeLink, isFetching }) => (
	<Container textAlign='justified'>
		<div>LearnUp</div>
		<Divider />
		{isFetching
			? <Dimmer active inverted>
				<Loader inverted>Loading</Loader>
			</Dimmer>
			: <List bulleted>
				{data.map((item, key) => {
					return (
						<List.Item key={key}>
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
				})}
			</List>
		}
	</Container>
)

LearnUp.propTypes = {
	data: PropTypes.array.isRequired,
	removeLink: PropTypes.func,
	isFetching: PropTypes.bool,
}

export default LearnUp;
