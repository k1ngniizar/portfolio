import { SiCss3, SiExpress, SiFramer, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { framework } from "../../constants/framework"

function Framework() {
  return (
    <section className="w-full p-2 flex-col flex items-center ">
      <h2 className="w-full font-bold lg:text-2xl text-sm mb-4">Skills:</h2>
      <div className="flex flex-wrap items-center justify-center gap-8 w-full px-1">
       {
        framework.map(item => {
          const renderIcon = ()=>{
            switch (item.name) {
              case "javascript":
                return <SiJavascript size={30} className="animate-pulse"/>;
              case "html":
                return <SiHtml5 size={30} className="animate-pulse"/>;
              case "vanilla css":
                return <SiCss3 size={30} className="animate-pulse"/>;
              case "tailwind css":
                return <SiTailwindcss size={30} className="animate-pulse"/>;
              case "reactjs":
                return <SiReact size={30} className="animate-pulse"/>;
              case "nextjs":
                return <SiNextdotjs size={30} className="animate-pulse"/>;
              case "framer":
                return <SiFramer size={30} className="animate-pulse"/>;  
              
              default:
                break;
            }
          }
          return (
            <div key={item.name} className="border-2 border-purple-900 max-w-[350px] md:max-w-[300px] sm:max-w-[350px] w-full h-fit  shrink-0">
              <div className="h-[150px] bg-purple-900 font-bold text-4xl uppercase flex items-center justify-center ">
                {renderIcon()}
              </div>
              <p className="font-bold lg:px-4 text-nowrap px-2 mt-1 text-xs lg:text-lg uppercase">{item.name}</p>
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