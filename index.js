
// Our List of Bars
var Things = [
    'Egg',
    'Baby',
    'Computer',
    'Website',
    'Home',
    'Fameliy'
];

// Our List of Friends
var friends = [
    'June',
    'Januwarey',
    'Augest',
    'September',
    'December',
    'NOW'
];

var randomNumber = Math.floor(Math.random()*Things.length);

var Thingstodo = Things[randomNumber];
var friendname = friends[randomNumber];

document.write("How about you go and make a <strong>" + Thingstodo + "</strong> in <strong>" + friendname + "</strong>?");