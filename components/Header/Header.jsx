import React from 'react'

function Header() {
  
  const navitems = [
    "Projects",
    "About",
  ]
  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto px-2 bg-purple-800 sticky top-0  z-10">
      <span className="text-sm font-bold text-white">Portfolio</span>
      <div className="flex items-center justify-center gap-4">
        <nav className='w-full overflow-hidden flex gap-3 px-3 py-1 text-white '>
      {
        navitems.map((item,idx)=>{
          return(
          <a href={`#${item}`} key={idx} className={` font-bold  lg:text-lg text-sm shrink-0`}>{item}</a>
          )
        })
      }
      </nav>
      </div>
    </header>
  )
}

export default Header