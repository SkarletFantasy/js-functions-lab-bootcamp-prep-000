// write your code below!

function happyHolidays() {
  return('Happy holidays!')
}

function happyHolidaysTo(name) {
  return(`Happy holidays, ${name}!`)
}

function happyCustomHolidayTo(holiday, name) {
  return(`Happy ${holiday}, ${name}!`)
}

Not sure why I'm not passing the test for "Functions Lab". The IDE says it expects "It's 20 days until Mother's Day!" but the actual is "It's 20 days until Mother's Day!" So I'm not sure what I've done wrong... 
Here is my code:

function holidayCountdown(holiday, days) {
  return(`It's ${days} days unitl ${holiday}!`)
}