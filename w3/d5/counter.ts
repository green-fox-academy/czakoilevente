// Write a recursive function that takes one parameter: n and counts down from n.


function countDown(n: number) {
  console.log(n);    
  if (n===1) {
    
    return;

  } else {
  countDown (n-1);
  };
  
  return;
  
}

countDown(15);