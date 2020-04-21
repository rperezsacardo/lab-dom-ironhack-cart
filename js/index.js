// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const $price = product.querySelector('.price span');
  const $quantityValeu = product.querySelector ('.quantity input')
  const resultSubtotal = Number($price.innerText) * ($quantityValeu.valueAsNumber);
  const $subtotal = product.querySelector('.subtotal span') // add this value to subtotal
  $subtotal.innerText = resultSubtotal;
  return resultSubtotal;  
 
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let auxTotal = 0;
  const $total = document.querySelector('#total-value span')
  const allProducts = document.querySelectorAll (' .product')

  
  // ITERATION 3
  for(let price of allProducts){
    auxTotal += updateSubtotal(price);
  }

  $total.innerText = auxTotal; 
}

// ITERATION 4 // Remove when click any place of the line,
  // Should be just the button

function removeProduct(event) {
  const $target = event.currentTarget;
  console.log('The target in remove is:', $target);
  //... your code goes here
 
  
  const $thisButton = $target.parentNode.parentNode // 
  const $parentButton = $target.parentNode.parentNode.parentNode; 
  
  

  $parentButton.removeChild($thisButton); // Remove when click any place of the line,
  // Should be just the button
  
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const $allRemoveBtn = document.querySelectorAll('.btn-remove');
  for(let{} of $allRemoveBtn){     
    addEventListener('click', removeProduct); 
  }
  
  
  
});
