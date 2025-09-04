import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

function Header() {
  
  const navitems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact"

  ]
  const [isMenuOpen, setIsMenuOpen]= useState(false)

  useEffect(() => {
    if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
    return () => document.body.style.overflow = "auto";
    }, [isMenuOpen]);

  return (
    <div className={`flex items-center justify-center bg-purple-800 sticky top-0  z-10 px-2 py-2 `}>
      <header className="flex justify-between items-center max-w-7xl mx-auto w-full ">
      <span className="text-sm font-bold text-white">Portfolio</span>
      <div className="hidden md:flex items-center justify-center gap-4">
        <nav className='w-full overflow-hidden flex gap-4 px-3 py-1 text-white '>
      {
        navitems.map((item,idx)=>{
          return(
          <a href={`#${item}`} key={idx} className={`hover:text-purple-200 font-medium text-lg shrink-0 hover:underline`}>{item[0].toLocaleUpperCase() + item.slice(1)}</a>
          )
        })
      }
      </nav>
      </div>
      <div className='md:hidden relative border-red-600'>
        <Menu onClick={()=> setIsMenuOpen(true)} className='text-white cursor-pointer hover:text-purple-400'/>
        {
          isMenuOpen && (
            <div className=''>
              <div onClick={()=> setIsMenuOpen(false)} className='fixed inset-0 h-full w-full bg-purple-950/50 cursor-pointer' />
              <div className="flex z-20 items-center justify-center gap-4 absolute  right-0 bg-purple-900 shadow-md shadow-gray-800 min-w-[150px] rounded">
                <nav className='w-full overflow-hidden flex flex-col gap-2 px-1 py-1 text-white'>
                  {
                    navitems.map((item,idx)=>{
                      return(
                      <a onClick={()=> setIsMenuOpen(false)} href={`#${item}`} key={idx} className={`px-1 active:bg-purple-700 hover:bg-purple-600 font-bold transition-colors delay-100  border-b border-purple-700 rounded text-sm shrink-0`}>{item[0].toLocaleUpperCase() + item.slice(1)}</a>
                      )
                    })
                  }
                </nav>
              </div>
            </div>
          )
        }
      </div>
    </header>
    </div>
  )
}

export default Header