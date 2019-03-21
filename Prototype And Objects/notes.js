//Function Constructor
/*var john = {
    name: "John",
    yearOfBirth: 1990,
    job:"teacher"
};

var PERSON = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

PERSON.prototype.CalculateAge = function() {
    console.log(2019-this.yearOfBirth);
};

PERSON.prototype.lastName = "Maclin";

var brian = new PERSON("Brian", 1990, "Developer");
brian.CalculateAge();
console.log(brian.lastName);

//Object.create
var personProto = {
    calculateAge: function(){
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
    name: {value: "Jane"},
    yearOfBirth: {value: 1969},
    job: {value: "Designer"}
});

//Primitives vs Objects
//Primitives
var a = 23;
var b = a;
a = 46;


//Objects 
var OBJ1 = {
    name: "John",
    age: 26
};

//no new object was created, just a reference that point to OBJ1.  They are the same.
var OBJ2 = OBJ1;
OBJ1.age =30;

//Functions

var age = 28;
var OBJ = {
    name: "Brian",
    city: "Virginia Beach"
};

function change (a,b){
        //primitave doesn't change,  but Object does
    a = 30;
    b.city = "Denver";
}
change (age, OBJ);

console.log(age);
console.log(OBJ.city);

*/
//Passing functions as arguments
var years = [2000, 2005, 1999, 2019, 1994 ];

//calculate age is a callback function.  It's not called here, it's called within another function;
//ages calls the ArrayCalc method.  It assigns the array "years" in the spot of "array" and assigns the "CalculateAge" function as "Fnction".
var ages = ArrayCalc(years, CalculateAge);
var fullAges = ArrayCalc(ages, IsFullAge);
var rate = ArrayCalc(ages, MaxHeartRate);

//the arrayCalc function says pass an assigned array and an assigned function 
function ArrayCalc(array, Fnction){
    //blank storage array
    var arrayStorage = [];
    //for each element in the assigned array, push the data that is returned in the Fnction function.  The Fnction function is passed the value of array at index x.
    for (var x = 0; x < array.length; x++){
        arrayStorage.push(Fnction(array[x]));
    }
    //spits out full array post processing
    return arrayStorage;
}

//this function is the function that is passed in the first call of the function (ArrayCalc).  ArrayCalc assigned CalculateAge as Fnction.  It is passed array[x] as its "elment"
function CalculateAge(elment){
    return 2019 - elment;
}

function IsFullAge(elment){
    return elment >=18;
}

function MaxHeartRate(elment){

    if (elment >= 18 && elment <= 81){
    return Math.round(206.9 - (.67 * elment));
    }
    else{
        return -1;
    }
}

console.log(ages);
console.log(fullAges);
console.log(rate);
/*
function InterviewQuestion (job){
    if (job === "designer"){
        return function(name){
            console.log(name + ", can you please explain what UX design is?");
        }
    }
    else if(job === "teacher"){
        return function(name){
            console.log(name + ", what subject do you teach?");
        }
    }
    else{
        return function(name){
            console.long("Hello, " + name + " what do you do?");
        } 
    }
}

var teacherQuestion = InterviewQuestion("teacher");
var designerQuestion =InterviewQuestion("designer")
teacherQuestion("John");
designerQuestion("Brian");
designerQuestion("Jon");
designerQuestion("Justin");


InterviewQuestion("teacher")("Mark");

//IIFE (Immediately Invoked Function Expression)
function Game(){
    var score = Math.randon() *10;
}
Game();

( function () {
    var score = Math.randon() *10;
    console.log(score);
})();

( function (luck) {
    var score = Math.randon() *10 ;
    console.log(score- luck);
//parameter passed for Luck
})(5);
*/

//closures 
/*function Retirement (retirementAge){
    var statement = " years to retirement";
    return function (yearOfBirth,country){
        var age = 2019 - yearOfBirth;
        console.log ("In the " +country +" you have "+(retirementAge - age)+ statement );
    }
}




//Retirement(66)(1990, "US");
var retirementUS = Retirement(66);
var retirementGermany = Retirement(65);
var retirementIceland = Retirement(67);

retirementUS(1990, "US");
retirementGermany(1990, "Germany");
retirementIceland(1990, "Iceland");

/************** 
function InterviewQuestion (job){
    if (job === "designer"){
        return function(name){
            console.log(name + ", can you please explain what UX design is?");
        }
    }
    else if(job === "teacher"){
        return function(name){
            console.log(name + ", what subject do you teach?");
        }
    }
    else{
        return function(name){
            console.long("Hello, " + name + " what do you do?");
        } 
    }
}

var teacherQuestion = InterviewQuestion("teacher");
var designerQuestion =InterviewQuestion("designer")
teacherQuestion("John");
designerQuestion("Brian");
designerQuestion("Jon");
designerQuestion("Justin");


InterviewQuestion("teacher")("Mark");


function InterviewQuestion (job){
    return function (name){
        if (job === "designer"){
                console.log(name + ", can you please explain what UX design is?");
        }
        else if(job === "teacher"){
                console.log(name + ", what subject do you teach?");
        }
        else{
                console.log("Hello, " + name + " what do you do?");
        } 
        
    }
}

InterviewQuestion("designer") ("John");
InterviewQuestion("teacher")("Beth");

//Bind Call and apply
var john = {
    name: "John",
    age: 26,
    job: "Teacher",
    presention: function (style, timeOfDay){
        if (style === "formal"){
            console.log("Good "+timeOfDay + ", ladies and gentlemen. I'm " + this.name + ". I'm a " + this.job + " and I'm " + this.age + " years old.");
        }
        else if (style === "friendly"){
            console.log("Sup! I'm " + this.name + ", I'm a " + this.job + ", and I am "+ this.age + " years old. Have a good "+ timeOfDay);
        }
    }
};
//john.presention("formal" , "morning");

var emily = { 
    name: "Emily",
    age: 36,
    job: "Designer"
};

john.presention.call(emily, "friendly", "Afternoon");
//no expecting array so this won't work
//john.presention.apply(emily, ["friendly", afternoon]);

//stores a function.allows to preset parameters
var johnFriendly = john.presention.bind(john, "friendly");
johnFriendly("Night");

var emilyFormal = john.presention.bind (emily, "formal");
emilyFormal("afternoon");


//Passing functions as arguments
var years = [2000, 2005, 1999, 2019, 1994 ];

//calculate age is a callback function.  It's not called here, it's called within another function;
//ages calls the ArrayCalc method.  It assigns the array "years" in the spot of "array" and assigns the "CalculateAge" function as "Fnction".
var ages = ArrayCalc(years, CalculateAge);
var fullAges = ArrayCalc(ages, IsFullAge);
var rate = ArrayCalc(ages, MaxHeartRate);
var fullJapan = ArrayCalc(ages, IsFullAge.bind(this,20));

//the arrayCalc function says pass an assigned array and an assigned function 
function ArrayCalc(array, Fnction){
    //blank storage array
    var arrayStorage = [];
    //for each element in the assigned array, push the data that is returned in the Fnction function.  The Fnction function is passed the value of array at index x.
    for (var x = 0; x < array.length; x++){
        arrayStorage.push(Fnction(array[x]));
    }
    //spits out full array post processing
    return arrayStorage;
}

//this function is the function that is passed in the first call of the function (ArrayCalc).  ArrayCalc assigned CalculateAge as Fnction.  It is passed array[x] as its "elment"
function CalculateAge(elment){
    return 2019 - elment;
}

function IsFullAge(limit, elment){
    return elment >=limit;
}

function MaxHeartRate(elment){

    if (elment >= 18 && elment <= 81){
    return Math.round(206.9 - (.67 * elment));
    }
    else{
        return -1;
    }
}

console.log(fullJapan);
console.log(ages);
*/