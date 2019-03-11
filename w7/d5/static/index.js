const http = new XMLHttpRequest();

let myBody = document.getElementById('main-body');
let myDiv = document.getElementById('titul');


for (i = 1; i < 3; i++) {
  let myDiv2 = document.createElement('div');
  myDiv2.innerText = 'test';
  myBody.appendChild(myDiv2);
};


let X = () => {    //rename X
   
  http.open('GET', '/posts');
  http.setRequestHeader();
  http.onload = () => {
    let content = JSON.parse(http.responseText);
    
  };
  http.send();
};
