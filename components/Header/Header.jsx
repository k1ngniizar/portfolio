import React from 'react'

function Header() {
  return (
    <header className="flex justify-between items-center px-2 py-2 bg-purple-800">
      <span className="text-sm font-bold text-white">Portfolio</span>
      <div className="flex items-center justify-center gap-4">
        <div className="h-5 w-5 bg-black/40 rounded-full animate-pulse"/>
        <div className="h-5 w-5 bg-black/40 rounded-full animate-pulse"/>
        <div className="h-5 w-5 bg-black/40 rounded-full animate-pulse"/>
      </div>
    </header>
  )
}

export default Header