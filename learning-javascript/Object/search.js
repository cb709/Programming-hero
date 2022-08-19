const products = [
    {id:1, name: "Xiaomi Mi A3 Smart Phone", price:"16000"},
    {id:2, name: "Apple MacBook Air Laptop", price:"126000"},
    {id:3, name: "Xiaomi Redmi 11 Smart Phone", price:"12000"},
    {id:4, name: "Dell Xps 13 pro Laptop", price:"162000"},
    {id:5, name: "Samsung A52 Smart Phone", price:"26000"},
    {id:6, name: "Asus zenbook 14 Laptop", price:"16000"}
]


function matchedProducts (products, search){
    const matched = [];
    for( const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, "phone");
console.log(result)
