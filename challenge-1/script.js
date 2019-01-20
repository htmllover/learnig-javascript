var johnMass = 250;
var johnHeight = 10;
var markMass = 220;
var markHeight = 12;

var johnBmi = johnMass / ( johnHeight * johnHeight);
var markBmi = markMass / ( markHeight * markHeight); 

var bmiResult = johnBmi <= markBmi;

document.getElementById('demo').innerHTML = ("Is Mark's  higher than John's?" + ' ' + bmiResult); 