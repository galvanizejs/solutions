/*
Answers Disclaimer:
As we get further into these projects, there will be so
many different ways to write the solutions. These are 
one way and they do use a lot of functions, but this is
not the only way to do it. Let us know if you have any 
questions and we’ll help you through/explain things.
*/



$(document).ready(function() {

  var groceries = [
  {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
  {name: "Onions", status: "needed", price: "1.85", quantity: 2},
  {name: "Cilantro", status: "needed", price: ".95", quantity: 1},
  {name: "Limes", status: "complete", price: ".33", quantity: 3},
  {name: "Jalapeno", status: "complete", price: ".15", quantity: 2}
  ];


// Before we start anything, string up the css file, this javascript file, and
// the jQuery CDN to grocery.html file.

//1. Display the existing list of grocery items (from the grocery array)
// in an unordered list in the "list" id that already exists in grocery.html.
// Display each item's name, price, and quantity.
// Ex: Tomatoes (5) @ $3.99
for(i=0; i<groceries.length; i++){
  var item = groceries[i]
  $("#list").append($("<li>" + item.name + " (" + item.quantity + ") @ $" + item.price + "</li>"))
}

function displayTotal(){
  var total = 0;
  for(i=0; i<groceries.length; i++){
    total += (groceries[i].quantity * groceries[i].price)
  }
  $(".totalCost h4 span").text("$" + total.toFixed(2))
}

displayTotal();

//2. Use the inputs and add button to add grocery items to the beginning of the list.
// Default status should be "needed". The item should appear above the existing grocery items.

$(".btn-success").click(function(){
  var nameInput = $("#addItem").val();
  var priceInput = $("#addPrice").val();
  var quantityInput = $("#addQuantity").val();
  if (nameInput == '' || priceInput == '' || quantityInput == ''){
    alert("Please fill in all fields")
  }
  else {
    addItem(nameInput, priceInput, quantityInput);
  }
});

function addItem(name, price, quantity){
  groceries.unshift({name: name, status: "needed", price: price, quantity: quantity});
  updateList(groceries[0]);
  displayTotal();
};

function updateList(item){
  if(item === ""){
    $("#list li:first-child").remove();
  }
  else{
    $("<li>" + item.name + " (" + item.quantity + ") @ " + item.price + "</li>")
    .insertBefore('#list li:first-child')
  }
}

$(".btn-warning").click(function(){
    removeItem();
});

function removeItem(){
  groceries.shift();
  updateList("");
  displayTotal();
};


$("ul#list").sortable();
//3. Make sure that the grocery list displayed updates when you add an item to the list.

//3. Display the total cost of the groceries. Make sure this updates as you add items to the list.

//4. Put a check in to make sure users aren't adding items without a name, price, or quantity.

});
