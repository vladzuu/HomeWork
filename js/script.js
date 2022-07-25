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

function addProductToHTML(arr) {
   let idPrpduct = 0;
   const doc = document.querySelector('.block');
   for (const obj of arr) {
      const divBlock = document.createElement('div');
      let product = document.createElement('div');
      let price = document.createElement('div');
      let button = document.createElement('button');

      button.textContent = "Купить"
      product.textContent = obj.names
      price.textContent = `${obj.price} грн`

      divBlock.classList.add('divBlock')
      button.setAttribute('id-product', idPrpduct)
      button.classList.add('btn');

      doc.append(divBlock);
      divBlock.append(product);
      divBlock.append(price);
      divBlock.append(button);

      idPrpduct++;
   }
};
addProductToHTML(productsArr);
document.querySelectorAll('.btn').forEach((e) => e.addEventListener('click', addBasket));

let basketArr = [];
function addBasket(e) {
   let idProduct = e.target.getAttribute('id-product');
   basketArr.push(productsArr[idProduct])
   update();
};

function update() {
   let stringBasket = `Баланс ${balance} грн. <br>`
   for (const obj of basketArr) {
      stringBasket += `${obj.names} ${obj.price} грн <br>`
   }
   return basketSum(stringBasket);
};

function basketSum(string) {
   const doc = document.querySelector('.block-basket');
   let sum = 0;
   for (const obj of basketArr) {
      sum = sum + obj.price
   }
   string += `Итого:${sum} грн <button class="buy">Оформить заказ</button>`;
   doc.innerHTML = string;
   document.querySelector('.buy').onclick = aproveOrder;

   function aproveOrder() {
      let block = document.querySelector('.block-basket');
      basketArr = [];
      balance = balance - sum;

      block.innerHTML = `Заказ оформлен. Сумма баланса ${balance} грн`;
   };
};



