import React from "react";

function Result(props){
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    return(<>
        {/* Show the table with results if yearlyData is available */}
        
        
          <table className="result">
            <thead>
              <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested capital</th>
              </tr>
            </thead>
            <tbody>
              {props.yearlyData.map((data) => (
                <tr key={data.year}>
                  <td>{data.year}</td>
                  <td>{formatter.format(data.savingsEndOfYear)}</td>
                  <td>{formatter.format(data.yearlyInterest)}</td>
                  <td>{formatter.format(data.savingsEndOfYear-props.initial-data.yearlySavings*data.year)}</td>
                  <td>{formatter.format(props.initial + data.yearlySavings*data.year)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>);
}

export default Result;