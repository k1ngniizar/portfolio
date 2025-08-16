import { contact } from "../../constants/contact"
import { education } from "../../constants/education"
import { framework } from "../../constants/framework"
import { work } from "../../constants/work"

function AboutDetails() {
  return (
    <section className="px-2 mt-3 max-w-3xl mx-auto">
      <h2 className="font-bold">Name:</h2>
      <h2 className="font-medium dark:bg-purple-900/20 bg-purple-900/10 p-2 rounded">Ebenezer Cheetham-West</h2>
      <div className="flex flex-col gap-2 mt-2">
        <h3 className="font-bold">Skills:</h3>
        <div className="flex gap-2 flex-wrap items-center justify-center">
          {
          framework.map(item => {
            return (
              <div key={item} className=" shrink-0 flex items-center justify-start gap-2 dark:bg-purple-900/20 bg-purple-900/10 p-2 rounded">
                <div className="h-10 w-10 bg-purple-600 flex items-center justify-center animate-pulse uppercase font-bold shadow-lg">
                  {item[0]}
                </div>
                <p className="font-bold text-sm uppercase">{item}</p>
              </div>
            )
          })
        }
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <h3 className="font-bold">Contact info:</h3>
        {
          contact.map(item => {
            return (
              <div key={item.title} className="flex items-start justify-start gap-2 dark:bg-purple-900/20 bg-purple-900/10 p-2 rounded">
                <div className="h-10 w-10 bg-purple-600 flex items-center justify-center animate-pulse uppercase font-bold shadow-lg">
                  {item.title[0]}
                </div>
                <div className="h-15 w-full">
                  <p className="font-bold lg:text-sm text-xs">{item.name}</p>
                  <p className="font-bold text-xs text-gray-400">{item.title}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      
      <div className="flex flex-col gap-2 mt-2">
        <h3 className="font-bold">Work:</h3>
        {
          work.map(item => {
            return (
              <div key={item.title} className="flex items-start justify-start gap-2 dark:bg-purple-900/20 bg-purple-900/10 p-2 rounded">
                <div className="h-10 w-10 bg-purple-600 flex items-center justify-center animate-pulse uppercase font-bold shadow-lg">
                  {item.title[0]}
                </div>
                <div className="h-15 w-full">
                  <p className="font-bold lg:text-sm text-xs">{item.title}</p>
                  <p className="font-bold text-xs text-gray-400">{item.role}</p>
                  <p className="font-bold text-xs text-gray-400">{item.duration}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <h3 className="font-bold">Education:</h3>
        {
          education.map(item => {
            return (
              <div key={item.title} className="flex items-start justify-start gap-2 dark:bg-purple-900/20 bg-purple-900/10 p-2 rounded">
               <div className="h-10 w-10 bg-purple-600 flex items-center justify-center animate-pulse uppercase font-bold shadow-lg">
                  {item.name[0]}
                </div>
                <div className="h-15 w-full">
                  <p className="font-bold lg:text-sm text-xs">{item.name}</p>
                  <p className="font-bold text-xs text-gray-400">{item.duration}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default AboutDetails