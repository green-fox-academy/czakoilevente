let itemGfa = "Green Fox";
let itemLamp = "The Lamplighter";
let ulTag = document.querySelector('ul');
let liTag = document.createElement('li');

liTag.innerHTML = itemGfa;

ulTag.appendChild(liTag);

let liTag2 = document.createElement('li');
liTag2.innerHTML = itemLamp;

ulTag.appendChild(liTag2);

let headingSay = 'I can add elements to the DOM!';

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = headingSay;

let divTag = document.querySelector('div');
divTag.appendChild(h1Tag);

let imgSource = "http://www.erdekesvilag.hu/kepek/elkapott-pillanatok/kepek-28.jpg";
let imgTag = document.createElement('img');
imgTag.setAttribute('src', imgSource);
divTag.appendChild(imgTag);