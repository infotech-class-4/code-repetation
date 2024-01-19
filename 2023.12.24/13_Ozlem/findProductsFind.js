

var products=[
    {
        productName: "Acer Asprie 4",
        categorie:"Technologie",
        price:"1000$" 
},
{
        productName: "Lenova V15",
        categorie:"Technologie",
        price:"1000$" 
},
{
        productName: "Macbook M1",
        categorie:"Technologie",
        price:"1000$" 
},
{
        productName: "Acer Asprie 5",
        categorie:"Technologie",
        price:"1000$" 
},
{
        productName: "Acer Asprie 2",
        categorie:"Technologie",
        price:"1000$" 
},
{
        productName: "Asus Viva",
        categorie:"Technologie",
        price:"1000$" 
},
{
        productName: "Microsoft Surface 4",
        categorie:"Technologie",
        price:"1000$" 
},
{
        productName: "Microsoft Surface 5",
        categorie:"Technologie",
        price:"1000$" 
},
{
        productName: "Microsoft Surface 3",
        categorie:"Technologie",
        price:"1000$" 
},



]

let userProductName = prompt("Bir urun ismi giriniz")

let filteredProducts=[]

function getFilteredProducts(products){
    products.forEach((product)=>{
        // console.log(products);
        if(product.productName.toUpperCase().includes(userProductName.toLocaleUpperCase(),0))
        {
            filteredProducts.push(product)


        }
    }
);
}
getFilteredProducts(products);

//console.log(filteredProducts); // bu sekilde bir dizi icinde yazdirir.

//tek tek yazdirsin diye bir fonksiyon daha yaziyoruz

function writefilteredProducts(products){
    products.forEach((product)=>{
        console.log("****************************");
        console.log(`${product.productName} -- ${product.categorie} -- ${product.price}`);
    })

}
writefilteredProducts(filteredProducts)

// ciktisi su sekilde;
// ****************************
// findProductsFind.js:79 Acer Asprie 4 -- Technologie -- 1000$
// findProductsFind.js:78 ****************************
// findProductsFind.js:79 Acer Asprie 5 -- Technologie -- 1000$
// findProductsFind.js:78 ****************************
// findProductsFind.js:79 Acer Asprie 2 -- Technologie -- 1000$