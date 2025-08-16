import { framework } from "../../constants/framework"

function Framework() {
  return (
    <section className="w-full p-2 flex-col flex items-center">
      <h2 className="w-full font-bold lg:text-2xl text-sm mb-4">Frameworks and libraries</h2>
      <div className="flex flex-wrap items-center justify-center gap-3">
       {
        framework.map(item => {
          return (
            <div className="border-2 border-purple-900 max-w-[350px] w-full h-fit  shrink-0">
              <div className="h-[150px] bg-purple-900 font-bold text-4xl uppercase flex items-center justify-center ">
                <p className="animate-pulse">{item.name[0]}</p>
              </div>
              <p className="font-bold lg:px-4 text-nowrap px-2 mt-1 text-xs lg:text-lg uppercase">{item.name}</p>
              <div className="flex items-end flex-col">
                <span className="font-bold px-2">{item.level}</span>
                <div className="w-full h-2 bg-transparent">
                  <div style={{"width":item.level}} className="bg-purple-600 h-full rounded-tr-full rounded-br-full"/>
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