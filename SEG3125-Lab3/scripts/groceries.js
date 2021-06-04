	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactose: false,
		nuts: false,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		lactose: true,
		nuts: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		lactose: false,
		nuts: false,
		organic: false,
		price: 10.00
	},
	{
		name: "feta cheese",
		lactose: true,
		nuts: false,
		organic: true,
		price: 5.99
	},
	{
		name: "chicken",
		lactose: false,
		nuts: false,
		organic: true,
		price: 7.99
	},
	{
		name: "almonds",
		lactose: false,
		nuts: true,
		organic: true,
		price: 4.99
	},
	{
		name: "pistachios",
		lactose: false,
		nuts: true,
		organic: false,
		price: 5.49
	},
	{
		name: "apple",
		lactose: false,
		nuts: false,
		organic: true,
		price: 0.99
	},
	{
		name: "milk",
		lactose: true,
		nuts: false,
		organic: false,
		price: 3.99
	},
	{
		name: "grapes",
		lactose: false,
		nuts: false,
		organic: false,
		price: 2.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let productList = [];
	var onlyOrganic = document.getElementById("OrganicChkBox").checked;
	if(onlyOrganic){
		// User wants only organic foods
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "LactoseNutsFree") && (prods[i].nuts == false) && (prods[i].lactose == false) && (prods[i].organic == true)){
				productList.push(prods[i]);
			}
			else if ((restriction == "NutsFree") && (prods[i].nuts == false) && (prods[i].organic == true)){
				productList.push(prods[i]);
			}
			else if ((restriction == "LactoseFree") && (prods[i].lactose == false) && (prods[i].organic == true)){
				productList.push(prods[i]);
			}
			else if ((restriction == "None") && (prods[i].organic == true)){
				productList.push(prods[i]);
			}
		}
	}
	else{
		// User does not care if foods are organic or not
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "LactoseNutsFree") && (prods[i].nuts == false) && (prods[i].lactose == false)){
				productList.push(prods[i]);
			}
			else if ((restriction == "NutsFree") && (prods[i].nuts == false)){
				productList.push(prods[i]);
			}
			else if ((restriction == "LactoseFree") && (prods[i].lactose == false)){
				productList.push(prods[i]);
			}
			else if ((restriction == "None")){
				productList.push(prods[i]);
			}
		}
	}

	// Sort based on price of the items in the array
	productList.sort(function(a, b){return a.price - b.price});
	return productList;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	totalPrice = totalPrice.toFixed(2); 
	return totalPrice;
}
