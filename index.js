// Code your solutions in here.

  function writeCards(names, event) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
  
    return messages;
  }

  const names = ['Guadalupe', 'Ollie', 'Aki'];
const event = 'surprise';

const messages = writeCards(names,);
console.log(messages);
[
    "Thank you, Guadalupe, for the wonderful surprise gift!",
    "Thank you, Ollie, for the wonderful surprise gift!",
    "Thank you, Aki, for the wonderful surprise gift!"
 ]


 function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  

