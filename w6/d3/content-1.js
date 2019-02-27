let classContent = document.getElementsByClassName("animals");
console.log(classContent[0].innerHTML);

let pElemCont = document.getElementsByTagName("p");
console.log(pElemCont);

/* for (let i = 0; i < pElemCont.length; i++) {
  // ow: pElemCont[i].innerHTML = classContent[0].innerHTML;
  // add
  if (pElemCont[i].innerHTML !== classContent[0].innerHTML) {
    pElemCont[i].innerHTML += classContent[0].innerHTML;
  };
}; */

for (let i = 0; i < pElemCont.length - 1; i++) {
  pElemCont[i].innerHTML += classContent[0].innerHTML;
};
// due to "last element" mentioned in task, "pElemCont.length - 1" can be used due to it being always the last element