var products=[{name:"Nike",price:34},{name:"Jordan",price:90},{name:"Louis",price:76}];
var sortProducts=function(products){
    products.sort(function(a,b){
        return arguments.price-b.price;
    });
};
sortProducts(products);
console.log(products);
