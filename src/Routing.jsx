import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AddLinks from "./pages/containers/AddLinksContainer";
import WatchUp from "./pages/containers/WatchUpContainer";
import LearnUp from "./pages/containers/LearnUpContainer";
import MenuList from "./menu/components/MenuList";

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