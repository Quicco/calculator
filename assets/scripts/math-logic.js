// Sets the currentValue equal to the button pressed
function handleNumber(num) {
  currentValue += num;
}
// Sets the operator equal to the operator pressed
function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
  // console.log(operator);
}

// Depending on the operator pressed, do different calculations
function handleResult() {
  if (
    !operator ||
    !previousOperand.textContent ||
    !currentOperand.textContent
  ) {
    return;
  }
  handleCalculation(operator);
  // console.log(result);
}

// Calculates the result, depending on which operator was chosen
function handleCalculation(operator) {
  currentValue = Number(currentValue);
  previousValue = Number(previousValue);

  if (operator === '+') {
    result = previousValue + currentValue;
  } else if (operator === '−') {
    result = previousValue - currentValue;
  } else if (operator === '×') {
    result = previousValue * currentValue;
  } else if (operator === '÷') {
    result = previousValue / currentValue;
  }

  currentValue = roundNumber(result);
  previousOperand.textContent = '';
  currentOperand.textContent = currentValue;
}

function roundNumber(result) {
  return Math.round(result * 1000) / 1000;
}

// Sets the values to empty strings
function handleclearInput() {
  operator = '';
  previousValue = '';
  currentValue = '';
  previousOperand.textContent = previousValue;
  currentOperand.textContent = currentValue;
}

function handleDecimal() {
  // if the currentValue String doesnn't have a '.' in it
  // insert a dot after the currentValue
  if (!currentValue.includes(decimal)) {
    currentValue += decimal;
  }

  currentOperand.textContent = currentValue;
}

function handleNegate() {
  // code goes here
  if (currentValue > 0) {
    currentValue = '-' + currentValue;
    currentOperand.textContent = currentValue;
  } else if (currentValue < 0) {
    currentValue = Math.abs(currentValue);
    currentOperand.textContent = currentValue;
  }
}
