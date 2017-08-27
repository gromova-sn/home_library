import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AddLinks from "./containers/AddLinksContainer";
import WatchUp from "./containers/WatchUpContainer";
import LearnUp from "./containers/LearnUpContainer";
import MenuList from "./components/MenuList";

class Routing extends Component {
	render() {
		return (
			<Router>
				<div>
					<MenuList />
					<Switch>
						<Route exact path="/" component={AddLinks}/>
						<Route path="/video" component={WatchUp}/>
						<Route path="/learn" component={LearnUp}/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default Routing;