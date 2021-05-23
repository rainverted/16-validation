const Validation = require('./js/Validation');

const v = new Validation();


//console.log(v.isValidMessage('Some message'), true);
//console.log(v.isValidMessage(12345), false);
//console.log(v.isValidMessage('12345'), false);

console.log(v.isValidFirstName('Vardenis'), true);
console.log(v.isValidFirstName(123), false);
console.log(v.isValidFirstName(''), false);
console.log(v.isValidFirstName('a'), false);
console.log(v.isValidFirstName('Raimonda'), true);
console.log(v.isValidFirstName('raimonda'), false);
console.log(v.isValidFirstName('RaiMonda'), false);
console.log(v.isValidFirstName('Raimonda5'), false);
console.log(v.isValidFirstName('Rai monda'), false);

//console.log(v.isValidLastName('Pavardenis'), true);
//console.log(v.isValidPhoneNumber('+37061234567'), true);
//console.log(v.isValidEmail('demo@example.com'), true);
//console.log(v.isValidMonthName('Sausis'), true);
//console.log(v.isValidMonthName('January'), true);
//console.log(v.isValidWeekdayName('Pirmadienis'), true);
//console.log(v.isValidWeekdayName('Monday'), true);
//console.log(v.isValidPersonID(39912311234), true);