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

// -----------------------------------------------------------------------

// let
// var
// const

// vat vs let ----------------------------------------------

// {
//     var studentName = "saman";
//     let age = 18;
// }

// console.log(studentName);
// console.log(age);

//  const --------------------------------------------------------------

// const customerList = [];

// customerList.push("saman");

// console.log(customerList);

// customerList = "saman"

// console.log(typeof customerList);

//  Array methods -----------------------------------------------------------------

// const customerList = [];


// customerList.push(1);
// customerList.push(2);
// customerList.push(3);

// let revAr = customerList.reverse();

// console.log(revAr);


const products = [
    { name: "bun", inStock: true },
    { name: "car", inStock: false },
    { name: "bat", inStock: true },
    { name: "van", inStock: false },
];

// final watch Line

let inStockItems = products.filter(product => product.inStock == false);

// let inStockItems = products.filter(
//     function (product) {
//         return productFilter(product)
//     }
// )

// function productFilter(product) {
//     return product.inStock == true;
// }

// console.log(inStockItems);

// Step 01 ------------------------------
// function getSum(num1,num2){
//     return num1+num2;
// }

// getSum(10,20);

// Step 02 ------------------------------------

// let getSum = function (num1, num2){
//     return num1+num2;
// }

// console.log(getSum(10,20));


// Step 03 --------------------------------------

// let getSum = (num1, num2) => {
//     return num1+num2;
// }

// console.log(getSum(10,20));


// Step 04 --------------------------------------

// let sample = txtValue =>{
//     return txtValue;
// }

// console.log(sample("Hi saman"));

// Step 05 -----------------------------------------

// let getSum = (num1, num2) => num1+num2;


// console.log(getSum(10,20));


// Step 06 --------------------------------------

let sample = txtValue => txtValue;


console.log(sample("Hi saman"));


const productsList = [
    { name: "bun", inStock: true },
    { name: "car", inStock: false },
    { name: "bat", inStock: true },
    { name: "van", inStock: false },
];



// for(product of productsList){
//     console.log(product);
// }


productsList.forEach(product => console.log(product));