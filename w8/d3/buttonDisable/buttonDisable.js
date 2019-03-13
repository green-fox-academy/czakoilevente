let buttonCats = document.getElementById('buttonCats');
let buttonSign = document.getElementById('buttonSign');
buttonCats.disabled = true;
buttonSign.disabled = true;

let divPets = document.getElementsByName('pet');
let divFacts = document.getElementsByName('facts');

for (i = 0; i < 2; i++) {
  divPets[i].addEventListener('click', () => {
    buttonSign.disabled = false;
  });
};

divFacts[0].onclick = () => {
  buttonCats.disabled = false;
};

buttonCats.onclick = () => {
  alert(`Thank you, you've successfully signed up for cat facts`)
};
buttonSign.onclick = () => {
  alert(`Thank you, you've successfully signed up for cat facts`)
};

divPets[2].onclick = () => {
  divFacts[1].onclick = () => {
    buttonCats.disabled = true;
    buttonSign.disabled = false;
    buttonSign.onclick = () => {
      alert(`Sigh, we still added you to the cat facts list`);
    };
  };
};