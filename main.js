
document.querySelector('button').addEventListener('click', function () {
  var value = document.querySelector('input').value

  localStorage.setItem('headerText', value);
 
});

document.addEventListener('DOMContentLoaded', function() {
  var text = localStorage.getItem('headerText');

  if (text && text.trim()) {
    document.querySelector('h1').textContent = text
};
});
