let king = document.getElementById("b325");
console.log(king.innerHTML);

let businessLamp = [document.getElementsByClassName("asteroid big")];
console.log(businessLamp[0][0].innerHTML, businessLamp[0][1].innerHTML);

let conceitedKing = [king.innerHTML, document.getElementsByClassName("b326")];
console.log(conceitedKing[0], conceitedKing[1][0].innerHTML);
alert(conceitedKing[0]);
alert(conceitedKing[1][0].innerHTML);

let noBusiness = [king.innerHTML, conceitedKing[1][0].innerHTML, businessLamp[0][1].innerHTML];
for(let i = 0; i < noBusiness.length; i++){
  console.log(noBusiness[i])
};