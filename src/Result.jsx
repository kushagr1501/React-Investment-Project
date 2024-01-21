import React from 'react';
import './index.css';
import { calculateInvestmentResults } from './util/investment';
import { formatter } from './util/investment';

export default function Result({ initialInvestmentAmount, initialAnnualAmount, returnValue, duration }) {
  const investmentResults = calculateInvestmentResults({
    initialInvestment: parseInt(initialInvestmentAmount, 10),
    annualInvestment: parseInt(initialAnnualAmount, 10),
    expectedReturn: parseFloat(returnValue),
    duration: parseInt(duration, 10),
  });

  // console.log(initialInvestmentAmount);
  // console.log(initialAnnualAmount);
  // console.log(returnValue);
  // console.log(duration);
  // console.log(investmentResults);

  return (
    <div id="result" >
 
      <table className='center'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment value</th>
            <th>Interest (year)</th>
            <th>Total interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {investmentResults.map((value) => (
            <tr key={value.year}>
              <td>{value.year}</td>
              <td>{ formatter.format(value.valueEndOfYear)}</td>
              <td>{formatter.format(value.interest)}</td>
              <td>{formatter.format(value.totallInterest)}</td> 
              <td>{formatter.format(value.capital)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
