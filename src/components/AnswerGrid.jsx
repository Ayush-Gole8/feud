import React from 'react'
import AnswerBox from './AnswerBox'

export default function AnswerGrid({answers, revealed, onToggle}){
  return (
    <div className="grid grid-cols-2 gap-6 mt-8">
      {answers.map((a,i)=> (
        <AnswerBox key={i} index={i} answer={a} revealed={revealed[i]} onToggle={()=>onToggle(i)} />
      ))}
    </div>
  )
}
