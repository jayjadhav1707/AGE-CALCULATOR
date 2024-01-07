let container_div = document.querySelector("#container");
console.log(container_div);

const birthday = document.getElementById("ageselector");
const butn = document.getElementById("buttn");
let result = document.querySelector("#enterage");

function calculateAge(){
    let date_of_birth = birthday.value;
    let currentDate= new Date();
    let birthdayDate = new Date(date_of_birth);
    let totalYear = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();
    
//    if you not enter the dob.
     if(date_of_birth === "") alert("please enter your age");
           else{
            if (month < 0 ||(month === 0 && currentDate.getDate() < birthdayDate.getDate())){
                   totalYear--;
            }
            result.innerText = `Your age is ${totalYear} Year old`;
           }  
}
butn.addEventListener("click", calculateAge);