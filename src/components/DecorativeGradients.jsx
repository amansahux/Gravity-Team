import React from 'react'

const DecorativeGradients = () => {
  return (
   <>
   {/* Decorative Corner Gradients */}
   <div className="absolute top-[10%] left-[20%] w-10 h-10 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-full blur-lg opacity-40" />
      <div className="absolute top-[10%] right-[20%] w-10 h-10 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-full blur-lg opacity-40" />
      <div className="absolute bottom-[15%] right-[25%] w-10 h-10 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-full blur-lg opacity-40" />
      <div className="absolute bottom-[15%] left-[25%] w-10 h-10 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-full blur-lg opacity-40" /></>
  )
}

export default DecorativeGradients
