import Header from "../components/Header/Header";
import About from "../components/About/About";
import Main from "../components/Main/Main";
import { useState } from "react";
import { contact } from "../constants/contact";
import { X } from "lucide-react";

function App() {
  const [contactMe, setContactMe] = useState(false)
  const handleContact = () =>{
    
    setContactMe(!contactMe)
  }
  return (
    <>
    {contactMe && <>
    <div onClick={handleContact} className="cursor-pointer fixed h-full w-full bg-black/40 z-10 "/>
    <div className="fixed  z-20 bg-purple-600 p-3 h-[50vh]   lg:min-h-[400px] min-h-[100px] max-w-2xl md:max-w-full max-h-[500px] rounded-t-3xl -translate-x-1/2 left-1/2 w-full bottom-0 overflow-hidden overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">Contact info:</h3>
                <button onClick={handleContact}><X/></button>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
                {
                contact.map(item => {
                  return (
                    <a key={item.title} href={item.link} target="_blank">
                      <div  className="flex items-start justify-start gap-2 dark:bg-purple-950 bg-purple-950 p-2 active:bg-purple-900/50 rounded">
                      <div className="h-10 w-10 bg-purple-600 flex items-center justify-center animate-pulse uppercase font-bold shadow-lg text-white">
                        {item.title[0]}
                      </div>
                      <div className="h-15 w-full">
                        <p className="underline font-bold text-sm lg:text-lg ">{item.name}</p>
                        <p className="font-bold text-xs dark:text-gray-400 text-gray-600">{item.title}</p>
                      </div>
                    </div>
                    </a>
                  )
                })
              }
              </div>
            </div>
    </div>
    </>}
    <Header/>
    <About handleContact={handleContact}/>
    <Main handleContact={handleContact}/>
    </>
  )
}

export default App
