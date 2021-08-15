
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
const checkBtn = document.querySelector(".check");
const boxes = document.querySelector(".boxs");
const checkOutPay = document.querySelectorAll(".check2");
const inputAmountElement = document.querySelector(".inputAmount");
const inputAmountElement1 = document.querySelector(".totalAmount");
const payBtnElement = document.querySelector(".payBtn");
const replyElement = document.querySelector(".reply");


var totalCost = 0;
var totalCostSmall=0;
var totalCostMedium=0;
var totalCostLarge=0;
var countSmall=0;
var countMedium=0;
var countLarge=0;






function pizzaCalc(event){
    if(event.target.id ==="button1" || event.target.id ==="button7"){
        countSmall++;
        pizzaCalcValue();
    }else if (event.target.id ==="button2"){
        if(countSmall<=0){
            countSmall=0;
        }else{
            countSmall--;
        }
        pizzaCalcValue();
    }else if(event.target.id ==="button3" || event.target.id ==="button8"){
        countMedium++
        pizzaCalcValue();
    }else if (event.target.id ==="button4"){
        if(countMedium<=0){
            countMedium=0;
        }else{
            countMedium--;
        }
        pizzaCalcValue();
    }else if(event.target.id ==="button5" || event.target.id ==="button9"){
        countLarge++;
        pizzaCalcValue();
    }else if (event.target.id ==="button6"){
        if(countLarge<=0){
            countLarge=0;
        }else{
            countLarge--;
        }
        pizzaCalcValue();
    }
};

function pizzaCalcValue(){
    totalCostSmall=countSmall*20;
    var totalCostSmall1=totalCostSmall.toFixed(2);
    display1Element.innerHTML=totalCostSmall1;
    totalCostMedium=countMedium*90;
    var totalCostMedium1=totalCostMedium.toFixed(2);
    display2Element.innerHTML=totalCostMedium1;
    totalCostLarge=countLarge*140;
    var totalCostLarge1=totalCostLarge.toFixed(2);
    display3Element.innerHTML=totalCostLarge1;

    totalCost = totalCostSmall + totalCostMedium + totalCostLarge;
    var totalCost1=totalCost.toFixed(2);
    totalDisplayElement.innerHTML=totalCost1;



};

button1Element.addEventListener("click",pizzaCalc);
button2Element.addEventListener("click",pizzaCalc);
button7Element.addEventListener("click",pizzaCalc);
button3Element.addEventListener("click",pizzaCalc);
button4Element.addEventListener("click",pizzaCalc);
button8Element.addEventListener("click",pizzaCalc);
button5Element.addEventListener("click",pizzaCalc);
button6Element.addEventListener("click",pizzaCalc);
button9Element.addEventListener("click",pizzaCalc);




/*
function smallPizzaCalc(){
    if (button1Element.addEventListener("click",function(){
        totalCostSmall += 20;
        var totalCostSmall1=totalCostSmall.toFixed(2);
        //countSPos++;
        //alert(countSPos);
        display1Element.innerHTML=totalCostSmall1;})){
            //totalCost += 20;
            
    }else if ((button7Element.addEventListener("click",function(){
        totalCostSmall += 20.00;
        var totalCostSmall1=totalCostSmall.toFixed(2);
        //countSPos++;
        //alert(countSPos);
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


const boxes = document.querySelector(".boxs");
const checkOutPay = document.querySelectorAll(".check2");
const inputAmountElement = document.querySelector(".inputAmount");
const inputAmountElement1 = document.querySelector(".totalAmount");
const payBtnElement = document.querySelector(".payBtn");
const replyElement = document.querySelector(".reply");


checkBtn.addEventListener("click",function(){
    checkBtn.classList.toggle("hidden");
    boxes.classList.toggle("hidden");
    inputAmountElement1.classList.toggle("hidden");
});

var text = 0;

payBtnElement.addEventListener("click",function(){
   
    text1 = Number(inputAmountElement1.value);
    text = Number(inputAmountElement.value);
    var change = (text-text1);
    if(change<0){
        replyElement.innerHTML="You dont have enough money";
    }else{
        replyElement.innerHTML="Thank you enjoy your pizza, Your change is R" + change + ".00 ";
    }
});

var countSPos =0;
var countSNeg =0;


function smallPizzaCalc(){
    if (button1Element.addEventListener("click",function(){
        countSPos++;
        alert(countSPos);
        alert(countSNeg);
        
        
        })){            
    }else if ((button7Element.addEventListener("click",function(){
        countSPos++;
        alert(countSPos);
        alert(countSNeg);
        
        }))){
    }else if ((button2Element.addEventListener("click",function(){
        if (countSPos<=0){
            countSNeg=0;
            alert(countSNeg);
            alert(countSPos);
            
        }else if (countSPos===countSNeg){
            countSNeg=countSNeg;
            alert(countSNeg);
            alert(countSPos);
            
        }else if (countSPos>countSNeg){
            countSNeg++;
            alert(countSNeg);
            alert(countSPos);
           
        }  
    ;}))){}

    var diff = (countSPos - countSNeg);
    alert(diff);
    


    
    
};
smallPizzaCalc();

alert(countSNeg);
alert(countSPos);


var totalSmall =0;

function small(){
    smallPizzaCalc();
    totalSmall = ((countSPos*20)-(countSNeg*20));
    console.log(totalSmall); 


};

small();
*/







           
    












