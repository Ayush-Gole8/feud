import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'

export default function LandingPage(){
  const nav = useNavigate()
  const titleRef = useRef()
  useEffect(()=>{
    const el = titleRef.current
    const tl = gsap.timeline({repeat:-1, yoyo:true})
    tl.to(el, {filter: 'blur(0px)', duration: 1})
    tl.to(el, {scale:1.02, duration: 1}, 0)
    return ()=> tl.kill()
  },[])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-center">
      <h1
        ref={titleRef}
        className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-500 hover:scale-110 transition-transform duration-500 cursor-pointer"
        onClick={()=>nav('/game')}
      >
        TechFeud
      </h1>
      <p className="text-xl text-gray-400 mt-4 font-light tracking-widest">By Technical Council VIT</p>
      <button
        className="mt-8 bg-white/10 px-6 py-3 rounded-full text-lg font-semibold text-gray-100 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-lg"
        onClick={()=>nav('/game')}
      >
        Start Game
      </button>
    </div>
  )
}
