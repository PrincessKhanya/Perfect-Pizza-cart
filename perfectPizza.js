const button1Element = document.querySelector(".button1");
const button2Element = document.querySelector(".button2");
const button3Element = document.querySelector(".button3");
const button4Element = document.querySelector(".button4");
const button5Element = document.querySelector(".button5");
const button6Element = document.querySelector(".button6");
const display1Element = document.querySelector(".display1");
const display2Element = document.querySelector(".display2");
const display3Element = document.querySelector(".display3");
const totalDisplayElement = document.querySelector(".totalDisplay");
const checkElement = document.querySelector(".check");

var totalCostSmall = 0;
var totalCostMedium = 0;
var totalCostLarge = 0;
var totalCost = 0;

button1Element.addEventListener("click",function(){
    totalCostSmall += 20;
    display1Element.innerHTML=totalCostSmall;  
});

button2Element.addEventListener("click",function(){
    totalCostSmall -= 20;
    display1Element.innerHTML=totalCostSmall;  
});

button3Element.addEventListener("click",function(){
    totalCostMedium += 90;
    display2Element.innerHTML=totalCostMedium;
});

button4Element.addEventListener("click",function(){
    totalCostMedium -= 90;
    display2Element.innerHTML=totalCostMedium;
});

button5Element.addEventListener("click",function(){
    totalCostLarge += 140;
    display3Element.innerHTML=totalCostLarge;
});

button6Element.addEventListener("click",function(){
    totalCostLarge -= 140;
    display3Element.innerHTML=totalCostLarge;
});

totalCost = totalCostSmall+totalCostMedium+totalCostLarge;
totalDisplayElement.innerHTML=totalCost;

