import { createStore, applyMiddleware } from "redux";
import links from "../reducers/index";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export default function storeConfig() {
	return createStore(
		links,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	);
}