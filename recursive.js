function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const position = 9;
console.log(fibonacci(position));

function getTicketPrice(age) {
  if (age <= 12) {
    return "$10";
  } else if (age >= 13 && age <= 17) {
    return "$15";
  } else if (age >= 18) {
    return "$20";
  } else {
    return "Invalid age";
  }
}

const age = 15;
console.log(`Ticket Price: ${getTicketPrice(age)}`);

function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
 
  const year = 2024;
  console.log(`${year} is a leap year: ${isLeapYear(year)}`);
  