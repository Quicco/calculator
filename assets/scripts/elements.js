let operator = "";
let previousValue = "";
let currentValue = "";
let result = "";

const display = document.getElementsByClassName("display");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");

const allBtns = document.querySelectorAll("#btn");

const decimalBtn = document.getElementById("decimal");
const negateBtn = document.getElementById("negate");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");

// Add a click event, for all buttons
allBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (e.target.className === "number") {
      // Sends the value of the button to the handleNumber function
      handleNumber(e.target.textContent);
      currentOperand.textContent = currentValue;
    } else if (e.target.className === "operation") {
      handleOperator(e.target.textContent);
      // If the display is empty, you can't click an operator
      if (!previousValue) {
        return;
        // If the display already has an operator, you can't add another operator
      } else if (previousOperand.textContent === operator) {
        return;
      }
      previousOperand.textContent = previousValue + " " + operator;
      currentOperand.textContent = currentValue;
    }
  })
);

// When you click on the equal button, you call the handleResult function
equalBtn.addEventListener("click", handleResult);
// When you click on the AC button, you call the resetInput function
clearBtn.addEventListener("click", handleclearInput);

decimalBtn.addEventListener("click", handleDecimal);
negateBtn.addEventListener("click", handleNegate);

//Blioff was here :D
