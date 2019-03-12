function BMICalculator (mass,height){
    return BMI = (mass) / (height * height );
}

var john = {
    firstName: 'John',
    lastName: 'Marsters',
    height: 0,
    mass: 0,
    //Function expressions are not hoisted. https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function#Function_declaration_hoisting
    BMI: function(){
        return BMICalculator(this.mass, this.height);
    }
};
var mark = {
    firstName: 'Mark',
    lastName: 'Henry',
    height: 0,
    mass: 0,
    BMI: function(){
        return BMICalculator(this.mass, this.height);
    }
};
//console.log(john.BMI());
//console.log(mark.BMI());
john.height = prompt ("How tall is John?");
john.mass = prompt ("What is John's mass?");

mark.height = prompt ("How tall is Mark?");
mark.mass = prompt ("What is Mark's mass?");

if (john.BMI() > mark.BMI()){
    console.log (john.firstName + " has a larger BMI.  The BMI is "+ john.BMI());
}
else if (mark.BMI() > john.BMI()){
    console.log (mark.firstName + " has a larger BMI.  The BMI is "+ mark.BMI());
}
else{
    console.log("Both BMI's are the same");
}

