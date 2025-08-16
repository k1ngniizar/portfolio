import { Ellipsis, Mail, MessageCircle, Phone } from 'lucide-react'

function Contact() {
  return (
    <section className='lg:max-w-2xl mx-auto flex flex-col gap-2 mt-4'>
          <div className='flex lg:flex-row flex-col items-center gap-2'>
            <a href="mailto:huncleniizar@gmail.com" target='_blank' className='lg:flex-2 flex text-white items-center justify-center h-[40px] w-full'>
              <button className='lg:flex-2 flex text-white items-center justify-center h-[40px] w-full bg-purple-900 hover:bg-purple-900/50 rounded-lg gap-2'>
              <Mail/>
              <span>huncleniizar@gmail.com</span>
            </button>
            </a>
            <a href="tel:+2349027280506" target='_blank' className='lg:flex-1 flex items-center justify-center h-[40px] w-full'>
              <button className='lg:flex-1 flex items-center justify-center dark:text-white text-purple-900 h-[40px] w-full border border-purple-900 hover:bg-purple-900/50 rounded-lg gap-2'>
              <Phone size={16}/>
              <span>09027280506</span>
            </button>
            </a>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-2'>
            <a href="https://wa.me/qr/UAGRYFNNPTNBI1 " target='_blank' className='lg:flex-11/12 flex items-center justify-center h-[40px] w-full'>
              <button className='lg:flex-11/12 flex items-center justify-center h-[40px] w-full border border-purple-900 hover:bg-purple-900/50 dark:text-white text-purple-900 rounded-lg gap-2'>
              <MessageCircle />
              <span>09027280506</span>
            </button>
            </a>
            <button className=' flex items-center justify-center h-[40px] lg:w-[50px] w-full bg-purple-500 hover:bg-purple-900/50 border border-purple-900 text-white rounded-lg gap-2'>
             <Ellipsis/>
            </button>
          </div>
        </section>
  )
}

export default Contact