class Basket {
   constructor() {
      this.basketArr = {};
      this.sumOrderTotal = 0;
      this.idWork;
      this.deleteProductHTML = false;
   }

   addProductToBasket(event, obj) {
      let idButton = event.target.getAttribute('id-product');
      idButton = Number(idButton);
      this.idWork = idButton;
      let checkBasket = false;

      for (let key in this.basketArr) {
         if (key == idButton) {
            checkBasket = true;
            this.basketArr[key].amount++;
         }
      };
      if (!checkBasket) {
         this.basketArr[idButton] = obj;
         this.basketArr[idButton].amount = 1;
         this.createElementBasket();
      }
      this.updateBasketAndCalculate();
   };

   createElementBasket() {
      const balanceBlock = document.querySelector('.balance');
      balanceBlock.textContent = `Баланс ${balance} грн`
      const doc = document.querySelector('.block-basket');
      const wraper = document.createElement('div');
      wraper.classList.add('idwraper')
      wraper.setAttribute('idwraper', this.idWork);
      doc.append(wraper);

      const nameProduct = document.createElement('div');
      nameProduct.innerHTML = `Наименование ${this.basketArr[this.idWork].product} цена ${this.basketArr[this.idWork].price} грн/шт<br>`
      wraper.append(nameProduct);

      const inputWraper = document.createElement('div');
      inputWraper.classList.add('input-wraper');
      wraper.append(inputWraper);

      const inputMinus = document.createElement('input');
      inputMinus.setAttribute('value', '-');
      inputMinus.setAttribute('operation', 'minus');
      inputMinus.setAttribute('type', 'button');
      inputMinus.setAttribute('idinput', this.idWork);
      inputMinus.classList.add('input-button');
      inputWraper.append(inputMinus);
      inputMinus.addEventListener('click', this.plusMinusGoods.bind(this))

      const inputEntry = document.createElement('input');
      inputEntry.setAttribute('idinput', this.idWork)
      inputEntry.setAttribute('value', this.basketArr[this.idWork].amount)
      inputEntry.setAttribute('type', 'number')
      inputEntry.classList.add('input-count');
      inputWraper.append(inputEntry);
      inputEntry.addEventListener('input', this.changeAmountGoods.bind(this))


      const inputPlus = document.createElement('input');
      inputPlus.setAttribute('value', '+');
      inputPlus.setAttribute('operation', 'plus');
      inputPlus.setAttribute('type', 'button')
      inputPlus.setAttribute('idinput', this.idWork)
      inputPlus.classList.add('input-button');
      inputWraper.append(inputPlus);
      inputPlus.addEventListener('click', this.plusMinusGoods.bind(this))

      const buttonDelete = document.createElement('div');
      buttonDelete.innerHTML = `<button class="input-button" operation="del" ><span type="button" operation="del" idinput="${this.idWork}" 
      class="material-symbols-outlined"> delete</span></button>`;
      buttonDelete.setAttribute('operation', 'del');
      buttonDelete.setAttribute('idinput', this.idWork)
      inputWraper.append(buttonDelete);
      buttonDelete.addEventListener('click', this.plusMinusGoods.bind(this))


      const out = document.createElement('div');
      inputWraper.append(out);
      out.classList.add('out', this.idWork);
      this.updateBasketAndCalculate();
   }

   updateBasketAndCalculate() {
      let sumOrder = 0;
      for (let key in this.basketArr) {
         sumOrder += this.basketArr[key].price * this.basketArr[key].amount;
      };
      this.sumOrderTotal = sumOrder;

      if (!this.deleteProductHTML) {
         const doc = document.getElementsByClassName(this.idWork);
         const arrElementInput = document.querySelectorAll('.input-count');
         for (let key2 of arrElementInput) {
            let idInput = key2.getAttribute('idinput')
            if (idInput == this.idWork) {
               key2.setAttribute('value', this.basketArr[this.idWork].amount);
            }
         }
         doc[0].innerHTML = `${this.basketArr[this.idWork].amount * this.basketArr[this.idWork].price} грн`;
      }
      this.deleteProductHTML = false;
      document.querySelector('.order-sum').innerHTML = `Сумма заказа: ${this.sumOrderTotal} грн <button class="buy">Оформить заказ`;
      document.querySelector('.buy').onclick = this.aproveOrder.bind(this);
   };

   changeAmountGoods(event) {
      const idInput = event.target.getAttribute('idinput');
      const amount = event.target.value;
      this.idWork = idInput;
      this.basketArr[this.idWork].amount = amount;
      this.updateBasketAndCalculate();
   }

   plusMinusGoods(event) {
      const idInput = event.target.getAttribute('idinput');
      const operation = event.target.getAttribute('operation');
      this.idWork = idInput;
      switch (operation) {
         case 'minus': if (this.basketArr[this.idWork].amount > 1) { this.basketArr[this.idWork].amount-- };
            break;
         case 'plus': this.basketArr[this.idWork].amount++;
            break;
         case 'del':
            delete this.basketArr[this.idWork];
            const x = event.target.parentNode.parentNode.parentNode.parentNode;
            document.querySelector('.block-basket').removeChild(x);
            this.deleteProductHTML = true;
            break;
      }
      this.updateBasketAndCalculate();
   }

   aproveOrder() {
      const blockBalance = document.querySelector('.balance');
      const blockBasket = document.querySelector('.block-basket');
      const blockOrderSum = document.querySelector('.order-sum');
      if (this.sumOrderTotal <= balance) {
         balance = balance - this.sumOrderTotal;
         this.basketArr = {}
         blockBasket.innerHTML = '';
         blockOrderSum.innerHTML = '';
         blockBalance.innerHTML = `Заказ оформлен. Сумма баланса ${balance} грн`;
      } else {
         blockBalance.innerHTML = `Недостаточно средств на балансе для покупки`;
      }
   }
}