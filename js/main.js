let store = {
  products: [
    { name: "Phone", price: 500, quantity: 10 },
    { name: "Laptop", price: 1200, quantity: 5 },
  ]
};
store.products.push({ name: "Tablet", price: 800, quantity: 7 });
store.products[0].quantity += 5;
store.products[1].price = 1100;
console.log(store.products[2].quantity);
console.log(store.products[store.products.length-1].price);