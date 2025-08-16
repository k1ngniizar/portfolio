import { project } from '../../constants/project'
import Contact from './Contact'

function About() {
  return (
    <>
      <section className="h-[400px] w-full relative dark:bg-purple-900/15 flex flex-col ">
        <div className="w-full h-[80%]  border-b-[5px] border-b-purple-800">
          <img src="/king.jpg" alt="king" className="w-full h-full object-cover" />
        </div>
        {/* avatar image */}
        <div className="w-[200px] bottom-5 left-10 lg:-translate-x-1/2 lg:left-[50%] overflow-hidden rounded-full h-[200px] absolute border-[5px] border-purple-800">
          <img src="/king.jpg" alt="king" className="w-full h-full object-cover" />
        </div>
      </section>
      <section className="px-4  mt-1 py-1 dark:bg-purple-900/15 ">
        <h2 className="text-lg font-bold lg:max-w-3xl  mx-auto">Ebenezer Cheetham-West {"(k1ngniizar)"}</h2>
        <div className="lg:max-w-3xl mx-auto flex gap-2 items-center justify-start">
          <p className="font-bold text-xs">{project.length} <span className="text-[#a3a3a3]">projects</span></p>
          <div className="h-1 w-1 bg-purple-800"/>
          <p className="font-bold text-xs">2 <span className="text-[#a3a3a3]">Completed</span></p>
          <div className="h-1 w-1 bg-purple-800"/>
          <p className="font-bold text-xs">2 <span className="text-[#a3a3a3]">pending...</span></p>
        </div>
        <div className="lg:max-w-3xl mx-auto flex mt-3 justify-start gap-2 items-center">
        {
          project.map((item)=>{
            return <div key={item.name} className="h-10 p-[2px] rounded-full w-10 bg-purple-800 overflow-hidden">
              <img src={item.imageUrl} alt={item.name} className='h-full w-hull object-cover rounded-full' />
            </div>
            })
        }
        </div>
        <div className="lg:max-w-3xl  mx-auto flex flex-col items-start  justify-center border border-purple-800 mt-4 p-2 rounded-lg">
          <p className="uppercase font-bold text-purple-400">God First</p>
          <li className="font-medium">Mechanical Engineer.</li>
          <li className="font-medium">Drummer.</li>
          <li className="font-medium">Frontend developer.</li>
          <li className="font-medium">Honesty, Respect and Humility.</li>
          <li className="font-medium">Mark 11:23, Isaiah 43:18-19, Romans 8:28.</li>
        </div>
        {/* contact */}
        <Contact/>
      </section>
    </>
  )
}

export default About