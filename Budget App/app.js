
var budgetController = (function (){


})();

var uiController = (function(){

    return {
        getInput: function(){

            return {
                type: document.querySelector(".add__type").value, //either inc or exp
                description: document.querySelector(".add__description").value,
                value: document.querySelector(".add__value").value
            };
        }
    };

})();

//Global App controller
var controller = (function(budgetCtrl, UICtrl){
    var ctrlAddItem = function (){

        //Get the field input data
        var input = UICtrl.getInput();
        console.log(input);
        
        //add item to budget controller

        //add the item to the UI

        //Calculate the budget

        //Display the budget
    

    };
    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event){
        
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });

})(budgetController, uiController);




