class Basket {
   constructor() {
      this.basketArr = [];
      this.sumOrderTotal;
   }
   addProductToBasket(event) {
      const idProduct = event.getAttribute('id-product');
      this.basketArr.push(productsArr[idProduct])
      this.updateBasketAndCalculate();
   };

   updateBasketAndCalculate() {
      const doc = document.querySelector('.block-basket');
      let stringBasket = `Баланс ${balance} грн. <br>`;
      this.sumOrderTotal = this.basketArr.reduce((total, obj) => total + obj.price, 0)
      stringBasket += this.basketArr.reduce((total, obj) => total += `${obj.names} ${obj.price} грн <br>`, '')

      stringBasket += `Итого:${this.sumOrderTotal} грн <button class="buy">Оформить заказ</button>`;
      doc.innerHTML = stringBasket;
      console.log(this.sumOrderTotal);
      document.querySelector('.buy').onclick = this.aproveOrder.bind(this);
   };

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