// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  //  console.log(price.innerHTML);
  // console.log(quantity.value);
  
const subTotal = product.querySelector('.subtotal span');
  actualValue = Number(price.innerHTML) * Number(quantity.value);
  subTotal.textContent = actualValue; 
 console.log(subTotal); 
  return actualValue;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.querySelectorAll('.product');

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
   
  }

  // ITERATION 3
  let totalPrice = document.querySelector('#total-value span');
  let total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    // console.log(allProducts[i])
    total += (updateSubtotal(allProducts[i]));

  }
  totalPrice.innerHTML = total;
  // console.log(totalPrice)

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const thisRow = target.parentNode.parentNode
  const table = thisRow.parentNode
  console.log('The target in remove is:', target, thisRow, table);

  table.removeChild(thisRow)
  //... your code goes here
}

// ITERATION 5

function createProduct(e) {
  const row = e.currentTarget.parentNode.parentNode
  const name = row.querySelector("#name").value
  const price = row.querySelector("#price").value
  const table = document.getElementById("table")

  let product = `
  <tr class="product">
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>
  `

  table.innerHTML += product

  let removeButtons = table.querySelectorAll(".btn-remove")
  
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
  }

  const newNameInput = document.getElementById('name')
  const newPriceInput = document.getElementById('price')

  newNameInput.value = ""
  newPriceInput.value = ""
 

  console.log("creating product", table)
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeProducButtons = document.querySelectorAll(".btn-remove")

  for (let i = 0; i < removeProducButtons.length; i++) {
    removeProducButtons[i].addEventListener('click', removeProduct)
  }

  let createProductButton = document.getElementById("create")

  createProductButton.addEventListener('click', createProduct)
  //... your code goes here
});
