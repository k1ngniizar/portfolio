import { project } from '../../constants/project'
import Contact from './Contact'

function About({handleContact}) {
  return (
    <section className='flex lg:flex-row flex-col-reverse lg:items-center justify-center gap-4 lg:max-h-[800px]  h-[100vh] max-h-[500px] px-2 bg-purple-900/10 w-full'>
      <section className="px-4 w-full  mt-1 py-1 space-y-2  max-w-2xl content-start ">
        <h2 className="text-lg lg:text-3xl  font-bold w-full  mx-auto">Ebenezer Cheetham-West</h2>
        {/* <div className="w-full mx-auto  flex gap-2 items-center justify-start">
          <p className="font-bold text-xs">{project.length} <span className="text-[#a3a3a3]">projects</span></p>
          <div className="h-1 w-1 bg-purple-800"/>
          <p className="font-bold text-xs">2 <span className="text-[#a3a3a3]">Completed</span></p>
          <div className="h-1 w-1 bg-purple-800"/>
          <p className="font-bold text-xs">2 <span className="text-[#a3a3a3]">pending...</span></p>
        </div> */}
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
          <p className=''>I’m a Frontend Developer with experience building modern, responsive, and user-friendly web applications..</p>
        </div>
        {/* contact */}
        <Contact handleContact={handleContact}/>
      </section>
      
        {/* avatar image */}
        <div className=' flex items-center justify-center gap-2'>
          <div className="lg:w-[250px] w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] overflow-hidden rounded-full lg:h-[250px] dark:bg-black bg-white border-[5px] border-purple-800">
          <img src="/king.jpg" alt="king" className="w-full h-full object-cover" />
        </div>
        <div className='flex-1 lg:hidden flex flex-col gap-4'>
            {
              Array.from({length:4}).map((_,idx)=> {
                return <div key={idx} className='animate-pulse bg-purple-900/50 w-full h-2'/>
              } )
            }
          </div>
        </div>
      
    </section>
  )
}

export default About