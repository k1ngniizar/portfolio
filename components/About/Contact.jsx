import { Ellipsis, Mail, MessageCircle, Phone } from 'lucide-react'

function Contact() {
  return (
    <section className='w-full max-w-3xl mx-auto flex flex-col gap-2 mt-4 '>
          <div className='flex flex-row items-center gap-2 w-full '>
            <a href="mailto:huncleniizar@gmail.com" target='_blank' className='flex-2 flex text-white items-center justify-center h-[40px]'>
              <button className=' flex text-white items-center justify-center h-[40px] w-full bg-purple-900 hover:bg-purple-900/50 rounded-lg gap-2'>
              <Mail/>
              <span className='hidden sm:block'>huncleniizar@gmail.com</span>
            </button>
            </a>
            <a href="tel:+2349027280506" target='_blank' className='flex-1 flex items-center justify-center h-[40px]'>
              <button className='flex items-center justify-center dark:text-white text-purple-900 h-[40px] w-full border border-purple-900 hover:bg-purple-900/50 rounded-lg gap-2'>
              <Phone size={16}/>
              <span  className='hidden sm:block'>09027280506</span>
            </button>
            </a>
          </div>
          <div className='flex flex-row items-center gap-2 w-full'>
            <a href="https://wa.me/qr/UAGRYFNNPTNBI1" target='_blank' className='flex-11/12 flex items-center justify-center h-[40px]'>
              <button className='flex items-center justify-center h-full w-full border border-purple-900 hover:bg-purple-900/50 dark:text-white text-purple-900 rounded-lg gap-2'>
              <MessageCircle />
              <span  className='hidden sm:block'>09027280506</span>
            </button>
            </a>
            <button className=' flex items-center justify-center h-[40px] w-[50px]  bg-purple-500 hover:bg-purple-900/50 border border-purple-900 text-white rounded-lg gap-2'>
             <Ellipsis/>
            </button>
          </div>
        </section>
  )
}

export default Contact