function validEmail(str) {
  if (typeof str !== "string" || str === "") { return false; } return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
