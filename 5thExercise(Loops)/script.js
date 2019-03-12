var index = 0;
var tipFactor;

var john = {
    bills : [124,48,268,180,42],
    calcTips : function (){
        return TipCalculationJohn(this.bills,this.tips);
    },
    tips : [],
    finalBill : []
};

/*
var mark = {
    bills : [77,375,110,45],
    calcTips : function (){
        return TipCalculationMark(this.bills);
    },
    tips : [],
    finalBill : []
};*/

function pushToTips(index, tipFactor,tips){
    this.tips.push(john.bills[index]   * (tipFactor));
    console.log(tipFactor);
    return this.tips;
}
/*
function pushToFinalBill(index){
    this.bills.push (this.tips[index]+ this.bills[index]);
    return this.finalBill;
}*/

function TipCalculationJohn (bills, tips){
    for (index; index < john.bills.length; index++){
        
        if (john.bills[index] < 50){
            tipFactor = 0.2;
        }

        else if(john.bills[index]  >= 50 && john.bills[index]  < 200){
            tipFactor = 0.15;  
        }
        
        else {
            tipFactor = 0.1;
        }  
        pushToTips(index,tipFactor,tips);   
       // pushToFinalBill(index);
    }
}
/*
function TipCalculationMark (bills){
    for (index; index < mark.bills.length; index++){
        
        if (mark.bills[index] < 100){
            tipFactor = 0.2;
        }

        else if(mark.bills[index]  >= 100 && mark.bills[index]  < 300){
            tipFactor = 0.1;  
        }
        
        else {
            tipFactor = 0.25;
        }  
       pushToTips(index,tipFactor);   
       // pushToFinalBill(index);
    }
}*/

john.calcTips();
//mark.calcTips();
