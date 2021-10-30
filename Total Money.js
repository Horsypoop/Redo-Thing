var money2 = localStorage.getItem("total_income");
var money1 = localStorage.getItem("alltogether");

var total_j = money2 - money1;

localStorage.setItem("Total Money", total_j);



document.getElementById("kio").innerHTML = total_j +"Dollars!";