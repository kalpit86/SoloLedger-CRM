import React, { Children } from 'react'

const GlassCard = ({animation,height,width,children}) => {
  return (
<div className={`
    ${width}
    ${height}
    ${animation}
    p-6  
    isolate
    ring-1
    ring-black/5
    bg-white/10
    backdrop-blur-3xl
    rounded-2xl
    border
    flex 
    flex-col
    border-white/20
    shadow-[inset_0_0_25px_rgba(255,255,255,0.15)]
    items-center
    justify-between`}>
    {children}
</div>
  )
}

export default GlassCard
