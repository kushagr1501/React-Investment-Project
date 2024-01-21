
import './index.css'
import { useState } from 'react'
export default function AnnualInvestment({initialAnnualAmount,onAnnualInvestmentChange}) {

    return (
        <div>
    <label>AnnualInvestment</label>
   <input type='number' required value={initialAnnualAmount} onChange={onAnnualInvestmentChange}/>
        </div>
    )
}
