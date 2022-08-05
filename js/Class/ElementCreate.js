class ElementCreate {
   constructor(arr, parentCSSClass) {
      this.arr = arr
      this.parentCSSClass = parentCSSClass;
   }
   addProductToHTML() {
      let idPrpduct = 0;
      const doc = document.querySelector(this.parentCSSClass);
      for (const obj of this.arr) {
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
   }
}