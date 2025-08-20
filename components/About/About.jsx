import { project } from '../../constants/project'
import Contact from './Contact'

function About({handleContact}) {
  return (
    <section id='About' className=' mx-auto max-w-7xl flex lg:flex-row sm:flex-row flex-col-reverse sm:items-center sm:justify-center justify-evenly gap-4 sm:py-[100px] py-[50px] md:min-h-[100vh] md:max-h-[500px] px-2 bg-purple-900/10 w-full'>
      
      <section className="px-4 w-full sm:flex-2 lg:flex-1  mt-1 py-1 space-y-2  max-w-2xl content-start ">
        <h2 className="text-3xl  font-bold w-full  mx-auto">Ebenezer Cheetham-West</h2>
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
          <p className='text-lg'>I'm a Frontend Developer with experience building modern, responsive, and user-friendly web applications..</p>
        </div>
        {/* contact */}
        <Contact handleContact={handleContact}/>
      </section>
      
        {/* avatar image */}
        <div className='sm:flex-1 flex items-center justify-center gap-2'>
          <div className="w-[250px] overflow-hidden rounded-full h-[250px] dark:bg-black bg-white border-[5px] border-purple-800">
          <img src="/king.jpg" alt="king" className="w-full h-full object-cover" />
          </div>
          
        </div>
      
    </section>
  )
}

export default About