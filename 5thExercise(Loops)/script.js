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
    calcAvr: function (){
        return AverageOfArrayJohn(this.tips);
    },
    average : 0
};

var mark = {
    bills : [77,375,110,45],
    calcTips : function (){
        return TipCalculationMark(this.bills,this.tips);
    },
    tips : [],
    finalBill : [],
    calcAvr: function (){
        return AverageOfArrayMark(this.tips);
    },
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
function AverageOfArrayJohn(tips){
    for(indexAvr = 0; indexAvr < john.tips.length;indexAvr++){
        john.average += john.tips[indexAvr];
    }
    return john.average = john.average / john.tips.length;
}

function AverageOfArrayMark(tips){
    for(indexAvr = 0; indexAvr < mark.tips.length;indexAvr++){
        mark.average += mark.tips[indexAvr];
    }
    return mark.average = mark.average / mark.tips.length;
}

john.calcTips();
mark.calcTips();
john.calcAvr();
mark.calcAvr();

console.log("John's family paid the following tips [" + john.tips + "] and paid the following full amounts [" + john.finalBill+"]");

console.log("Mark's family paid the following tips [" + mark.tips + "] and paid the following full amounts [" + mark.finalBill+"]");

john.average > mark.average ? console.log("John has paid a higher average at " +john.average+ " vs. Mark's average " +mark.average) : console.log("Mark has paid a higher average at " +mark.average+ " vs. John's average " +john.average);