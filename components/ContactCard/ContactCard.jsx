
import { X } from "lucide-react";
import { contact } from "../../constants/contact";
import { FaEnvelope, FaGithubSquare,  FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

function ContactCard({contactMe, handleContact}) {
  return (
    <>
      {contactMe && <>
      <div onClick={handleContact} className="cursor-pointer fixed h-[100vh] w-[100vw] bg-purple-900/40 backdrop-blur-xs z-10 "/>
      <div className="fixed  z-20 bg-purple-900 p-3 h-[50vh]   lg:min-h-[400px] min-h-[100px] max-w-2xl md:max-w-full max-h-[500px] rounded-t-3xl -translate-x-1/2 left-1/2 w-full bottom-0 overflow-hidden overflow-y-scroll scrollbar-hide">
        <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white">Contact info:</h3>
                  <button className="text-white" onClick={handleContact}><X/></button>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
                  {
                  contact.map(item => {
                    const renderIcon = ()=>{
                      switch (item.icon) {
                        case "faGithub":
                          return <FaGithubSquare size={16} className="animate-pulse"/>;
                        case "faTwitter":
                          return <FaTwitterSquare size={16} className="animate-pulse"/>;
                        case "faWhatsapp":
                          return <FaWhatsappSquare size={16} className="animate-pulse"/>;
                        case "faMail":
                          return <FaEnvelope size={14} className="animate-pulse"/>;
                        case "faPhone":
                          return <FaPhone size={14} className="animate-pulse"/>;
                        
                      
                        default:
                          break;
                      }
                    }
                    return (
                      <a key={item.title} href={item.link} target="_blank">
                        <div  className="flex items-start justify-start gap-2 dark:bg-purple-950 bg-purple-950 p-2 active:bg-purple-900/50 rounded">
                        <div className="flex items-center justify-center uppercase font-bold shadow-lg text-white">
                          {renderIcon()}
                        </div>
                        <div className="h-15 w-full">
                          <p className="underline font-bold text-sm lg:text-lg text-white">{item.name}</p>
                          <p className="font-bold text-xs text-gray-400 ">{item.title}</p>
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
    </>
  )
}

export default ContactCard


      // <div className="flex flex-col gap-2 mt-2">
      //   <h3 className="font-bold">Contact info:</h3>
      //   <div className="grid md:grid-cols-2 gap-2">
      //     {
      //     contact.map(item => {
      //       const renderIcon = ()=>{
      //         switch (item.icon) {
      //           case "faGithub":
      //             return <FaGithubSquare size={24}/>;
      //           case "faTwitter":
      //             return <FaTwitterSquare size={24}/>;
      //           case "faWhatsapp":
      //             return <FaWhatsappSquare size={24}/>;
      //           case "faMail":
      //             return <FaEnvelope size={20}/>;
      //           case "faPhone":
      //             return <FaPhone size={20}/>;
                
              
      //           default:
      //             break;
      //         }
      //       }
      //       return (
      //         <a key={item.title} href={item.link} target="_blank">
      //           <div  className="flex items-start justify-start gap-2 dark:bg-purple-900/20 bg-purple-900/10 p-2 active:bg-purple-900/50 rounded">
      //           <div className="h-10 w-10 bg-purple-600 flex items-center justify-center animate-pulse uppercase font-bold shadow-lg text-white">
      //            {renderIcon()}
      //           </div>
      //           <div className="h-15 w-full">
      //             <p className="underline font-bold text-sm lg:text-lg ">{item.name}</p>
      //             <p className="font-bold text-xs dark:text-gray-400 text-gray-600">{item.title}</p>
      //           </div>
      //         </div>
      //         </a>
      //       )
      //     })
      //   }
      //   </div>
      // </div>