import React from 'react'

function AboutIntro() {
  const approach = [
  {
    title: "User Experience",
    content: ["Design with the user's feelings in mind."]
  },
  {
    title: "Developer Experience",
    content: ["Write code that's easy for others to understand and extend."]
  },
  {
    title: "Optimization & Responsiveness",
    content: [
      "Fast performance.",
      "Seamless on all screen sizes.",
      "Built to scale."
    ]
  },
  {
    title: "Honesty",
    content: ["Deliver only what I can stand behind."]
  }
];

  return (
    <section className=' min-h-[500px] py-[100px] mx-auto max-w-7xl justify-items-center content-center'>
      <h4 className='text-3xl font-bold uppercase text-center'>Me?</h4>
      <div className=' flex sm:flex-row flex-col gap-8 items-start justify-center p-3'>
        <div className=' max-w-3xl flex-1 p-2 md:text-lg text-sm flex flex-col gap-3 items-center justify-center'>
          <p className='font-bold text-2xl w-full text-purple-600'>I Am</p>
          <p>Ebenezer Cheetham-West, a frontend developer with over one year of experience building modern, responsive web applications.</p>
          <p> My focus is on delivering user-centered, developer-friendly, and profitable solutions that help clients achieve their goals.</p>
          <p> I am passionate about identifying and solving real-world problems, as I believe that is where true value lies.</p>
          <p>To stay ahead in a fast-evolving industry, I continuously learn and adapt to the latest technologies and best practices. Guided by honesty and professionalism, I am committed to creating digital experiences that not only serve users effectively but also drive business growth.</p>
        </div>
        <div className='p-3 max-w-lg flex-1'>
         <h4 className='font-bold text-2xl text-purple-600 uppercase mb-4'>How I Build.</h4>
         <div className='flex-col flex gap-3'>
          {
            approach.map((item, idx)=>{
              return (
                <div key={idx} className='bg-purple-900/30
                 p-2 rounded-lg min-h-[100px] flex flex-col'>
                  <p className='font-black uppercase dark:text-white text-purple-900 '>{item.title}</p>
                  {
                    item.content.map((item, idx)=> <li key={idx}>{item}</li>)
                  }
                </div>
              )
            })
          }
         </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro