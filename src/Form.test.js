import React from "react";
import { shallow,render } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Form from "./Form";

Enzyme.configure({ adapter: new Adapter() });

describe("<MyComponent />", () => {
  it("renders div", () => {
    const wrapper = render(<Form />);
    expect(wrapper).toMatchSnapshot();
  });
});
