/**
 * @vitest-environment jsdom
 */

import { render } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput", () => {
  let value = "";
  const setValue = (s: string) => {
    value = s;
  };

  beforeEach(() => {
    value = "";
  });
  test("Renders correctly", () => {
    const { container } = render(
      <TextInput name="Input" label="Label" value={value} setValue={setValue} />
    );

    expect(container).toBeInTheDocument();
  });

  test("Prints 'label' prop correctly", () => {
    const { container } = render(
      <TextInput name="Input" label="Label" value={value} setValue={setValue} />
    );

    expect(container.getElementsByTagName("label")[0]).toHaveTextContent(
      "Label"
    );
  });

  test("Sets correct id based on 'name' prop", () => {
    const { container } = render(
      <TextInput name="input" label="Label" value={value} setValue={setValue} />
    );

    expect(container.querySelector("#input")).toBeDefined();
  });

  test("Gets the focus on render", () => {
    const { container } = render(
      <TextInput name="input" label="Label" value={value} setValue={setValue} />
    );

    expect(container.querySelector("#input")).toHaveFocus();
  });

  test("Displays 'value' prop inside the input", () => {
    value = "Test";

    const { container } = render(
      <TextInput name="input" label="Label" value={value} setValue={setValue} />
    );
    expect(container.querySelector("#input")).toHaveAttribute("value", "Test");
  });

  test("Has a red focus if 'isError' prop is true", () => {
    const { container } = render(
      <TextInput
        name="input"
        label="Label"
        value={value}
        setValue={setValue}
        isError
      />
    );

    expect(container.querySelector("#input")).toHaveClass("border-red-400");
  });
});
