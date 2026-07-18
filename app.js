const customerList = [];

customerList.push(1);
customerList.push(2);
customerList.push(3);

let revar = customerList.reverse();

console.log(revar);


const products = [
    {name:"bun", inStock:true},
    {name:"car", inStock:false},
    {name:"bat", inStock:true},
    {name:"van", inStock:false},
];

let instockItems = products.filter(
    function (product){
        return productFilter(product)
    }
)

function productFilter(product){
    return product.inStock == true;
}

console.log(instockItems);