class Product {
   constructor(product, price, idPrpduct) {
      this.product = product;
      this.price = price;
      this.idPrpduct = idPrpduct;
   }
   addProductToHTML(parentCSSClass, clas) {
      const doc = document.querySelector(parentCSSClass);
      const divBlock = document.createElement('div');
      let product = document.createElement('div');
      let price = document.createElement('div');
      let button = document.createElement('button');

      button.textContent = "Купить"
      product.textContent = this.product;
      price.textContent = `${this.price} грн`

      divBlock.classList.add('divBlock')
      button.setAttribute('id-product', this.idPrpduct)
      button.classList.add('btn');

      doc.append(divBlock);
      divBlock.append(product);
      divBlock.append(price);
      divBlock.append(button);

      button.addEventListener('click', () => basket.addProductToBasket(button, clas))
   }
}
