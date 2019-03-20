const http = new XMLHttpRequest();

let bodyDiv = document.getElementById('body-div');
let ulTag = document.createElement('ul');
let buttonOne = document.getElementById('button1');
let buttonTwo = document.getElementById('button2');
let htmlListColumns = ['authors name', 'book title', 'price', 'category', 'publishers name'];
let objectKeysArr = ['aut_name', 'book_name', 'book_price', 'cate_descrip', 'pub_name'];


buttonOne.onclick = () => {
  http.open('GET', '/book_titles');
  http.onload = () => {
    let content = JSON.parse(http.responseText);
    console.log(content);

    for (i = 0; i < content.length; i++) {
      let liTag = document.createElement('li');
      ulTag.appendChild(liTag);
      liTag.innerText = content[i].book_name;
    };
    bodyDiv.appendChild(ulTag);

  };
  http.send();
};

http.

buttonTwo.onclick = () => {

  let table = document.createElement('table');

  let trTag = document.createElement('tr');
  for (i = 1; i < htmlListColumns.length + 1; i++) {
    let thTag = document.createElement('th');
    trTag.appendChild(thTag);
    thTag.innerText = htmlListColumns[i - 1];
  };
  table.appendChild(trTag);

  http.open('GET', '/book-list');
  http.onload = () => {
    let content = JSON.parse(http.responseText);
    console.log(content);

    for (i = 0; i < content.length; i++) {
      let trTag = document.createElement('tr');
      table.appendChild(trTag);
      for (j = 0; j < htmlListColumns.length; j++) {
        let tdTag = document.createElement('td');
        trTag.appendChild(tdTag);
        tdTag.innerText = content[i][`${objectKeysArr[j]}`];
      };
    };


    bodyDiv.appendChild(table);
  };
  http.send();

};
