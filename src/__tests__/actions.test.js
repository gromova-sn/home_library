import * as actions from "../actions/index";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import expect from "expect";
import fetch from "isomorphic-fetch";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
	it("need for create an action to add a link", () => {
		const link = "link"
		const expectedAction = {
			type: "ADD_LINK",
			link
		}
		expect(actions.addLink(link)).toEqual(expectedAction)
	})

	it("need for change status show/hide button", () => {
		const expectedAction = {
			type: "SEND_TO_PAGE",
		}
		expect(actions.sendToPage()).toEqual(expectedAction)
	})

	it("need for change status isFetching:true", () => {
		const subreddit = "to_watch";
		const expectedAction = {
			type: "REQUEST_WAIT",
			subreddit
		}
		expect(actions.requestWait(subreddit)).toEqual(expectedAction)
	})

	it("need for change status data: data.json", () => {
		const json = { url: "test1", to_learn: true };
		const expectedAction = {
			type: "RECEIVE_GET",
			posts: json
		}
		expect(actions.receiveGet(json)).toEqual(expectedAction)
	})

	it("need for change status isFetching:false", () => {
		const expectedAction = {
			type: "RECEIVE_POST",
		}
		expect(actions.receivePost()).toEqual(expectedAction)
	})
})

describe("async actions", () => {
	afterEach(() => {
		nock.cleanAll()
	})

	it("creates RECEIVE_GET when fetching links (to_learn) has been done", () => {
		nock("http://localhost:3000/")
			.get("/api/to_learn")
			.reply(200, { url: "test1", to_learn: true })

		const subreddit = "to_learn";

		const expectedActions = [
			{ type: "REQUEST_WAIT", subreddit: subreddit },
			{ type:  "RECEIVE_GET", posts: { url: "test1", to_learn: true } }
		]
		const store = mockStore({ })

		return store.dispatch(actions.fetchDataGet(subreddit)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	it("creates RECEIVE_GET when fetching links (to_watch) has been done", () => {
		nock("http://localhost:3000/")
			.get("/api/to_watch")
			.reply(200, { url: "test1", to_watch: true })

		const subreddit = "to_watch";

		const expectedActions = [
			{ type: "REQUEST_WAIT", subreddit: subreddit },
			{ type:  "RECEIVE_GET", posts: { url: "test1", to_watch: true } }
		]
		const store = mockStore({ })

		return store.dispatch(actions.fetchDataGet(subreddit)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	it("creates RECEIVE_POST when add link", () => {
		nock("http://localhost:3000/")
			.post("/api/add")
			.reply(200, { url: "test1", to_watch: true })

		const subreddit = "add";
		const item = { url: "test1", to_watch: true };
		const waiting = false;

		const expectedActions = [
			{ type:  "SEND_TO_PAGE" }
		]
		const store = mockStore({ })

		return store.dispatch(actions.fetchDataPost(subreddit, item, waiting)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	it("creates RECEIVE_POST when remove link", () => {
		nock("http://localhost:3000/")
			.post("/api/remove")
			.reply(200, { url: "test1", to_watch: true })

		const subreddit = "remove";
		const item = { url: "test1", to_watch: true };
		
		const expectedActions = [
			{ type: "REQUEST_WAIT", subreddit: subreddit },
			{ type:  "RECEIVE_POST" }
		]
		const store = mockStore({ })

		return store.dispatch(actions.fetchDataPost(subreddit, item)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})