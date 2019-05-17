'use strict'

let http = new XMLHttpRequest;
let submitButton = document.getElementById('submit-button');
let listButton = document.getElementById('list-button');
let formInput = document.getElementById('input');
let listedItems = document.getElementById('listed-items');

console.log(submitButton);
console.log(listButton);
console.log(formInput);
console.log(listedItems);
//console.log();


submitButton.onclick = () => {
  console.log('button working');
  //e.preventDefault();
  http.open('POST', '/enter');
  http.onload = () => {
    let data = http.responseText;
    console.log(data);      
  };
  http.send();
};

function getFormData() {
  let returnObj = {
   entry: formInput.value
  }
  return returnObj;
};

listButton.onclick = () => {
  console.log('button working');  
  http.open('GET', '/list');
  http.onload = () => {
    let data = http.responseText;

    for (let i = 0; i < data.length; i++) {
      let row = document.createElement('p');
      listedItems.appendChild(row);
      row.innerHTML = data[i];
    };
  }
  http.send();
};