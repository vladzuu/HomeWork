const productsArr = {
   '1': {
      'names': 'milk',
      'price': 60,
      'go': function () {
         let milk = new Product(this.names, this.price, this.id,);
         milk.addProductToHTML('.block');
         console.log(this.names);
      }
   }
   // { names: 'bread', price: 100 },
   // { names: 'meat', price: 40 },
   // { names: 'apple', price: 15 },
   // { names: 'raspberry', price: 85 },
   // { names: 'blueberry', price: 60 },
   // { names: 'cereal', price: 75 },
   // { names: 'coffe', price: 110 },
   // { names: 'tea', price: 55 }
}

let balance = 5000;
console.log(productsArr.go);

let milk = new Product('milkg', 50, 1);
milk.addProductToHTML('.block', milk);
let milk1 = new Product('milkg', 545, 2);
milk1.addProductToHTML('.block', milk1)


// obj.addProductToHTML();

const basket = new Basket();

// document.querySelectorAll('.btn').forEach((e) => e.addEventListener('click', () => {
//    basket.addProductToBasket(e);
// }));
