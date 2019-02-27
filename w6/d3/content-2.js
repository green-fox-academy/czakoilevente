let list = ['apple', 'banana', 'cat', 'dog'];

let liElems = document.getElementsByTagName("li");

for (let i = 0; i < liElems.length; i++) {
  liElems[i].innerHTML = list[i];
};

/* -> style prperty <-
let ulTag = document.getElementsByTagName("ul");
ulTag[0].setAttribute("style", "background-color: limegreen");
*/

let ulTag = document.getElementsByTagName("ul");  
//arr.push - ul tags
ulTag[0].setAttribute("class", "style");          
//set ul tag attr <ul ATTRIBUT></ul> <ul class="style"></ul>

let styleTag = document.createElement("style");   
//create empty styleTag: <style></style>
styleTag.innerHTML = ".style{background-color: limegreen}"; 
//puts <style>".style{background-color: limegreen}"</style>

document.getElementsByTagName("body")[0].appendChild(styleTag);
//puts styleTag into body 