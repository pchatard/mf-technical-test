/**
 * @vitest-environment node
 */

import { validateTextInput } from "./validateTextInput";
import { describe, test, expect } from "vitest";

describe("Text Input Validation", () => {
  test("Returns a boolean", () => {
    expect(validateTextInput("test")).toBeTypeOf("boolean");
  });

  test("Returns false if string contains a number", () => {
    expect(validateTextInput("abcd23")).toEqual(false);
    expect(validateTextInput("1")).toEqual(false);
    expect(validateTextInput("123")).toEqual(false);
  });

  test("Returns false if string is empty", () => {
    expect(validateTextInput("")).toEqual(false);
    expect(validateTextInput("  ")).toEqual(false);
  });

  test("Returns true if string contains only letters", () => {
    expect(validateTextInput("Patrick")).toEqual(true);
    expect(validateTextInput("Pierre")).toEqual(true);
  });

  test("Returns true if string contains an hyphen", () => {
    expect(validateTextInput("Jean-Michel")).toEqual(true);
  });

  test("Returns true if string contains a space", () => {
    expect(validateTextInput("Jean Michel")).toEqual(true);
  });

  test("Returns false if string contains a special character other than hyphen", () => {
    expect(validateTextInput("Jean_Michel")).toEqual(false);
    expect(validateTextInput("Jean-Michel!")).toEqual(false);
    expect(validateTextInput("Jean'Michel")).toEqual(false);
  });
});
