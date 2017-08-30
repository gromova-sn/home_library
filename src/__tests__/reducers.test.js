import reducer from "../reducers/index";

describe('reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(
			{
				memoryLink: "",
				buttonShow: false,
				isFetching: true,
				data: [],
			}
		)
	})

	it('should return the state for ADD_LINK', () => {
		expect(reducer({}, {
			type: "ADD_LINK",
			link: "action.link",
		}))
		.toEqual(
			{
				memoryLink: "action.link",
				buttonShow: true,
			}
		)
	})

	it('should return the state for EMPTY_INPUT', () => {
		expect(reducer({}, {
			type: "EMPTY_INPUT",
		}))
		.toEqual(
			{
				memoryLink: "",
				buttonShow: false,
			}
		)
	})

	it('should return the state for REQUEST_WAIT', () => {
		expect(reducer({}, {
			type: "REQUEST_WAIT",
		}))
		.toEqual(
			{
				isFetching: true
			}
		)
	})

	it('should return the state for RECEIVE_GET', () => {
		expect(reducer({}, {
			type: "RECEIVE_GET",
			posts: { url: "some_url", to_learn: true }
		}))
		.toEqual(
			{
				isFetching: false,
				data: { url: "some_url", to_learn: true }
			}
		)
	})

	it('should return the state for RECEIVE_POST', () => {
		expect(reducer({
			data: [
				{ url: "some_url1", to_learn: true, id: 1 },
				{ url: "some_url2", to_watch: true, id: 2 },
				{ url: "some_url3", to_learn: true, id: 3 },
				{ url: "some_url4", to_watch: true, id: 4 },
			]
		}, {
			type: "RECEIVE_POST",
			item: { url: "some_url3", to_learn: true, id: 3 }
		}))
		.toEqual(
			{
				data: [
					{ url: "some_url1", to_learn: true, id: 1 },
					{ url: "some_url2", to_watch: true, id: 2 },
					{ url: "some_url4", to_watch: true, id: 4 },
				],
				isFetching: false,
			}
		)
	})
})