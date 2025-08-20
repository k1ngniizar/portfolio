import { FaGithubSquare, FaTwitterSquare, FaWhatsappSquare, FaEnvelope } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"
import { contact } from "../../constants/contact"
import { work } from "../../constants/work"
import Framework from "./Framework"
import Project from "./Project"
import AboutIntro from "../About/AboutIntro"

function AboutDetails({handleContact}) {
  return (
    <section className=" px-2 mt-3 max-w-3xl lg:max-w-full mx-auto">
      <AboutIntro/>
      <Framework/>
      <Project handleContact={handleContact}/>
      <div className="flex justify-start flex-col gap-4 py-[50px] md:py-[100px] bg-purple-900/10 sm:px-2  max-w-7xl mx-auto">
        <h3 className="font-bold text-2xl">Work:</h3>
        {
          work.map(item => {
            return (
              <div key={item.title} className="flex items-start justify-start gap-2 bg-purple-900/30 p-2 rounded ">
                <div className="h-10 w-10 bg-purple-600 flex items-center justify-center animate-pulse uppercase font-bold shadow-lg text-white">
                  {item.title[0]}
                </div>
                <div className="h-15 w-full">
                  <p className="font-bold lg:text-sm text-sm">{item.title}</p>
                  <p className="font-bold text-xs dark:text-gray-400 text-gray-600">{item.role}</p>
                  <p className="font-bold text-xs dark:text-gray-400 text-gray-600">{item.duration}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      
      <div className="flex flex-col gap-2 py-[50px] md:py-[100px] sm:px-2 justify-center max-w-7xl mx-auto">
        <h3 className="font-bold text-2xl">Contact info:</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {
          contact.map(item => {
            const renderIcon = ()=>{
              switch (item.icon) {
                case "faGithub":
                  return <FaGithubSquare size={16}/>;
                case "faTwitter":
                  return <FaTwitterSquare size={16}/>;
                case "faWhatsapp":
                  return <FaWhatsappSquare size={16}/>;
                case "faMail":
                  return <FaEnvelope size={13}/>;
                case "faPhone":
                  return <FaPhone size={13}/>;
                
              
                default:
                  break;
              }
            }
            return (
              <a key={item.title} href={item.link} target="_blank">
                <div  className="flex items-start justify-start gap-2  bg-purple-900/30  active:bg-purple-900/50 p-2 rounded">
                <div className=" flex items-center justify-center animate-pulse uppercase font-bold shadow-lg dark:text-white text-purple-900">
                 {renderIcon()}
                </div>
                <div className=" w-full">
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
      
    </section>
  )
}

export default AboutDetails