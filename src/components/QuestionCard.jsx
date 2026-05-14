import React from 'react'

export default function QuestionCard({text}){
  return (
    <div className="w-full text-center my-6">
      <div className="mx-auto max-w-3xl glass-card p-6 rounded-3xl">
        <h2 className="text-2xl md:text-4xl font-semibold text-white">{text}</h2>
      </div>
    </div>
  )
}
