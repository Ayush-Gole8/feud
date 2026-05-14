import React from 'react'

export default function ControlPanel({onNext,onRevealAll,onReset}){
  return (
    <>
      <button onClick={onReset} className="fixed bottom-10 left-10 bg-white/20 px-6 py-3 rounded-full text-lg font-semibold text-gray-100 hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-lg">Reset Question</button>
      <button onClick={onRevealAll} className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white/20 px-6 py-3 rounded-full text-lg font-semibold text-gray-100 hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-lg">Reveal All</button>
      <button onClick={onNext} className="fixed bottom-10 right-10 bg-white/20 px-6 py-3 rounded-full text-lg font-semibold text-gray-100 hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-lg">Next Question</button>
    </>
  )
}
