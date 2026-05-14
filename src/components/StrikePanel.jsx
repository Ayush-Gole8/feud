import React from 'react'
import { gsap } from 'gsap'

export default function StrikePanel({strikes, onStrike, resetStrikes}){
  const handleClick = ()=>{
    onStrike()
  }
  return (
    <div className="flex justify-end items-center gap-3 mt-4">
      <div className="flex items-center gap-3">
        {[0,1,2].map(i=> (
          <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center ${i<strikes? 'bg-red-500 text-white':'bg-white/10'}`} onClick={handleClick}>
            {i<strikes? '❌' : '⚪'}
          </div>
        ))}
        <button className="ml-4 text-sm text-gray-400" onClick={resetStrikes}>Reset</button>
      </div>
    </div>
  )
}
