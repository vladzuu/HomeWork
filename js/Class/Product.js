class Product {
   constructor(product, price, idProduct) {
      this.product = product;
      this.price = price;
      this.idProduct = idProduct;
      this.addProductToHTML('.block');
   }
   addProductToHTML(parentCSSClass) {
      const doc = document.querySelector(parentCSSClass);
      const divBlock = document.createElement('div');
      let product = document.createElement('div');
      let price = document.createElement('div');
      let button = document.createElement('button');

      button.textContent = "Купить"
      product.textContent = this.product;
      price.textContent = `${this.price} грн`

      divBlock.classList.add('divBlock')
      button.setAttribute('id-product', this.idProduct)
      button.classList.add('btn');

      doc.append(divBlock);
      divBlock.append(product);
      divBlock.append(price);
      divBlock.append(button);
      const obj = this;

      button.addEventListener('click', (e) => basket.addProductToBasket(e, obj))

   }
}
