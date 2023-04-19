/**
 * @vitest-environment node
 */

import { validateDateInput } from "./validateDateInput";
import { describe, test, expect } from "vitest";

describe("Date Input Validation", () => {
  test("Returns a boolean", () => {
    expect(validateDateInput("test")).toBeTypeOf("boolean");
    expect(validateDateInput("2022-01-01")).toBeTypeOf("boolean");
  });

  test("Returns false if given date is in wrong format", () => {
    expect(validateDateInput("12-01-2022")).toEqual(false);
  });

  test("Returns false if given date contains letters or non numeric characters", () => {
    expect(validateDateInput("abcd")).toEqual(false);
    expect(validateDateInput("2022-01_01")).toEqual(false);
  });
  test("Returns false if month is greater than 12 or 0", () => {
    expect(validateDateInput("2023-13-01")).toEqual(false);
    expect(validateDateInput("2023-00-01")).toEqual(false);
  });

  test("Returns false if date is greater than 31 or 0", () => {
    expect(validateDateInput("2023-12-00")).toEqual(false);
    expect(validateDateInput("2023-01-32")).toEqual(false);
  });

  test("Returns false if given date is after today", () => {
    expect(validateDateInput("2222-01-01")).toEqual(false);
  });

  test("Returns true if date is in valid format", () => {
    expect(validateDateInput("2022-01-01")).toEqual(true);
  });
});
