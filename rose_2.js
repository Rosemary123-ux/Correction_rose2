function multiplicationTable(num) {

  let table = "";

  for (let i = 1; i <= 12; i++) {

    table += `${num} x ${i} = ${num * i}\n`;
    
  }
  return table;
}

console.log(multiplicationTable(6));


