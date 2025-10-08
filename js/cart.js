
const pencilnums = document.getElementById('pencilNum')
const pencildata = localStorage.getItem('pencilNumber');
const pencilPrice = document.getElementById('pencilPrice')
if(pencildata) {
  const parsed = JSON.parse(pencildata);
  let pencils = parsed.number;
  if(pencils > 0) {
  pencilnums.value = pencils;
  pencilPrice.textContent = "$" + pencilnums.value * 0.25;
}
}

pencilnums.addEventListener("input", function() {
  pencilPrice.textContent = "$" + pencilnums.value * 0.25;
})
const items = [
  document.getElementById('sharp'),
  document.getElementById('pencil')
]



