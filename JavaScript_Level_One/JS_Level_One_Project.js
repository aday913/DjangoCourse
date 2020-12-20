var first = prompt('What is your first name?');
var last = prompt('What is your last name?');
var age = prompt('What is your age?');
var height = prompt('What is your height in cm?');
var pet = prompt('What is the name of your pet?');

var spyResponse = 'SPY: THIS PAGE IS SECURE';
var nonSpyResponse = 'Welcome to the page!'

if (first[0] != last[0]) {
    alert(nonSpyResponse);
}else if (age > 30 | age < 20) {
    alert(nonSpyResponse);
}else if (height < 170) {
    alert(nonSpyResponse);
}else if (pet[pet.length - 1] != 'y') {
    alert(nonSpyResponse);
}else {
    alert(spyResponse)
}
