let h1Tag = document.querySelector('h1');

window.addEventListener('keyup', (event) => {
  console.log(event);
  console.log(event.target);
  
  h1Tag.innerText = `Last pressed key code is: ${event.code}`;
});