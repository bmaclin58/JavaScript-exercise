var tips =[];
var finalBill =[];
var bills = [124,48,268,200];
var index = 0;
var tipFactor;

function pushToFinalBill(index){
    finalBill.push(tips[index]+bills[index]);
    return finalBill;
}

function pushToTips(index, tipFactor){
    tips.push(bills[index]   * (tipFactor));
    return tips;
}

function TipCalculation (bills, index,tips){
    for (index; index < bills.length; index++){
        
        if (bills[index] < 50){
            tipFactor = 0.2;
        }

        else if(bills[index]  >= 50 && bills[index]  < 200){
            tipFactor = 0.15;  
        }
        
        else {
            tipFactor = 0.1;
        }  
        pushToTips(index,tipFactor);   
        pushToFinalBill(index);
    }
    console.log(tips);
    console.log(finalBill);
}
    
TipCalculation(bills, index, tips);

