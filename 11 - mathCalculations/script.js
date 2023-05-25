let option
let numbers = [];

while(option != 5){
  option = Number(prompt(`
  What do you think about doing some math calculations?

  1. Insert Numbers
  2. Make Calculations and show results
  3. Extra mathematical data (Is the sum of the numbers even?)
  4. Extra mathematical data (Are the numbers the same?)
  5. Exit the math program
  `))

  switch(option){
    case 1:
      let number = Number(prompt("Enter the first number: "))
      numbers.push(number)
      if(numbers[0] >= 0){
        number = Number(prompt("Enter the second number: "))
        numbers.push(number)
      }
      break;
    case 2:
      if (numbers[0] == null){
        alert("There are no registered numbers!")
      }
      else{ 
      alert(`The sum of the two numbers: ${numbers[0] + numbers[1]}`)

      alert(`The subtraction of the two numbers: ${numbers[0] - numbers[1]}`)

      alert(`The multiplication of the two numbers: ${numbers[0] * numbers[1]}`)

      alert(`The division of the two numbers: ${numbers[0] / numbers[1]}`)

      alert(`The rest of division of the two numbers: ${numbers[0] % numbers[1]}`)
      }
      break;
    case 3:
      if((numbers[0] + numbers[1]) % 2 == 0){
        alert("The sum is even!")
      }
      else {
        alert("The sum is odd")
      }
      break;
    case 4:
      if (numbers[0] == numbers[1]){
        alert("The numbers entered are the same")
      }
      else {
        alert("The numbers entered are different")
      }
      break;
    case 5:
      alert("Thank you! Until next time!")
      break;
    default:
      alert("Invalid command, enter numbers between 1 and 5")
  }
}
