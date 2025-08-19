import { contact } from "../../constants/contact"
import { framework } from "../../constants/framework"
import { work } from "../../constants/work"

function AboutDetails() {
  return (
    <section className="px-2 mt-3 max-w-3xl mx-auto">
      <h2 className="font-bold">Roll:</h2>
      <h2 className="font-bold dark:bg-purple-900/20 bg-purple-900/10 p-2 rounded uppercase">Frontend Developer</h2>
      <div className="flex flex-col gap-2 mt-2">
        <h3 className="font-bold">Skills:</h3>
        <div className="flex gap-2 flex-wrap items-center justify-center">
          {
          framework.map(item => {
            return (
              <div key={item.name} className=" shrink-0 flex items-center justify-start gap-2 dark:bg-purple-900/20 bg-purple-900/10 p-2 rounded">
                <div className="h-10 w-10 bg-purple-600 flex items-center justify-center animate-pulse uppercase font-bold shadow-lg text-white">
                  {item.name[0]}
                </div>
                <p className="font-bold text-sm uppercase">{item.name}</p>
              </div>
            )
          })
        }
        </div>
      </div>
      
      <div className="flex flex-col gap-2 mt-2">
        <h3 className="font-bold">Work:</h3>
        {
          work.map(item => {
            return (
              <div key={item.title} className="flex items-start justify-start gap-2 dark:bg-purple-900/20 bg-purple-900/10 p-2 rounded">
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

      <div className="flex flex-col gap-2 mt-2">
        <h3 className="font-bold">Contact info:</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {
          contact.map(item => {
            return (
              <a key={item.title} href={item.link} target="_blank">
                <div  className="flex items-start justify-start gap-2 dark:bg-purple-900/20 bg-purple-900/10 p-2 active:bg-purple-900/50 rounded">
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
      
    </section>
  )
}

export default AboutDetails