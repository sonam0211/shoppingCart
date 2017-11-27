function Cart(){
	this.products =[];
}

Cart.prototype.displayCart = function(){
	if (localStorage.getItem("products") !== null) {
		this.products = JSON.parse(localStorage.products);
		// console.log("sonam");
		// console.log(this.products);
	}
	else{
		this.products =[]; 
	}
	var showItem = document.getElementById("cart")
	// showItem.innerHtml = "";

	for(var i =0; i<this.products.length;i++){
		var item = this.products[i];
		var product = document.createElement("li"); 
		
		console.log(product.innerHtml);
		product.className="title";
		showItem.appendChild(product);
		product.innerHtml = item;
	}
}

Cart.prototype.addToCart = function (productName){
	this.products.push(productName);
	localStorage.setItem("products",JSON.stringify(this.products));
	console.log(this.products);
	this.displayCart();
};

var cartObj = new Cart();



var buttonClick = [];
buttonClick = document.getElementsByClassName("item");
console.log(buttonClick);
for(var i = 0;i<=buttonClick.length;i++)
{
buttonClick[i].addEventListener("click",function(e){
	console.log(e.target.id);
	cartObj.addToCart(e.target.id);


});
}


	


// function addToCart(){
// 	console.log("item added");
// }