/**
 * @vitest-environment jsdom
 */

import { render } from "@testing-library/react";
import CustomInput from "./CustomInput";

describe("CustomInput", () => {
  let value = "";
  const setValue = (s: string) => {
    value = s;
  };

  beforeEach(() => {
    value = "";
  });
  test("Renders correctly", () => {
    const { container } = render(
      <CustomInput
        type="text"
        name="Input"
        label="Label"
        value={value}
        onChange={setValue}
      />
    );

    expect(container).toBeInTheDocument();
  });

  test("Prints 'label' prop correctly", () => {
    const { container } = render(
      <CustomInput
        type="text"
        name="Input"
        label="Label"
        value={value}
        onChange={setValue}
      />
    );

    expect(container.getElementsByTagName("label")[0]).toHaveTextContent(
      "Label"
    );
  });

  test("Sets correct id based on 'name' prop", () => {
    const { container } = render(
      <CustomInput
        type="text"
        name="input"
        label="Label"
        value={value}
        onChange={setValue}
      />
    );

    expect(container.querySelector("#input")).toBeDefined();
  });

  test("Gets the focus on render", () => {
    const { container } = render(
      <CustomInput
        type="text"
        name="input"
        label="Label"
        value={value}
        onChange={setValue}
      />
    );

    expect(container.querySelector("#input")).toHaveFocus();
  });

  test("Displays 'value' prop inside the input", () => {
    value = "Test";

    const { container } = render(
      <CustomInput
        type="text"
        name="input"
        label="Label"
        value={value}
        onChange={setValue}
      />
    );
    expect(container.querySelector("#input")).toHaveAttribute("value", "Test");
  });

  test("Has a red focus if 'isError' prop is true", () => {
    const { container } = render(
      <CustomInput
        type="text"
        name="input"
        label="Label"
        value={value}
        onChange={setValue}
        isError
      />
    );

    expect(container.querySelector("#input")).toHaveClass("border-red-400");
  });
});
