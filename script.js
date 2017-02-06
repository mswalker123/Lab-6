

function convertTemp(temp, unit){
  if (unit === 'C'){
     return (temp - 32) * 5/9;
  }

  else if (unit === 'F'){
     return (temp * 9/5) + 32;
  }
}

console.log (convertTemp(212, 'C'));
console.log (convertTemp (32, 'C'));
console.log (convertTemp (65, 'C'));
console.log (convertTemp (100, 'F'));
console.log (convertTemp (-40, 'F'));
