import React from "react";
import { shallow, mount } from "enzyme";
import AddLinks from "../components/AddLinks";

describe("AddLinks", () => {
	it('should call onChange handler with args', () => {
		const onChangeMock = jest.fn();
		const sendTo = jest.fn()
		const wrapper = mount(
			<AddLinks
				showButtonAdd={onChangeMock}
				sendTo={sendTo}
			/>);
		wrapper.find("input").simulate("change");
    	expect(onChangeMock.mock.calls).toHaveLength(1);
	})
})
