/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/

var index;
var tipFactor;
var tipAmount;

var john = {
    bills : [124,48,268,180,42],
    calcTips : function (){
        return TipCalculationJohn(this.bills,this.tips);
    },
    tips : [],
    finalBill : [],
    average : 0
};

var mark = {
    bills : [77,375,110,45],
    calcTips : function (){
        return TipCalculationMark(this.bills,this.tips);
    },
    tips : [],
    finalBill : [],
    average : 0
};

function TipCalculationJohn (bills, tips){
    for (index = 0; index < john.bills.length; index++){
        
        if (john.bills[index] < 50){
            tipFactor = 0.2;
        }

        else if(john.bills[index]  >= 50 && john.bills[index]  < 200){
            tipFactor = 0.15;  
        }
        
        else {
            tipFactor = 0.1;
        }  
        tipAmount = john.bills[index] * tipFactor;
        
        john.tips.push(tipAmount);
        
        john.finalBill.push(john.bills[index] + john.tips[index]);
    
    }
}
function TipCalculationMark (bills,tips){
    for (index = 0; index < mark.bills.length; index++){
        
        if (mark.bills[index] < 100){
            tipFactor = 0.2;
        }

        else if(mark.bills[index]  >= 100 && mark.bills[index]  < 300){
            tipFactor = 0.1;  
        }
        
        else {
            tipFactor = 0.25;
        }
        
        tipAmount = mark.bills[index] * tipFactor;
        
        mark.tips.push(tipAmount);
        
        mark.finalBill.push(mark.bills[index] + mark.tips[index]);
        
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var indexAvr = 0; indexAvr < tips.length; indexAvr++) {
        sum = sum + tips[indexAvr];
    }
    return sum / tips.length;
}
john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log("John's family paid the following tips [" + john.tips + "] and paid the following full amounts [" + john.finalBill+"]");

console.log("Mark's family paid the following tips [" + mark.tips + "] and paid the following full amounts [" + mark.finalBill+"]");

john.average > mark.average ? console.log("John has paid a higher average at " +john.average+ " vs. Mark's average " +mark.average) : console.log("Mark has paid a higher average at " +mark.average+ " vs. John's average " +john.average);