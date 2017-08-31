import React from "react";
import { shallow, mount } from "enzyme";
import AddLinks from "../components/AddLinks";

function setup() {
	const props = {
		memoryLink: "",
		buttonShow: false,
		sendTo: jest.fn(),
		showButtonAdd: jest.fn(),
	}

	const enzymeWrapper = mount(<AddLinks {...props} />)

	return {
		props,
		enzymeWrapper
	}
}

describe("AddLinks", () => {
	it('should render self and subcomponents', () => {
		const { enzymeWrapper, props } = setup();

		
		expect(enzymeWrapper.find("b").text()).toBe("Oh, come on, let me remember for you.");
		expect(enzymeWrapper.find("Label").text()).toBe("Add smth you want to save");
		

		const addLinkInputProps = enzymeWrapper.find("Input").props();
		expect(addLinkInputProps.placeholder).toEqual("Add to memory..");
		// const value = "some_link";
		// enzymeWrapper.find("Input").simulate("change", {
		// 	target: { value },
		// });
		// expect(props.showButtonAdd).toBeCalledWith(value);	
	})
})
