import { createStore } from "redux"
import links from "../reducers/index"

export default function storeConfig() {
	return createStore(links);
};