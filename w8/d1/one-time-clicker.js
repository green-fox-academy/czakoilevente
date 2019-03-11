let button = document.querySelector('button');
let timestamp = new Date;

//=========== solution one =============
/* button.addEventListener('click', (event) => {
  console.log(timestamp);
  console.log(event);
  button.setAttribute('disabled', true );
});
*/

//=========== solution two =============
button.className = 'clickable';
button.addEventListener('click', (event) => {
  if (button.className == 'clickable') {
    console.log(timestamp);
    button.className = '';
  };
});