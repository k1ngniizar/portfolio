import { ArrowDownFromLine, Link, Link2, Link2Icon, LinkIcon, Mail, Share, Text, View, Vote } from 'lucide-react'
import React from 'react'
import { project } from '../../constants/project'

function Project({handleContact}) {
  return (
    <>
    {
      project.map(detail => {
        return (
          <div key={detail.name} className='dark:bg-purple-900/20 bg-white shadow-md border border-gray-200 dark:border-transparent mb-4 max-w-3xl p-2 rounded-sm mx-auto'>
      {/* project header */}
      <div className='p-3  lg:max-w-3xl mx-auto flex items-center justify-center gap-2'>
        <img src={detail.imageUrl} alt="avatar" width={50} height={50} className='object-cover animate-pulse rounded-full h-[50px] w-[50px] border-2 border-purple-600' />
        <div className='flex-1 h-full  flex flex-col items-start justify-start gap-1'>
          <p className='text-lg uppercase font-bold dark:text-white'>{detail.name} <span className='font-normal lowercase'>made for</span> {detail.client}</p>
          {/* <p className='text-xs text-gray-500 font-bold'>Start date: <span className=' uppercase dark:text-white text-black font-bold'>{detail.start}</span> <span className='inline-block h-1 bg-purple-900 w-1'/> End date: <span className='font-bold uppercase dark:text-white text-black'>{detail.end}</span></p> 
          <p className='text-xs text-gray-500 font-bold lg:hidden'>project type: <span className='text-xs uppercase font-bold dark:text-white text-black'>{detail.type}</span></p>*/}
        </div>
        <p className='text-xs lg:block hidden text-gray-500 font-bold'>project type: <span className='text-xs uppercase font-bold dark:text-white text-black'>{detail.type}</span></p>
        
      </div>
      <div className='p-3  lg:max-w-3xl mx-auto'>
        <div className='md:h-[300px] h-[200px] border-[2px] border-purple-800 overflow-hidden rounded-2xl relative'>
          {!detail.deployed && <div className='absolute h-full w-full bg-purple-900/50 flex items-center justify-center'><p className='text-2xl font-bold text-white animate-pulse'>coming soon...</p></div>}
          <a href={detail.link} target='_blank'>
          <img src={detail.imageUrl} alt="project image" className='h-full w-full object-cover active:opacity-70'/>
          </a>
        </div>
      </div>
      {/* project description */}
      <div className=' lg:max-w-3xl mx-auto gap-1 flex flex-col px-3 text-sm my-1'>
        <p className='text-xs lg:text-sm'><span className=' uppercase font-bold dark:text-white'>{detail.name}</span> {detail.desc.main}</p>
        <p className='text-xs lg:text-sm'>{detail.desc.sub}</p>
        <div className='flex flex-wrap gap-2 items-center justify-start'>
          {
          detail.desc.tech.map(item => <span key={item} className='bg-purple-600 text-white rounded-sm shrink-0 px-2 py-1 font-bold'>{item}</span>)
        }
        </div>
      </div>
      {/* project footer */}
      <div className='h-[60px] lg:max-w-3xl mx-auto flex items-center justify-between px-5'>
        <button onClick={handleContact} className='flex gap-2  hover:text-purple-600 p-2 rounded-lg items-center justify-evenly'>
          <Mail size={20}/>
          <span className='italic lg:text-sm text-xs'>Message me</span>
        </button>
        
        {detail.deployed ? (<a href={detail.link} target='_blank'>
          <button className='flex gap-2  p-2  rounded-lg hover:text-purple-600 items-center justify-center'>
            <Link2 size={20}/>
            <span className='italic lg:text-sm text-xs'>View project</span>
          </button>
        </a>):(<span className='italic lg:text-sm text-xs font-bold'>Coming soon...</span>)}
        
      </div>
    </div>
        )
      })
    }
    </>
  )
}

export default Project