
import React from 'react';
export default function InitialInvestment({initialInvestmentAmount,onInvestmentChange}) {
  return (
    <div>
      <label>Initial Investment</label>
      <input
        type='number'
        value={initialInvestmentAmount}
        onChange={onInvestmentChange}
              />
    </div>
  );
}
