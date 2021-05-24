const Validation = require('./js/Validation');

const v = new Validation();


//console.log(v.isValidMessage('Some message'), true);
//console.log(v.isValidMessage(12345), false);
//console.log(v.isValidMessage('12345'), false);

console.assert(v.isValidFirstName('Vardenis') === true, 'ERROR');
console.assert(v.isValidFirstName(123) === false, 'ERROR');
console.assert(v.isValidFirstName('') === false, 'ERROR');
console.assert(v.isValidFirstName('a') === false, 'ERROR');
console.assert(v.isValidFirstName('Raimonda') === true, 'ERROR');
console.assert(v.isValidFirstName('raimonda') === false, 'ERROR');
console.assert(v.isValidFirstName('RaiMonda') === false, 'ERROR');
console.assert(v.isValidFirstName('Raimonda5') === false, 'ERROR');
console.assert(v.isValidFirstName('Rai monda') === false, 'ERROR');

console.log(v.isValidLastName('Pavardenis'), true);
console.log(v.isValidPhoneNumber('+37061234567'), true);
console.log(v.isValidEmail('demo@example.com'), true);
console.log(v.isValidMonthName('Sausis'), true);
console.log(v.isValidMonthName('January'), true);
console.log(v.isValidWeekdayName('Pirmadienis'), true);
console.log(v.isValidWeekdayName('Monday'), true);
console.log(v.isValidPersonID(39912311234), true);