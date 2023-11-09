import React, { useState } from "react";

function InvestForm(props) {
  const [userInput, setuserInput] = useState({
    currentSavings: "",
    yearlySavings: "",
    expectedReturn: "",
    investmentDuration: "",
  });

  const [yearlyData, setYearlyData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput);
    props.sendDataToParent(userInput.currentSavings);

    // Calculate the yearlyData and update the state
    const yearlyData = calculateYearlyData(userInput);
    setYearlyData(yearlyData);

    console.log("Form submitted:");
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserInput((prevFormData) => ({
      ...prevFormData,
      [name]: name === "expectedReturn" ? parseFloat(value) : parseInt(value, 10),
    }));
  };

  const handleReset = () => {
    setuserInput({
      currentSavings: "",
      yearlySavings: "",
      expectedReturn: "",
      investmentDuration: "",
    });

    setYearlyData([]); // Reset the yearlyData state when the form is reset
  };

  // Calculate the yearlyData based on user input
  const calculateYearlyData = (userInput) => {
    const yearlyData = [];
    let currentSavings = userInput.currentSavings;
    const yearlySavings = userInput.yearlySavings;
    const expectedReturn = userInput.expectedReturn / 100;
    const investmentDuration = userInput.investmentDuration;

    // The below code calculates yearly results (total savings, interest, etc.)
    for (let i = 0; i < investmentDuration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlySavings;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlySavings: yearlySavings,
      });
    }
 props.data(yearlyData);
 console.log(props.handleFormSubmit);
    return yearlyData;
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              name="currentSavings"
              value={userInput.currentSavings}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              name="yearlySavings"
              value={userInput.yearlySavings}
              onChange={handleChange}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              name="expectedReturn"
              value={userInput.expectedReturn}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              name="investmentDuration"
              value={userInput.investmentDuration}
              onChange={handleChange}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>

    </div>
  );
}

export default InvestForm;
