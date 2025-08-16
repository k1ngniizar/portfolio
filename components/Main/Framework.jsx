import { framework } from "../../constants/framework"

function Framework() {
  return (
    <section className="w-full p-2 flex-col flex items-center">
      <h2 className="w-full font-bold lg:text-2xl text-sm mb-4">Frameworks and libraries</h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2  gap-3">
       {
        framework.map(item => {
          return (
            <div className="border-2 border-purple-900 h-[200px] w-[150px] sm:w-[200px] lg:w-[250px] shrink-0">
              <div className="h-[80%] bg-purple-900 font-bold text-4xl uppercase flex items-center justify-center ">
                <p className="animate-pulse">{item[0]}</p>
              </div>
              <p className="font-bold lg:px-4 text-nowrap text-xs lg:text-lg uppercase">{item}</p>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Framework