/**
 * Returns the number of days until your birthday
 * @param birthDate Date of birth
 * @returns The number of days until your next birthday or -1 if you are not born yet.
 */
export function getDaysUntilBirthday(
  birthDate: Date,
  today: Date = new Date()
) {
  today.setHours(12);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  const todayInMilliseconds = today.getTime();

  if (birthDate.getTime() > today.getTime()) {
    return -1;
  }

  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

  // Get next birthday's date (we set it to this year or this year + 1 if the date has already passed this year)
  const nextBirthday = new Date(birthDate);
  nextBirthday.setFullYear(today.getFullYear());
  if (today.getTime() > nextBirthday.getTime()) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  const nextBirthdayInMilliseconds = nextBirthday.getTime();

  return Math.floor(
    (nextBirthdayInMilliseconds - todayInMilliseconds) / oneDayInMilliseconds
  );
}
