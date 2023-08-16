//Retriving the HTML element with id name 'cals'
const input = document.getElementById("cals");

//Created a function to Solve Math operations
function Solve(char) {
  const lastChar = input.value.slice(-1);

  //Here the condition is to not to accept the two decimels (3..3) and (3.3.3)
  if (char === "." && (lastChar === "." || input.value.includes("."))) {
    return;
  } else if (input.value === "" && char !== ".") {
    input.value = "";
  }

  //Based on user input it will show it in input field
  input.value += char;
}

//Function to clear the input field
function Clear() {
  input.value = "";
}

//Function to delete the values from last
function Back() {
  input.value = input.value.slice(0, -1);
}

// //Function to calculate the result based on user input with eval
function evaluateExpression(expression) {
  try {
    const result = eval(expression);
    return result % 1 !== 0 ? result.toFixed(3) : result.toString();
  } catch (error) {
    console.error(error);
    return "Error";
  }
}

function Result() {
  input.value = evaluateExpression(input.value);
}
