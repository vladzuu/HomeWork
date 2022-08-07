class Basket {
   constructor() {
      this.basketArr = [];
      this.sumOrderTotal = 0;


   }
   addProductToBasket(event, obj) {

      let idButton = event.target.getAttribute('id-product');
      idButton = Number(idButton)
      let checkBasket = false;

      for (let key of this.basketArr) {
         if (key.idProduct == idButton) {
            checkBasket = true;
            key.amount++
         }
      };
      if (!checkBasket) {
         this.basketArr.push(obj);
         this.basketArr[this.basketArr.length - 1].amount = 1;
         this.createElementBasket();
      }
      // this.updateBasketAndCalculate();
   };
   createElementBasket() {
      const obj = this.basketArr[this.basketArr.length - 1]
      const doc = document.querySelector('.block-basket');
      const wraper = document.createElement('div');
      let nameProduct = document.createElement('div');
      let inputWraper = document.createElement('div');
      let inputMinus = document.createElement('input')
      let inputPlus = document.createElement('input')
      let inputEntry = document.createElement('input')
      let orderSum = document.createElement('div')

      nameProduct.innerHTML = `Наименование ${obj.product} цена ${obj.price} грн. ${obj.amount} шт. ${obj.price * obj.amount} грн<br>`
      orderSum.innerHTML = `Итого:${this.sumOrderTotal} грн <button class="buy">Оформить заказ`;

      inputMinus.setAttribute('value', '-');
      inputMinus.setAttribute('operation', 'minus');

      inputPlus.setAttribute('value', '+');
      inputPlus.setAttribute('operation', 'plus');

      inputMinus.classList.add('input-button');
      inputPlus.classList.add('input-button');
      inputEntry.classList.add('input-count');

      doc.append(wraper);
      wraper.append(nameProduct);
      wraper.append(inputWraper);
      inputWraper.append(inputMinus);
      inputWraper.append(inputEntry);
      inputWraper.append(inputPlus);
      wraper.append(orderSum);

      document.querySelector('.buy').onclick = this.aproveOrder.bind(this);
      document.querySelector('.input-amount').addEventListener('input', this.changeAmountGoods.bind(this));
      document.querySelectorAll('.input-button').forEach(element => {
         element.addEventListener('click', this.plusMinus.bind(this))
      });
   }

   updateBasketAndCalculate() {
      const doc = document.querySelector('.block-basket');
      let stringBasket = `Баланс ${balance} грн. <br>`;

      this.sumOrderTotal = this.basketArr.reduce((total, obj) => total + (obj.amount * obj.price), 0)
      stringBasket += this.basketArr.reduce((total, obj) => total += `Наименование ${obj.product} цена ${obj.price} грн.
       ${obj.amount} шт. ${obj.price * obj.amount} грн<br>
       <input type="button" class="input-button" idinput="${obj.idProduct}" value="-" values="-">
       <input type="number" class="input-amount" min="0" idinput="${obj.idProduct}"  value=${obj.amount}>
       <input type="button" class="input-button" idinput="${obj.idProduct}" value="+" values="+">
       <button class="input-button" values="del" ><span type="button" values="del" idinput="${obj.idProduct}" class="material-symbols-outlined">
      delete</span></button><br>`, '')

      stringBasket += `Итого:${this.sumOrderTotal} грн <button class="buy">Оформить заказ</button>`;
      doc.innerHTML = stringBasket;

      document.querySelector('.buy').onclick = this.aproveOrder.bind(this);
      document.querySelector('.input-amount').addEventListener('input', this.changeAmountGoods.bind(this));
      document.querySelectorAll('.input-button').forEach(element => {
         element.addEventListener('click', this.plusMinus.bind(this))
      });
   };

   changeAmountGoods(event) {
      const idInput = event.target.getAttribute('idinput');
      const amount = event.target.value;
      for (let key of this.basketArr) {
         if (key.idProduct == idInput) {
            key.amount = amount;
         }
      }
      this.updateBasketAndCalculate();
   }
   plusMinus(event) {
      const idInput = event.target.getAttribute('idinput');
      const amount = event.target.getAttribute('values');
      console.log(idInput);
      // const amount = event.target.value;
      for (let key of this.basketArr) {
         if (key.idProduct == idInput) {
            // if ('1' == amount) {
            //    console.log('amount');
            // };

            switch (amount) {
               case '-': key.amount--;
                  console.log(amount)
                  break;
               case '+': key.amount++;
                  console.log(amount)
                  break;
               case 'del': console.log('lol');
                  console.log(amount)
                  break;
            }
         }
         this.updateBasketAndCalculate();
      }
   }

   aproveOrder() {
      const block = document.querySelector('.block-basket');
      console.log(this.sumOrderTotal);
      if (this.sumOrderTotal <= balance) {
         balance = balance - this.sumOrderTotal;
         this.basketArr = []
         block.innerHTML = `Заказ оформлен. Сумма баланса ${balance} грн`;

      } else {
         block.innerHTML = `Недостаточно средств на балансе для покупки`;

      }
   };
}