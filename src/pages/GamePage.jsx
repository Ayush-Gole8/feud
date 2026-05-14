import React, { useEffect, useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import AnswerGrid from '../components/AnswerGrid'
import StrikePanel from '../components/StrikePanel'
import ControlPanel from '../components/ControlPanel'
import questions from '../data/questions.json'

export default function GamePage(){
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(Array(10).fill(false))
  const [strikes, setStrikes] = useState(0)

  useEffect(()=>{
    // reset on question change
    setRevealed(Array(10).fill(false))
    setStrikes(0)
  },[index])

  const nextQuestion = ()=>{
    setIndex((i)=> (i+1) % questions.length)
  }
  const revealAll = ()=>{
    setRevealed(Array(10).fill(true))
  }
  const resetQuestion = ()=>{
    setRevealed(Array(10).fill(false))
    setStrikes(0)
  }
  const toggleReveal = (i)=>{
    setRevealed((r)=>{
      const nr = [...r]
      nr[i] = !nr[i]
      return nr
    })
  }
  const addStrike = ()=>{
    setStrikes((s)=> Math.min(3, s+1))
  }
  const resetStrikes = ()=> setStrikes(0)

  const q = questions[index]

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start">
          <div className="w-full">
            <QuestionCard text={q.question} />
            <StrikePanel strikes={strikes} onStrike={addStrike} resetStrikes={resetStrikes} />
          </div>
        </div>

        <AnswerGrid answers={q.answers} revealed={revealed} onToggle={toggleReveal} />

        <ControlPanel
          onNext={nextQuestion}
          onRevealAll={revealAll}
          onReset={resetQuestion}
        />
      </div>
    </div>
  )
}
