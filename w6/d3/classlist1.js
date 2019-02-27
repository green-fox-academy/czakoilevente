let pTags = document.getElementsByTagName("p");
console.log(pTags);

if (pTags[3].classList.contains("dolphin")) {
  pTags[3].innerText = "pear";
};

/* function getContainTrue(someArr) {
  for (let i = 0; i < someArr.length; i++) {
    if (someArr[i].contains("cat")) {
      return true;
    };
  };
}; */

if (pTags[0].classList.contains("apple")) {
  pTags[2].innerHTML = "dog";
};

let styleTag = document.getElementsByTagName("style");

pTags[0].classList.add("red");

pTags[1].classList.remove("baloon");
pTags[1].classList.add("pear");