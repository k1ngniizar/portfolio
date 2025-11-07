import { SiCss3, SiExpress, SiFramer, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { framework } from "../../constants/framework"

function Framework() {
  return (
    <div className={`flex items-center justify-center dark:bg-purple-900/30 bg-purple-900/10`}>
      <section id="skills" className="w-full max-w-7xl  px-2 mx-auto flex-col flex items-center justify-center mt-4 md:py-[100px] py-[50px] ">
      <h2 className="w-full text-2xl px-2 font-bold mb-4">Skills:</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center justify-center gap-4 w-full ">
       {
        framework.map(item => {
          const renderIcon = ()=>{
            switch (item.name) {
              case "javascript":
                return <SiJavascript size={30} className="dark:text-white text-purple-900 animate-pulse"/>;
              case "html":
                return <SiHtml5 size={30} className="dark:text-white text-purple-900 animate-pulse"/>;
              case "vanilla css":
                return <SiCss3 size={30} className="dark:text-white text-purple-900 animate-pulse"/>;
              case "tailwind css":
                return <SiTailwindcss size={30} className="dark:text-white text-purple-900 animate-pulse"/>;
              case "reactjs":
                return <SiReact size={30} className=" dark:text-white text-purple-900 animate-pulse"/>;
              case "nextjs":
                return <SiNextdotjs size={30} className="dark:text-white text-purple-900 animate-pulse"/>;
              case "framer":
                return <SiFramer size={30} className="dark:text-white text-purple-900 animate-pulse"/>;  
              
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
                {/* <span className="font-bold px-2">{item.level}</span> */}
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
    </div>
  )
}

export default Framework