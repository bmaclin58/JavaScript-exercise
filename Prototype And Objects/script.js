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
var years = [2000, 2005, 1999, 2019 ];

//calculate age is a callback function.  It's not called here, it's called within another function;
//ages calls the ArrayCalc method.  It assigns the array "years" in the spot of "array" and assigns the "CalculateAge" function as "Fnction".
var ages = ArrayCalc(years, CalculateAge);


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

console.log(ages);

















