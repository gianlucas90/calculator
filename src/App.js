import React, { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  // Set the initial states of the displayed value
  const [valueDisplayed, updValueDisplayed] = useState(() => "0");
  // Set the initial states of the operands
  const [operands, updOperands] = useState(() => []);

  const handleClick = (e) => {
    const testRegexDecimal = /\.$|\.\d{1,}$/;
    const testRegexOperatorAdd = /(\+\s)$/;
    const testRegexOperatorSubtract = /(\-\s)$/;
    const testRegexOperatorMultiply = /(\*\s)$/;
    const testRegexOperatorDivide = /(\/\s)$/;
    const matchDoubleOperands = /([\+\-\*\/]\s){1,}[\+\*\/]/g;
    const regexReplacement = /[\+\*\/]$/g;

    if (valueDisplayed == "0") {
      updValueDisplayed("");
    }
    switch (e.target.id) {
      //Numbers
      case "zero":
        updValueDisplayed((prevValue) => prevValue + "0");
        break;
      case "one":
        updValueDisplayed((prevValue) => prevValue + "1");
        break;
      case "two":
        updValueDisplayed((prevValue) => prevValue + "2");
        break;
      case "three":
        updValueDisplayed((prevValue) => prevValue + "3");
        break;
      case "four":
        updValueDisplayed((prevValue) => prevValue + "4");
        break;
      case "five":
        updValueDisplayed((prevValue) => prevValue + "5");
        break;
      case "six":
        updValueDisplayed((prevValue) => prevValue + "6");
        break;
      case "seven":
        updValueDisplayed((prevValue) => prevValue + "7");
        break;
      case "eight":
        updValueDisplayed((prevValue) => prevValue + "8");
        break;
      case "nine":
        updValueDisplayed((prevValue) => prevValue + "9");
        break;
      // Operators
      case "add":
        if (!testRegexOperatorAdd.test(valueDisplayed)) {
          updValueDisplayed((prevValue) => prevValue + " + ");
        }
        break;
      case "subtract":
        if (!testRegexOperatorSubtract.test(valueDisplayed)) {
          updValueDisplayed((prevValue) => prevValue + " - ");
        }
        break;
      case "multiply":
        if (!testRegexOperatorMultiply.test(valueDisplayed)) {
          updValueDisplayed((prevValue) => prevValue + " * ");
        }
        break;
      case "divide":
        if (!testRegexOperatorDivide.test(valueDisplayed)) {
          updValueDisplayed((prevValue) => prevValue + " / ");
        }
        break;
      // clear
      case "clear":
        updValueDisplayed("0");
        break;
      // Equals
      case "equals":
        const spaceRemoved = valueDisplayed.replace(/\s{2,}/g, " ");
        const matchOperands = spaceRemoved.match(matchDoubleOperands);

        if (matchOperands) {
          const matchOperandsString = matchOperands.toString();
          const replacement = matchOperandsString.match(regexReplacement);
          const final = spaceRemoved.replace(matchOperandsString, replacement);
          updValueDisplayed(evaluate(final));
        } else {
          updValueDisplayed(evaluate(spaceRemoved));
        }
        break;
      // Decimal
      case "decimal":
        if (!testRegexDecimal.test(valueDisplayed)) {
          updValueDisplayed((prevValue) => prevValue + ".");
        }
        break;
    }
  };

  return (
    <div className="App">
      <div id="display">{valueDisplayed}</div>
      <div id="clear" className="btn" onClick={handleClick}>
        Ac
      </div>
      <div id="add" className="btn btn-operator" onClick={handleClick}>
        +
      </div>
      <div id="subtract" className="btn btn-operator" onClick={handleClick}>
        -
      </div>
      <div id="multiply" className="btn btn-operator" onClick={handleClick}>
        x
      </div>
      <div id="divide" className="btn btn-operator" onClick={handleClick}>
        /
      </div>
      <div id="equals" className="btn" onClick={handleClick}>
        =
      </div>
      <div id="decimal" className="btn btn-number" onClick={handleClick}>
        .
      </div>
      <div id="zero" className="btn btn-number" onClick={handleClick}>
        0
      </div>
      <div id="one" className="btn btn-number" onClick={handleClick}>
        1
      </div>
      <div id="two" className="btn btn-number" onClick={handleClick}>
        2
      </div>
      <div id="three" className="btn btn-number" onClick={handleClick}>
        3
      </div>
      <div id="four" className="btn btn-number" onClick={handleClick}>
        4
      </div>
      <div id="five" className="btn btn-number" onClick={handleClick}>
        5
      </div>
      <div id="six" className="btn btn-number" onClick={handleClick}>
        6
      </div>
      <div id="seven" className="btn btn-number" onClick={handleClick}>
        7
      </div>
      <div id="eight" className="btn btn-number" onClick={handleClick}>
        8
      </div>
      <div id="nine" className="btn btn-number" onClick={handleClick}>
        9
      </div>
    </div>
  );
}

export default App;
