let string="";

let buttons=document.querySelectorAll('.btn');

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    try{
      if(e.target.innerHTML== '='){
        string=eval(string);
        document.querySelector('.display').value=string;
      }
      else if(e.target.innerHTML == 'AC'){
        string="";
        document.querySelector('.display').value=string;
      }
      else{
        console.log(e.target);
        string = string+e.target.innerHTML;
        document.querySelector('.display').value=string;
      }
    }
    catch(error){
      string="error";
      document.querySelector('.display').value=string;
    }
  })
});





// let display = document.getElementById("display");

// function addToDisplay(value) {
//   display.value += value;
// }

// function clearDisplay() {
//   display.value = "";
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// }

// function calculate(){

//     let x = document.getElementById('result').value

//     let y = eval(x);

//     document.getElementById('result').value = y

//     return y

// }
