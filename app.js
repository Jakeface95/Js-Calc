// const firstNum = 6
// const secondNum = 7

// // if (firstNum > secondNum) {
//     //alert("The first number is larger");
// // } else alert("The second number is larger");

//  const thirdNum = 5
 
 // if firstnum < secondnum and first num < second num then
    //firstnum is smallest
// else if secondnum < firstnum and secondnum < thirdnum then
    // secondnum is smallest
// else third num is smallest

// if (firstNum < secondNum && firstNum < thirdNum) {
//     alert("The first number is the smallest");
// } else if (secondNum < firstNum && secondNum < thirdNum) {
//     alert("The second number is smallest");
// } else alert("The third number is smallest")

// const mark = 0

// if (mark >= 90) {
//     alert("Your grade is an A");
// } else if (mark >= 80) {
//     alert("Your grade is a B");
// } else if (mark >= 70) {
//     alert("Your grade is a C")
// } else alert("Your grade is a D");

// var firstNum = prompt("Please enter the first number.")
// const operator = prompt("Please enter your operator, +, -, / or *, ^2, square root")
// var secondNum = prompt("Please enter the second number.")
// let value = 0

// if (operator === "+") {
//     value = Number(firstNum) + Number(secondNum);
//     alert(value);
// } else if (operator === "-") {
//     value = Number(firstNum) - Number(secondNum);
//     alert(value);
// } else if (operator === "/") {
//     value = Number(firstNum) / Number(secondNum);
//     alert(value);
// } else if (operator === "*") {
//     value = Number(firstNum) * Number(secondNum);
//     alert(value);
// } else if (operator === "^2") {
//     value = Number(firstNum) * Number(firstNum);
//     alert(value);
// } else if (operator === "square root") {
//     value = Math.sqrt(Number(firstNum));
//     alert(value);
// }

// var firstNum = prompt("Please enter the first number.")
// const operator = prompt("Please enter your operator, +, -, / or *, ^2, square root")
// let value = 0
// if (operator === "^2") {
//     value = Number(firstNum) * Number(firstNum);
//     alert(value);
// } else if (operator === "square root") {
//     value = Math.sqrt(Number(firstNum));
//     alert(value);
// } else var secondNum = prompt("Please enter the second number.")
// if (operator === "+") {
//     value = Number(firstNum) + Number(secondNum);
//     alert(value);
// } else if (operator === "-") {
//     value = Number(firstNum) - Number(secondNum);
//     alert(value);
// } else if (operator === "/") {
//     value = Number(firstNum) / Number(secondNum);
//     alert(value);
// } else if (operator === "*") {
//     value = Number(firstNum) * Number(secondNum);
//     alert(value);
// }

// var firstNum = prompt("Please enter the first number.")
// const operator = prompt("Please enter your operator, +, -, / or *, ^2, sqrt")

// switch (operator) {
//     case "^2": 
//         alert(Number(firstNum) * Number(firstNum));
//         location.reload()
//         break;
//     case "sqrt": 
//         alert(Math.sqrt(Number(firstNum)));
//         location.reload()    
//         break;
//     default: var secondNum = prompt("Please enter the second number.")
//         switch (operator) {
//             case "+":
//                 alert(Number(firstNum) + Number(secondNum));
//                 location.reload()    
//                 break;
//             case "-": 
//                 alert(Number(firstNum) - Number(secondNum));
//                 location.reload()
//                 break;
//             case "/":
//                 alert(Number(firstNum) / Number(secondNum));
//                 location.reload()
//                 break;
//             case "*":
//                 alert(Number(firstNum) * Number(secondNum));
//                 location.reload()
//                 break;
//             default: 
//                 alert("Invalid - please re-enter")
//                 location.reload()
//                 break;
//         }
// }

// const firstNumber = parseFloat(prompt("Please enter the first number"));
// const operator = prompt("Please enter the operator: +, -, *, /, sqrt, pow");
// if (operator !== "sqrt"){
//     const secondNumber = parseFloat(prompt("Please enter the second number"));
// } 
// switch (operator) {
//     case "+":
//         alert (parseFloat(firstNumber) + parseFloat(secondNumber));
//         break;
//     case "-":
//         alert (firstNumber - secondNumber);
//         break;
//     case "*":
//         alert (firstNumber * secondNumber);
//         break;
//     case "/":
//         alert (firstNumber / secondNumber);
//         break;
//     case "sqrt":
//         alert (Math.sqrt(firstNumber));
//         break;
//     case "pow":
//         alert (firstNumber**secondNumber);
//         break;
//     default:
//         alert("Invalid operator");
//         break;
// }
// location.reload()

// var firstNum = prompt("Please enter the first number.")
// const operator = prompt("Please enter your operator, +, -, / or *, ^2, square root")
// let value = 0
// if (operator === "^2") {
//     value = Number(firstNum) * Number(firstNum);
//     alert(value);
// } else if (operator === "square root") {
//     value = Math.sqrt(Number(firstNum));
//     alert(value);
// } else var secondNum = prompt("Please enter the second number.")
// if (operator === "+") {
//     value = Number(firstNum) + Number(secondNum);
//     alert(value);
// } else if (operator === "-") {
//     value = Number(firstNum) - Number(secondNum);
//     alert(value);
// } else if (operator === "/") {
//     value = Number(firstNum) / Number(secondNum);
//     alert(value);
// } else if (operator === "*") {
//     value = Number(firstNum) * Number(secondNum);
//     alert(value);
// }

let restart = "yes"
while (restart ==="yes") {
    let mode = prompt("Please select the mode you require, main, advanced or loan.")
    switch (mode) {
        
        case "main":
            let firstNum = prompt("Please enter the first number.")
            let operator = prompt("Please enter your operator, +, -, / or *")
            let secondNum = prompt("Please enter the second number.")
            if (operator === "+") {
                alert(Number(firstNum) + Number(secondNum));
                break;
            } else if (operator === "-") {
                alert(Number(firstNum) - Number(secondNum));
                break;
            } else if (operator === "/") {
                alert(Number(firstNum) / Number(secondNum));
                break;
            } else if (operator === "*") {
                alert(Number(firstNum) * Number(secondNum));
                break;
            }
            break;
        case "advanced":
            let firstNumAdv = prompt("Please enter the first number.")
            let operatorAdv = prompt("Please enter your operator, ^2 or sqrt")    
            if (operatorAdv === "^2") {
                alert(Number(firstNumAdv) * Number(firstNumAdv));
            } else if (operatorAdv === "sqrt") {
                alert(Math.sqrt(Number(firstNumAdv)));
            }
            break;
        case "loan":
            let loanNum = prompt("Please enter the amount which you require to loan")
            let interestNum = prompt("Please input the interest amount")
            alert("The amount which you will need to pay back based on this interest rate is £" + loanNum/100*interestNum);
            break;
    }
    restart = prompt("Do you want to restart? If so, type yes.")
} 