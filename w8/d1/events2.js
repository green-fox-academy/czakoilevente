let ulTag = document.querySelector('ul');
let button = document.querySelector('button');
ulTag = document.getElementsByTagName('li');
console.log(ulTag);

button.addEventListener('click', () => {
  let pTag = document.querySelector('p');
  pTag.innerText = ulTag.length;

});

