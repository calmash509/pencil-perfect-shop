const search = document.getElementById('search');
let searchinput
const items = [
  document.getElementById('airheads'),
  document.getElementById('pencil'),
  document.getElementById('erase'),
  document.getElementById('sharp')
];

function filter() {
  let searchterm = search.value.toLowerCase();
  items.forEach(item => {
    const itemText = item.textContent.toLowerCase();
    if(itemText.includes(searchterm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}


search.addEventListener('input', filter);

document.getElementById('pencil').addEventListener("click", function() {
  window.location.href = "pencils.html";
})

document.getElementById('airheads').addEventListener("click", function() {
  window.location.href = "airheads.html";
})
