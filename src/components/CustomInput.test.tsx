/**
 * @vitest-environment jsdom
 */

import { render } from "@testing-library/react";
import CustomInput from "./CustomInput";
import { RefObject } from "react";

describe("CustomInput", () => {
  let value = "";
  let containerRef: RefObject<HTMLDivElement>;
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
        isLoading={false}
        containerRef={containerRef}
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
        isLoading={false}
        containerRef={containerRef}
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
        isLoading={false}
        containerRef={containerRef}
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
        isLoading={false}
        containerRef={containerRef}
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
        isLoading={false}
        containerRef={containerRef}
        value={value}
        onChange={setValue}
      />
    );
    expect(container.querySelector("#input")).toHaveAttribute("value", "Test");
  });

  test("Has a red bottom border if 'isError' prop is true", () => {
    const { container } = render(
      <CustomInput
        type="text"
        name="input"
        label="Label"
        isLoading={false}
        containerRef={containerRef}
        value={value}
        onChange={setValue}
        isError
      />
    );

    expect(container.querySelector("#input")).toHaveClass("border-b-red-600");
  });

  test("Renders Loader if 'isLoading' prop is true", () => {
    const { container } = render(
      <CustomInput
        type="text"
        name="input"
        label="Label"
        isLoading={true}
        containerRef={containerRef}
        value={value}
        onChange={setValue}
        isError
      />
    );

    expect(container.querySelector("#loading")).toBeInTheDocument();
  });
});
