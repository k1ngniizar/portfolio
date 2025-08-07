import { Copy, Copyright, Link, Locate, LocateFixed, MapIcon, MessageSquare, Phone, Pin, Pointer, } from "lucide-react";

function App() {

  return (
    <>
    <div className="w-full bg-black text-white">
      {/* <div>{JSON.stringify(user)}</div> */}
      {/* introduction */}
      <div className="w-full flex items-center justify-start gap-8 h-[500px] p-5 bg-gradient-to-br from-[#01015b] from-5% via-[#010132] via-10% to-black to-90%  overflow-hidden">
        <div className="w-[582px] h-[393px] flex flex-col gap-6">
          <h1 className="text-6xl leading-[100%] font-black">
            First thing make I introduce me! {"(k1ng)"}
          </h1>
          <p>
            I am a frontend developer with a focus on creating exceptional digital experiences that are
            fast, accessible, visually appealing, and responsive.
          </p>
          <div className="w-full flex gap-4 ">
            <div className="w-full h-[24px] flex items-center justify-start gap-2">
              <Pin color="green"/> <p>River State Port-Harcourt, Nigeria.</p>
            </div>
            <div className="w-full h-[24px] flex items-center justify-start gap-2">
              <div className="w-2 h-2 rounded-full bg-green-600" />{" "}
              <p>Available for new projects..</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden bg-gray-800 h-full border border-purple-950 flex-1 rounded-[120px] p-10 -rotate-45">
          <img width={300} height={300} alt="profile picture" src="/king.jpg" className=" h-full rotate-45 w-full rounded-full object-top object-cover"/>
        </div>
      </div>
      {/* experience */}
      <div className=" px-5 py-15 gap-8 w-full flex flex-col bg-gradient-to-tl from-[#01012c] from-5% via-[#010132] via-10% to-black to-90% ">
        <div className="flex flex-col items-center p-2 gap-4">
          <h2 className="text-4xl font-bold">
            Why I am the best for the job?
          </h2>
          <p className="flex-1 text-lg tracking-normal font-normal">
            I began my journey as a web developer in 2023 and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Two years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as React, Next.js, TypeScript, Tailwindcss,
            Supabase and much more. I innovate not just for money but also with love and dedication, putting and giving my best at all times. I am easy to work with, whether directly with a client or with a team to achieve all goals and desired outcomes.
          </p>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center gap-6 flex-col ">
            <h4 className="text-2xl font-bold">Work experience:</h4>
            <div className=" grid grid-cols-2 gap-8">
              <li className="">
                Intern at Bromuno{" "}
                <span className="font-bold text-[#a3a3a3] ">2024 - 2025</span>
              </li>
              <li className="">
                Junior Frontend developer at Bromuno{" "}
                <span className="font-bold text-[#a3a3a3] ">2021 - till date</span>
              </li>
              <li className="">
                Local freelance{" "}
                <span className="font-bold text-[#a3a3a3] ">2024 - till date</span>
              </li>
            </div>
          </div>
        </div>
      </div>
      {/* skill issues */}
      <div className="py-15 px-5">
        <h3 className="text-3xl font-bold">The skills, tools and technologies I use:</h3>
        <div className="w-full justify-evenly gap-5 flex items-center flex-wrap px-5 py-15 ">
          {Array.from({length:8}).map((_, index) => {
            return (
              <div
                key={index}
                className="w-[284px] h-[200px] flex flex-col overflow-hidden"
              >
                <div className="bg-blue-900 flex-1 w-full" />
                <p className="font-bold ">React</p>
              </div>
            );
          })}
        </div>
      </div>
      
        <div className=" flex-col flex gap-6 py-15 px-5">
          <h3 className="text-3xl font-bold">My projects:</h3>
          {Array.from({length:4}).map((_, index) => {
            return (
              <div key={index} className="w-full h-[480px]  flex">
                <div className="flex-1  bg-gray-300 opacity-15 rounded-3xl"></div>
                <div className="flex-1 p-12 space-y-6">
                  <h4 className="font-bold text-2xl">QuickFolio</h4>
                  <p className="w-[480px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, at rerum! Iste libero minus ducimus adipisci rem! Voluptatem qui temporibus eveniet doloremque blanditiis! Tempore consequuntur officia repellat perferendis, minus exercitationem!</p>
                  <div className="w-[480px] flex items-center justify-start gap-2 flex-wrap ">
                    {Array.from({length:8}).map((_, index) => {
                      return (
                        <p
                          key={index}
                          className="bg-blue-900 px-2 rounded-full w-[100px]"
                        >
                          Javascript
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex gap-2">
                    <Link />
                    <a>some kind of link</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      
      <div className="w-full border-t border-gray-600 px-20 py-15">
        <div className="w-full h-full px-8 flex flex-col gap-4 items-center justify-start ">
          <div className="flex flex-col w-full items-center justify-center  gap-4">
            <h4 className="font-bold text-2xl leading-[100%] tracking-tight ">
              Get in touch:
            </h4>
            <p className="w-[576px] text-center text-[20px] leading-[28px] text-gray-400 tracking-normal">
              What's next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </p>
          </div>
          <div className="w-[596px] h-[104px]  gap-4 flex flex-col items-center justify-center px-8">
            <div className="w-full flex items-center justify-center  gap-2">
              <MessageSquare color="gray"/>
              <p className="text-[20px] leading-[28px] ">huncleniizar@gmail.com</p>
              <Copy color="gray" />
            </div>
            <div className="w-full flex items-center justify-center gap-2 ">
              <Phone color="gray" />
              <p className="text-[20px] leading-[28px]">09027280506</p>
              <Copy color="gray" />
            </div>
          </div>
          <div className="w-[312px] h-[68px] flex flex-col items-center justify-center gap-3 ">
            <p className="text-sm tracking-normal text-gray-400">
              You may also find me on these platforms!
            </p>
            <div className="flex items-center justify-center gap-4 w-full">
              <a href="">Github</a> <a href="">Twitter</a> <a href="">WhatsApp</a> <a href="">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      {/* copy right */}

      <div className="w-full  h-[68px] flex items-center justify-center  gap-2">
        <Copyright />{" "}
        <span className=" flex items-center justify-start gap-1 ">
          <span>2025</span>{" "}
          <span className="w-[1px] font-normal h-5 bg-gray-400 inline-block " />{" "}
          <span>This portfolio template is designed by</span>
        </span>
        <p>K1ngNiizar</p>
      </div>
    </div>
    </>
  )
}

export default App
