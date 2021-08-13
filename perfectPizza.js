const button1Element = document.querySelector(".button1");
const button2Element = document.querySelector(".button2");
const button3Element = document.querySelector(".button3");
const button4Element = document.querySelector(".button4");
const button5Element = document.querySelector(".button5");
const button6Element = document.querySelector(".button6");
const button7Element = document.querySelector(".button7");
const button8Element = document.querySelector(".button8");
const button9Element = document.querySelector(".button9");
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
    totalCost += 20
    display1Element.innerHTML=totalCostSmall; 
    totalDisplayElement.innerHTML=totalCost; 
});

button7Element.addEventListener("click",function(){
    totalCostSmall += 20;
    totalCost += 20
    display1Element.innerHTML=totalCostSmall; 
    totalDisplayElement.innerHTML=totalCost; 
});

button2Element.addEventListener("click",function(){
    totalCostSmall -= 20;
    totalCost -= 20;
    if (totalCost<0){
        totalCost=0;
    }else{
        totalCost=totalCost;
    }

    if (totalCostSmall<0){
        totalCostSmall=0;
    }else{
        totalCostSmall=totalCostSmall;
    }
    display1Element.innerHTML=totalCostSmall;
    totalDisplayElement.innerHTML=totalCost;  
});

button3Element.addEventListener("click",function(){
    totalCostMedium += 90;
    totalCost += 90;
    display2Element.innerHTML=totalCostMedium;
    totalDisplayElement.innerHTML=totalCost;
});

button8Element.addEventListener("click",function(){
    totalCostMedium += 90;
    totalCost += 90;
    display2Element.innerHTML=totalCostMedium;
    totalDisplayElement.innerHTML=totalCost;
});

button4Element.addEventListener("click",function(){
    totalCostMedium -= 90;
    totalCost -= 90;
    if (totalCost<0){
        totalCost=0;
    }else{
        totalCost=totalCost;
    }

    if (totalCostMedium<0){
        totalCostMedium=0;
    }else{
        totalCostMedium=totalCostMedium;
    }
    display2Element.innerHTML=totalCostMedium;
    totalDisplayElement.innerHTML=totalCost;
});

button5Element.addEventListener("click",function(){
    totalCostLarge += 140;
    totalCost += 140
    display3Element.innerHTML=totalCostLarge;
    totalDisplayElement.innerHTML=totalCost;
});

button9Element.addEventListener("click",function(){
    totalCostLarge += 140;
    totalCost += 140
    display3Element.innerHTML=totalCostLarge;
    totalDisplayElement.innerHTML=totalCost;
});

button6Element.addEventListener("click",function(){
    totalCostLarge -= 140;
    totalCost -= 140;
    if (totalCost<0){
        totalCost=0;
    }else{
        totalCost=totalCost;
    }

    if (totalCostLarge<0){
        totalCostLarge=0;
    }else{
        totalCostLarge=totalCostLarge;
    }
    display3Element.innerHTML=totalCostLarge;
    totalDisplayElement.innerHTML=totalCost;
});










