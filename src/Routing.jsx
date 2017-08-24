import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import App from "./App";
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
						<Route exact path="/" component={App}/>
						<Route path="/video" component={WatchUp}/>
						<Route path="/learn" component={LearnUp}/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default Routing;