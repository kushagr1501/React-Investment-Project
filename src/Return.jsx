import './index.css'
import { useState } from 'react'
export default function Return({returnValue,onReturnChange}) {
  return (
    <div  >
    <label> expexted return</label>
    <input type='text' value={returnValue} onChange={onReturnChange}   />
    </div>
  )
}
