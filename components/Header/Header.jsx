import { Menu, X } from 'lucide-react'
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
    <>
    <div className={`flex items-center justify-center dark:bg-purple-900/30 bg-purple-900/10 backdrop-blur-sm sticky top-0  z-10 px-2 py-2 `}>
      <header className="flex justify-between items-center max-w-7xl mx-auto w-full ">
      <span className="text-sm font-bold dark:text-white">Portfolio</span>
      <div className="hidden md:flex items-center justify-center gap-4">
        <nav className='w-full overflow-hidden flex gap-4 px-3 py-1 dark:text-white '>
      {
        navitems.map((item,idx)=>{
          return(
          <a href={`#${item}`} key={idx} className={`hover:text-purple-200 font-medium text-lg  shrink-0 hover:underline`}>{item[0].toLocaleUpperCase() + item.slice(1)}</a>
          )
        })
      }
      </nav>
      </div>
      <div className='md:hidden relative '>
        <Menu onClick={()=> setIsMenuOpen(true)} className='dark:text-white cursor-pointer hover:text-purple-400'/>
      </div>
    </header>
    </div>
    {
          isMenuOpen && (
            <div
            className="flex border flex-col fixed  w-full h-full bottom-0 left-0 right-0 top-0 z-50 sm:hidden">
            <div className="w-full h-full bg-purple-900/50 backdrop-blur-sm inset-0 absolute" />
            <button onClick={() => setIsMenuOpen(false)}  className="absolute top-5 right-5">
              <X  className="hover:scale-125  text-white  hover:text-purple-400 active:text-purple-700 transition-all" />
            </button>
            <div className="z-10 flex-col w-1/2 h-full flex gap-4 py-4 px-4 dark:bg-black/70 bg-purple-900/70 backdrop-blur-sm">
              <h4 className="font-black border-b text-white border-b-purple-700">Ebenezer West</h4>
              <nav className='w-full overflow-hidden flex flex-col gap-4 px-1 py-1 text-white'>
                  {
                    navitems.map((item,idx)=>{
                      return(
                      <a onClick={()=> setIsMenuOpen(false)} href={`#${item}`} key={idx} className={`px-1 active:text-purple-700 hover:text-purple-600 font-bold transition-colors delay-100   rounded text-lg shrink-0`}>{item[0].toLocaleUpperCase() + item.slice(1)}</a>
                      )
                    })
                  }
                </nav>
            </div>
          </div>
          )
        }
    </>
  )
}

export default Header