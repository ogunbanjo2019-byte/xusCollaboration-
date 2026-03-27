const date = new Date()

let dateTime = document.querySelector(".dateTime")
let bd = document.querySelector("body");
let toggleBtn = document.querySelector(".toggle");
console.log(bd)
console.log(dateTime)
console.log(date)

dateTime.textContent = (`${date.getDate()} : ${date.getMonth() + 1} : ${date.getFullYear()}`)



toggleBtn.addEventListener("click", () => {
    if (toggleBtn.textContent === "dark") {
        toggleBtn.textContent = "light";
        bd.style.backgroundColor = "yellow"
        toggleBtn.style.backgroundColor = "black";
        toggleBtn.style.color = "white";
    }
    else if (toggleBtn.textContent === "light") {
        toggleBtn.textContent = "dark";
        bd.style.backgroundColor = "white"
        toggleBtn.style.backgroundColor = "white";
        toggleBtn.style.color = "black";
    }
}

)

//operators

//comparison

//Equals to ==

let num1 = 7;
let num2 = 2;
let dat = "20"

console.log(num1 == dat)
console.log(num1 <= num2)
console.log(num1 >= num2)
console.log(num1 === num2)
console.log(num1 !=  dat)
console.log(num1 == num2 || dat)
console.log(num2 % num1)
console.log(num1 ** num2)
console.log(num1 == dat && num1)
console.log(15 % 4)

// let randomNumber = Math.random() * 100;
// let result = Math.(randomNumber)
// console.log(randomNumber)

let nums = [1,5,6,7,8,9,20,30]
console.log(nums.length)
console.log(nums[4])

nums.push("wale")
nums.push(300)
