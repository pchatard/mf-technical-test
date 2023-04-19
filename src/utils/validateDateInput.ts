export function validateDateInput(s: string): boolean {
  // Check format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) {
    return false;
  } else {
    const splitDate = s.split("-");
    // Check month value
    const month = parseInt(splitDate[1]);
    if (month == 0 || month > 12) return false;

    // Check date value
    const date = parseInt(splitDate[2]);
    if (date == 0 || date > 31) return false;

    // Check if given date is in the past
    const today = new Date();
    today.setHours(12);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    const givenDate = new Date(s);
    givenDate.setHours(12);
    givenDate.setMinutes(0);
    givenDate.setSeconds(0);
    givenDate.setMilliseconds(0);

    if (today.getTime() < givenDate.getTime()) return false;

    return true;
  }
}
