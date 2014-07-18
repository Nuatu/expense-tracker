var Category = {
};
var Purchase = {
description: "",
amount: 0
};


$(document).ready(function() {
var currentCategory="";

$("#add-btn").click(function(event) {
  event.preventDefault();
  var newName = $("input#new-category").val().toUpperCase();
  var newCategory = Object.create(Category);
  newCategory.name = newName;
  newCategory.purchases = [];
  console.log(newCategory)
  $("div#categories").append("<p>" + newName + "</p>");
  $("input#new-category").val("");
  $("#purchases-table .empty").empty();
  $("#purchases h2").text(newName);
  $("#add-name").text(newName);
  currentCategory = newCategory;


  $("#categories p").last().click(function(){
    $("#purchases h2").text(newName);
    $("#add-name").text(newName);
    $("#purchases-table .empty").empty();
    // $("#add-purchase").text(newName);
    currentCategory = newCategory;

    //empty all expenses
    //foreach on currentCategpory.expenses
    currentCategory.purchases.forEach(function(purchase){

        $("#purchases-table tbody").append("<tr class='empty'><td>" + purchase.description + "</td><td>" + purchase.amount + "</td></tr>")
    });
  });
});


$("form#add-purchase").submit(function(event){
  event.preventDefault();
  if(currentCategory === ""){
    alert("You have not entered a Category");

  }else{

  var newDescription = $("input#input-description").val();
  var newAmount = parseFloat($("input#input-amount").val());
  var newPurchase = Object.create(Purchase);
  newPurchase.description = newDescription;
  newPurchase.amount = newAmount;
  console.log(newPurchase);
  currentCategory.purchases.push(newPurchase);

  $("#purchases-table tbody").append("<tr class='empty'><td>" + newDescription + "</td><td>" + newAmount + "</td></tr>")

  $("input#input-description").val("");
  $("input#input-amount").val("");
};
});

});
