function avg(data) {
    // your code here
    let sum = 0;

    for (let i = 0; i < data.size; i++) {
        sum = sum + data.products[i].price;   
        // console.log("Sums of "+ i + " items = " + sum);
        console.log(`Sums of ${i} items = ${sum}`);
    }
    return sum/data.size;
    }

// const sells = {
//     size: 3,
//     products: [
//         {
//         name: 'Product 1',
//         price: 100,
//         },
//         {
//         name: 'Product 2',
//         price: 700,
//         },
//         {
//         name: 'Product 3',
//         price: 250,
//         },
//     ],
// };
// console.log(sells.size);
// console.log(sells.products);
// console.log(sells.products[0]);
// console.log(sells.products[0].price);

console.log(
    avg({
        size: 3,
        products: [
            {
            name: 'Product 1',
            price: 100,
            },
            {
            name: 'Product 2',
            price: 700,
            },
            {
            name: 'Product 3',
            price: 250,
            },
        ],
    })
); // should print the average price of all products