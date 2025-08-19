import { useState } from 'react'
import Project from './Project'
import Framework from './Framework';
import AboutDetails from './AboutDetails';

function Main({handleContact}) {
  const [currentTab, setCurrentTab] = useState("Projects")

  const renderTab = ()=>{
    switch (currentTab) {
      case "Projects":
        return <Project handleContact={handleContact}/>;
      case "About":
        return <AboutDetails/>;
      case "Frameworks & Libraries":
        return <Framework/>  
      default:
        return <Project handleContact={handleContact}/>;
    }
  }
  const navitems = [
    "Projects",
    "About",
    "Frameworks & Libraries"
  ]
  return (
    <>
      <nav className='sticky top-0 w-full overflow-hidden flex gap-3 px-3 my-2 py-3 dark:bg-purple-900 bg-white z-10'>
      {
        navitems.map((item,idx)=>{
          const isCurrentTab = item === currentTab;
          return(
          <button key={idx} onClick={()=> setCurrentTab(item)} className={`${isCurrentTab ? "border-b-2 dark:border-b-white border-b-purple-800 dark:text-white text-purple-500 font-bold":"dark:text-[#a3a3a3] font-normal"} lg:text-lg text-sm shrink-0`}>{item}</button>
          )
        })
      }
      </nav>

      <div className='min-h-[100vh] py-4'>
      {renderTab()}
      </div>
      
    </>
  )
}

export default Main