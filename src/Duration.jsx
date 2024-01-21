
import './index.css'
import { useState } from 'react'
export default function Duration({duration,onDurationChange}) {
  return (
  <div >
  <label>Duration</label>
     <input type='number'  value={duration} onChange={onDurationChange}   />
    </div>
  )
}
