const cart = document.getElementById('cart');
let number = 0;
let pencilNum = {number: number};
localStorage.setItem('pencilNumber', JSON.stringify(pencilNum));

cart.addEventListener("click", function() {
  number ++;
  pencilNum.number = number;
  localStorage.setItem('pencilNumber', JSON.stringify(pencilNum));
})