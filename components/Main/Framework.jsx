import { SiCss3, SiExpress, SiFramer, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { framework } from "../../constants/framework"

function Framework() {
  return (
    <section id="Skills" className="w-full max-w-7xl mx-auto flex-col flex items-center justify-center mt-4 min-h-[500px] ">
      <h2 className="w-full text-2xl px-2 font-bold mb-4">Skills:</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center justify-center gap-2 w-full ">
       {
        framework.map(item => {
          const renderIcon = ()=>{
            switch (item.name) {
              case "javascript":
                return <SiJavascript size={30} className="dark:text-white text-purple-900"/>;
              case "html":
                return <SiHtml5 size={30} className="dark:text-white text-purple-900"/>;
              case "vanilla css":
                return <SiCss3 size={30} className="dark:text-white text-purple-900"/>;
              case "tailwind css":
                return <SiTailwindcss size={30} className="dark:text-white text-purple-900"/>;
              case "reactjs":
                return <SiReact size={30} className="animate-pulse dark:text-white text-black"/>;
              case "nextjs":
                return <SiNextdotjs size={30} className="dark:text-white text-purple-900"/>;
              case "framer":
                return <SiFramer size={30} className="dark:text-white text-purple-900"/>;  
              
              default:
                break;
            }
          }
          return (
            <div key={item.name} className="bg-purple-900/30 h-fit  shrink-0 rounded overflow-hidden">
              <div className="flex p-2 items-center justify-start">
                <div className=" font-bold text-4xl uppercase flex items-center justify-center ">
                {renderIcon()}
              </div>
              <p className="font-bold lg:px-4 text-nowrap px-2 mt-1 text-xs lg:text-lg uppercase">{item.name}</p>
              </div>
              <div className="flex items-end flex-col">
                <span className="font-bold px-2">{item.level}</span>
                <div className="w-full h-2 bg-transparent">
                  <div style={{"width":item.level}} className="bg-purple-900 h-full rounded-tr-full rounded-br-full"/>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Framework