const age = 22;
if (age >= 81){
  console.log("Yes you can vote")
}
else if(age >= 80){
  console.log("Ofcourse, you can vote")
}
else{
  console.log("You can't vote")
}


//Ternary Operatror
age >= 18 ? console.log("Yes") : console.log ("No55")

let result = age >= 18 ? "Yes" : "No55"


//SWITCCH
const option = 5 ; 
switch(option){
  case 1:
  console.log("Namaste!")
  break;
  
  case 2:
  console.log("Hello")
  break;

  case 3:
  console.log("Bonjor!")
  
  default:
  console.log("Ni hao!")
}


const option1 = "+"
switch(option1){
  case "+":
  console.log("addition")
  break;

  case "-": 
  console.log("minus")
  break;

  default:
  console.log("sorry error aayo hehe")
}