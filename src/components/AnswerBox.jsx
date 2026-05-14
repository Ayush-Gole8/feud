import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function AnswerBox({answer, revealed, onToggle, index}){
  const ref = useRef()
  useEffect(()=>{
    const el = ref.current
    if(revealed){
      gsap.to(el, {rotationY:0, scale:1.02, duration:0.6, ease:'power3.out'})
    } else {
      gsap.to(el, {rotationY:20, scale:1, duration:0.6, ease:'power3.out'})
    }
  },[revealed])

  return (
    <div ref={ref} className={`glass-card relative p-6 rounded-2xl cursor-pointer transform transition-transform duration-500`} onClick={onToggle}>
      <div className={`text-left ${revealed? 'revealed': ''}`}>
        <div className="text-lg font-medium">{revealed ? answer.text : '---'}</div>
        <div className="text-sm text-gray-400 mt-2">{revealed ? `${answer.points} pts` : ''}</div>
      </div>
    </div>
  )
}
