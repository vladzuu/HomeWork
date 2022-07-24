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


function addProductToHTML() {
   let idPrpduct = 0;
   for (const obj of productsArr) {
      let doc = document.querySelector('.block');
      let divBlock = document.createElement('div');
      let product = document.createElement('div');
      let price = document.createElement('div');
      let button = document.createElement('button');

      button.textContent = "Купить"
      product.textContent = obj.names
      price.textContent = `${obj.price} грн`


      divBlock.classList.add('divBlock')
      button.setAttribute('id-product', idPrpduct)
      button.classList.add('button');

      doc.append(divBlock);
      divBlock.append(product);
      divBlock.append(price);
      divBlock.append(button);

      idPrpduct++;

   }
}
addProductToHTML();
document.querySelectorAll('.button').forEach((e) => e.addEventListener('click', shoppingCart));

function shoppingCart(e) {
   const index = 
      console.log(e.target);
}

