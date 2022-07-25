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
document.querySelectorAll('.btn').forEach((e) => e.addEventListener('click', addProductToBasket));

let basketArr = [];
function addProductToBasket(e) {
   const idProduct = e.target.getAttribute('id-product');
   basketArr.push(productsArr[idProduct])
   updateBasketAndCalculate();
};

let sumOutside;
function updateBasketAndCalculate() {
   const doc = document.querySelector('.block-basket');
   let stringBasket = `Баланс ${balance} грн. <br>`;

   // for (const obj of basketArr) {
   //    sum = sum + obj.price
   //    stringBasket += `${obj.names} ${obj.price} грн <br>`
   // };

   const sum = basketArr.reduce((total, obj) => total + obj.price, 0)
   stringBasket += basketArr.reduce((total, obj) => total += `${obj.names} ${obj.price} грн <br>`, '')


   stringBasket += `Итого:${sum} грн <button class="buy">Оформить заказ</button>`;
   doc.innerHTML = stringBasket;
   sumOutside = sum;
   document.querySelector('.buy').onclick = aproveOrder;
};

function aproveOrder() {
   let block = document.querySelector('.block-basket');
   basketArr = [];
   balance = balance - sumOutside;
   block.innerHTML = `Заказ оформлен. Сумма баланса ${balance} грн`;
};

