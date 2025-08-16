import { project } from '../../constants/project'
import Contact from './Contact'

function About() {
  return (
    <section className='flex lg:flex-row flex-col-reverse lg:items-center justify-evenly min-h-[100dvh] px-2 bg-purple-900/10'>
      <section className="px-4  mt-1 py-1   max-w-2xl content-start">
        <h2 className="text-lg lg:text-3xl  font-bold w-full  mx-auto">Ebenezer Cheetham-West {"(k1ngniizar)"}</h2>
        <div className="w-full mx-auto  flex gap-2 items-center justify-start">
          <p className="font-bold text-xs">{project.length} <span className="text-[#a3a3a3]">projects</span></p>
          <div className="h-1 w-1 bg-purple-800"/>
          <p className="font-bold text-xs">2 <span className="text-[#a3a3a3]">Completed</span></p>
          <div className="h-1 w-1 bg-purple-800"/>
          <p className="font-bold text-xs">2 <span className="text-[#a3a3a3]">pending...</span></p>
        </div>
        <div className="lg:max-w-3xl mx-auto  flex mt-3 justify-start gap-2 items-center">
        {
          project.map((item)=>{
            return <div key={item.name} className="h-10 p-[2px] rounded-full w-10 bg-purple-800 overflow-hidden">
              <img src={item.imageUrl} alt={item.name} className='h-full w-hull object-cover rounded-full' />
            </div>
            })
        }
        </div>
        <div className="lg:max-w-3xl   mx-auto flex flex-col items-start  justify-center  mt-4 ">
          <p className='font-bold text-lg'>I’m a Frontend Developer with experience building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean, efficient, and maintainable code while focusing on performance and great user experiences.</p>
        </div>
        {/* contact */}
        <Contact/>
      </section>
      
        {/* avatar image */}
        <div className="w-[250px] overflow-hidden rounded-full h-[250px] dark:bg-black bg-white border-[5px] border-purple-800">
          <img src="/king.jpg" alt="king" className="w-full h-full object-cover" />
        </div>
      
    </section>
  )
}

export default About