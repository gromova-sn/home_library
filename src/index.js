import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import storeConfig from "./store/index";
import registerServiceWorker from "./registerServiceWorker";
import Routing from "./Routing";

const store = storeConfig();

ReactDOM.render(
	<Provider store={store}>
		<Routing />
	</Provider>,
	document.getElementById("root")
);

registerServiceWorker();
