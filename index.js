// Code your solutions in this file
function writeCards(names, gift) {
  
  let thankYouMessages = [];

  
  names.forEach((name) => {
    
    thankYouMessages.push(
      `Thank you, ${name}, for the wonderful ${gift} gift!`
    );
  });

  
  return thankYouMessages;
}


console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(num) {
  
  for (let i = num; i >= 0; i--) {
    
    console.log(i);
  }
}


countDown(10);