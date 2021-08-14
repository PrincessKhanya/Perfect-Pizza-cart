
const button1Element = document.querySelector(".button1");
const button2Element = document.querySelector(".button2");
const button7Element = document.querySelector(".button7");
const display1Element = document.querySelector(".display1");
const button3Element = document.querySelector(".button3");
const button4Element = document.querySelector(".button4");
const button8Element = document.querySelector(".button8");
const display2Element = document.querySelector(".display2");
const button5Element = document.querySelector(".button5");
const button6Element = document.querySelector(".button6");
const button9Element = document.querySelector(".button9");
const display3Element = document.querySelector(".display3");
const totalDisplayElement = document.querySelector(".totalDisplay");

var totalCost = 0;
var totalCostSmall=0;
var totalCostMedium=0;
var totalCostLarge=0;

function smallPizzaCalc(){
    if (button1Element.addEventListener("click",function(){
        totalCostSmall += 20;
        var totalCostSmall1=totalCostSmall.toFixed(2);
        display1Element.innerHTML=totalCostSmall1;})){
            totalCost += 20;
    }else if ((button7Element.addEventListener("click",function(){
        totalCostSmall += 20.00;
        var totalCostSmall1=totalCostSmall.toFixed(2);
        display1Element.innerHTML=totalCostSmall1;}))){
    }else if ((button2Element.addEventListener("click",function(){
        if (totalCostSmall >= 20){
            totalCostSmall -= 20.00;
            var totalCostSmall1=totalCostSmall.toFixed(2);
            display1Element.innerHTML=totalCostSmall1; 
        }else{
            totalCostSmall = 0.00;
            var totalCostSmall1=totalCostSmall.toFixed(2);
            display1Element.innerHTML=totalCostSmall1;    
        }
    ;}))){}
    
};
smallPizzaCalc();

function mediumPizzaCalc(){
    if (button3Element.addEventListener("click",function(){
        totalCostMedium += 90;
        var totalCostMedium1=totalCostMedium.toFixed(2);
        display2Element.innerHTML=totalCostMedium1;})){   
    }else if ((button8Element.addEventListener("click",function(){
        totalCostMedium += 90.00;
        var totalCostMedium1=totalCostMedium.toFixed(2);
        display2Element.innerHTML=totalCostMedium1;}))){
    }else if ((button4Element.addEventListener("click",function(){
        if (totalCostMedium >= 90){
            totalCostMedium -= 90.00;
            var totalCostMedium1=totalCostMedium.toFixed(2);
            display2Element.innerHTML=totalCostMedium1; 
        }else{
            totalCostMedium = 0.00;
            var totalCostMedium1=totalCostMedium.toFixed(2);
            display2Element.innerHTML=totalCostMedium1;    
        }
    ;}))){}
    
};
mediumPizzaCalc();

function largePizzaCalc(){
    if (button5Element.addEventListener("click",function(){
        totalCostLarge += 140.00;
        var totalCostLarge1=totalCostLarge.toFixed(2);
        display3Element.innerHTML=totalCostLarge1;})){   
    }else if ((button9Element.addEventListener("click",function(){
        totalCostLarge += 140.00;
        var totalCostLarge1=totalCostLarge.toFixed(2);
        display3Element.innerHTML=totalCostLarge1;}))){
    }else if ((button6Element.addEventListener("click",function(){
        if (totalCostLarge >= 140){
            totalCostLarge -= 140.00;
            var totalCostLarge1=totalCostLarge.toFixed(2);
            display3Element.innerHTML=totalCostLarge1; 
        }else{
            totalCostLarge = 0.00;
            var totalCostLarge1=totalCostLarge.toFixed(2);
            display3Element.innerHTML=totalCostLarge1;    
        }
    ;}))){}
    
};
largePizzaCalc();


function totalCostPizza(){

        if (button1Element.addEventListener("click",function(){
            totalCost += 20;
            var total1=totalCost.toFixed(2);
            totalDisplayElement.innerHTML=total1;})){
        }else if ((button7Element.addEventListener("click",function(){
            totalCost += 20;
            var total1=totalCost.toFixed(2);
            totalDisplayElement.innerHTML=total1;}))){
        }else if ((button2Element.addEventListener("click",function(){
            if (totalCost<=0){
                totalCost=0;
            }else{
                totalCost -= 20;
                var total1=totalCost.toFixed(2);
                totalDisplayElement.innerHTML=total1;
            }
            }))){
        }else if (button3Element.addEventListener("click",function(){
            totalCost += 90;
            var total1=totalCost.toFixed(2);
            totalDisplayElement.innerHTML=total1;})){
        }else if ((button8Element.addEventListener("click",function(){
            totalCost += 90;
            var total1=totalCost.toFixed(2);
            totalDisplayElement.innerHTML=total1;}))){
        }else if ((button4Element.addEventListener("click",function(){
            if (totalCost<=0){
                totalCost=0;
            }else{
                totalCost -= 90;
                var total1=totalCost.toFixed(2);
                totalDisplayElement.innerHTML=total1;
            }
            }))){
        }else if (button5Element.addEventListener("click",function(){
            totalCost += 140;
            var total1=totalCost.toFixed(2);
            totalDisplayElement.innerHTML=total1;})){
        }else if ((button9Element.addEventListener("click",function(){
            totalCost += 140;
            var total1=totalCost.toFixed(2);
            totalDisplayElement.innerHTML=total1;}))){
        }else if ((button6Element.addEventListener("click",function(){
            if (totalCost<=0){
                totalCost=0;
            }else{
                totalCost -= 140;
                var total1=totalCost.toFixed(2);
                totalDisplayElement.innerHTML=total1;
            }
            }))){
        }
    
};

totalCostPizza();


           
    












