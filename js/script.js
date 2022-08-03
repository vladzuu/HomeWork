const productsArr = [
   { names: 'milk', price: 60 },
   { names: 'bread', price: 100 },
   { names: 'meat', price: 40 },
   { names: 'apple', price: 15 },
   { names: 'raspberry', price: 85 },
   { names: 'blueberry', price: 60 },
   { names: 'cereal', price: 75 },
   { names: 'coffe', price: 110 },
   { names: 'tea', price: 55 }
];
let balance = 5000;

const obj = new ElementCreate(productsArr, '.block');
obj.addProductToHTML();

const basket = new Basket();

document.querySelectorAll('.btn').forEach((e) => e.addEventListener('click', () => {
   basket.addProductToBasket(e);
}));
