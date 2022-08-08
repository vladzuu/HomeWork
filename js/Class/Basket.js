class Basket {
   constructor() {
      this.basketArr = [];
      this.sumOrderTotal = 0;
      this.idWork;
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
      this.updateBasketAndCalculate();
   };
   createElementBasket() {
      const indexProduct = this.basketArr.length - 1;
      const obj = this.basketArr[indexProduct];
      const doc = document.querySelector('.block-basket');
      const wraper = document.createElement('div');
      wraper.classList.add('idwraper')
      wraper.setAttribute('idwraper', obj.idProduct)
      doc.append(wraper);

      const nameProduct = document.createElement('div');
      nameProduct.innerHTML = `Наименование ${obj.product} цена ${obj.price} грн/шт<br>`
      wraper.append(nameProduct);

      const inputWraper = document.createElement('div');
      inputWraper.classList.add('input-wraper')
      wraper.append(inputWraper);

      const inputMinus = document.createElement('input');
      inputMinus.setAttribute('value', '-');
      inputMinus.setAttribute('operation', 'minus');
      inputMinus.setAttribute('type', 'button')
      inputMinus.setAttribute('idinput', obj.idProduct)
      inputMinus.classList.add('input-button');
      inputWraper.append(inputMinus);

      const inputEntry = document.createElement('input');
      inputEntry.setAttribute('idinput', obj.idProduct)
      inputEntry.setAttribute('value', obj.amount)
      inputEntry.classList.add('input-count');
      inputWraper.append(inputEntry);

      const inputPlus = document.createElement('input');
      inputPlus.setAttribute('value', '+');
      inputPlus.setAttribute('operation', 'plus');
      inputPlus.setAttribute('type', 'button')
      inputPlus.setAttribute('idinput', obj.idProduct)
      inputPlus.classList.add('input-button');
      inputWraper.append(inputPlus);

      const buttonDelite = document.createElement('div');
      buttonDelite.innerHTML = `<button class="input-button" operation="del" ><span type="button" operation="del" idinput="${obj.idProduct}" 
      class="material-symbols-outlined"> delete</span></button>`;
      buttonDelite.setAttribute('operation', 'del');
      buttonDelite.setAttribute('idinput', obj.idProduct)
      inputWraper.append(buttonDelite);

      const out = document.createElement('div');
      inputWraper.append(out);
      out.classList.add('out', obj.idProduct);

      this.idWork = obj.idProduct;
      document.querySelector('.input-count').addEventListener('input', this.changeAmountGoods.bind(this));
      document.querySelectorAll('.input-button').forEach(element => {
         element.addEventListener('click', this.plusMinusGoods.bind(this))
      })
      this.updateBasketAndCalculate();
   }

   updateBasketAndCalculate() {
      const doc = document.getElementsByClassName(this.idWork);
      const arrElementInput = document.querySelectorAll('.input-count');
      let element;

      for (let objectProduct of this.basketArr) {
         if (objectProduct.idProduct == this.idWork) {
            element = objectProduct
         }
      }

      for (let key2 of arrElementInput) {
         let idInput = key2.getAttribute('idinput')

         if (idInput == this.idWork) {
            key2.setAttribute('value', element.amount);
         }
      }
      this.sumOrderTotal = this.basketArr.reduce((total, obj) => total + (obj.amount * obj.price), 0);
      doc[0].innerHTML = `${element.amount * element.price} грн`;
      document.querySelector('.order-sum').innerHTML = `Сумма заказа: ${this.sumOrderTotal} грн <button class="buy">Оформить заказ`;
      document.querySelector('.buy').onclick = this.aproveOrder.bind(this);
   };

   changeAmountGoods(event) {
      const idInput = event.target.getAttribute('idinput');
      const amount = event.target.value;
      for (let key of this.basketArr) {
         if (key.idProduct == idInput) {
            key.amount = amount;
            console.log('=');
         }
      };
      this.updateBasketAndCalculate();
   }

   plusMinusGoods(event) {
      const idWraper = document.querySelector('idwraper');
      const idInput = event.target.getAttribute('idinput');
      const operation = event.target.getAttribute('operation');
      let count = 0;
      for (let key of this.basketArr) {
         if (key.idProduct == idInput) {
            this.idWork = key.idProduct;
            switch (operation) {
               case 'minus': if (key.amount > 1) { key.amount-- };
                  break;
               case 'plus': key.amount++;
                  break;
               case 'del':
                  // console.log(this.basketArr);
                  // this.basketArr.splice([count], 1);
                  document.querySelector('.block-basket').removeChild(idWraper)
                  console.log(this.basketArr);
                  break;
            }
         }
         count++
         console.log(count);
      }
      this.updateBasketAndCalculate();
   }

   aproveOrder() {
      const block = document.querySelector('.block-basket');
      if (this.sumOrderTotal <= balance) {
         balance = balance - this.sumOrderTotal;
         this.basketArr = []
         block.innerHTML = `Заказ оформлен. Сумма баланса ${balance} грн`;

      } else {
         block.innerHTML = `Недостаточно средств на балансе для покупки`;

      }
   };
}