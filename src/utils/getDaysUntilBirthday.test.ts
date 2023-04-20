/**
 * @vitest-environment node
 */

import { getDaysUntilBirthday } from "./getDaysUntilBirthday";

const aprilNineteenth = new Date(2023, 3, 19, 12);
const today = new Date();
today.setHours(12);
today.setMinutes(0);
today.setSeconds(0);
today.setMilliseconds(0);
const exampleBirthDate = new Date(1997, 4, 1, 12);
const earlyYearBirthDate = new Date(1997, 0, 1, 12);
const lateYearBirthDate = new Date(1997, 11, 31, 12);
const futureBirthDate = new Date(2033, 6, 1, 12);

describe("getDaysUntilBirthday", () => {
  test("Returns something", () => {
    expect(getDaysUntilBirthday(aprilNineteenth)).toBeDefined();
  });

  test("Returns a number", () => {
    expect(getDaysUntilBirthday(aprilNineteenth)).toBeTypeOf("number");
  });

  test("Returns a number greater or equal than -1 and less than 366", () => {
    expect(getDaysUntilBirthday(aprilNineteenth)).toBeLessThan(366);
    expect(getDaysUntilBirthday(aprilNineteenth)).toBeGreaterThanOrEqual(-1);
  });

  test("Returns -1 if given birth date is in future", () => {
    expect(getDaysUntilBirthday(futureBirthDate)).toEqual(-1);
  });

  test("Returns 0 if given birth date is today's date", () => {
    expect(getDaysUntilBirthday(today)).toEqual(0);
  });

  test("Returns 1 if given birth date is tomorrow's date", () => {
    const tomorrow = new Date(today);
    tomorrow.setFullYear(1986);
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(getDaysUntilBirthday(tomorrow)).toEqual(1);
  });

  test("Returns 10 if given birth date is 10 days after today", () => {
    const tenDaysLater = new Date(today);
    tenDaysLater.setFullYear(1986);
    tenDaysLater.setDate(tenDaysLater.getDate() + 10);
    expect(getDaysUntilBirthday(tenDaysLater)).toEqual(10);
  });

  test("Returns 30 if given birth date is 30 days after today", () => {
    const thirtyDaysLater = new Date(today);
    thirtyDaysLater.setFullYear(1986);
    thirtyDaysLater.setDate(thirtyDaysLater.getDate() + 30);
    expect(getDaysUntilBirthday(thirtyDaysLater)).toEqual(30);
  });

  test("Returns 12 when birthday is 01/05 and today is 19/04", () => {
    expect(getDaysUntilBirthday(exampleBirthDate, aprilNineteenth)).toEqual(12);
  });

  test("Returns 256 when birthday is 31/12 and today is 19/04", () => {
    expect(getDaysUntilBirthday(lateYearBirthDate, aprilNineteenth)).toEqual(
      256
    );
  });

  test("Returns 257 when birthday is 01/01 and today is 19/04", () => {
    expect(getDaysUntilBirthday(earlyYearBirthDate, aprilNineteenth)).toEqual(
      257
    );
  });
});
