const phones = [
    {name: 'Xiaomi', model: 'A3', price: 18000},
    {name: 'Samsung', model: 'B3', price: 15000},
    {name: 'Apple', model: 'Iphone 11 mini', price: 78000},
    {name: 'Realme', model: 'C7', price: 19000},
]


function cheapestPhone(phones){
    let cheapestOne = phones[0].price;
    let n = 0; 
    for(let i = 1; i < phones.length; i++){
        let price = phones[i].price
        if(cheapestOne > price){
            cheapestOne = price;
            n=i;
        }
    }
    // return n;
    console.log('Your Desired Phone: ' + phones[n].name + ' ' + phones[n].model + ' ' + 'Price: ' + phones[n].price + 'TK');
}

cheapestPhone(phones);
