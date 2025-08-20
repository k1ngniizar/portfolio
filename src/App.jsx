import Header from "../components/Header/Header";
import About from "../components/About/About";
import Main from "../components/Main/Main";
import { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard/ContactCard";
import AboutDetails from "../components/Main/AboutDetails";
import { Copyright } from "lucide-react";
import { FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa6";

function App() {
  const [contactMe, setContactMe] = useState(false)

  useEffect(() => {
  if (contactMe) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

  return () => document.body.style.overflow = "auto";
  }, [contactMe]);

  const handleContact = () =>{
    setContactMe(!contactMe)
  }
  
  return (
    <>
    <ContactCard handleContact={handleContact} contactMe={contactMe}/>
    <Header/>
    <About handleContact={handleContact}/>
    <AboutDetails handleContact={handleContact}/>
    <footer className=" max-w-7xl mx-auto py-[20px] px-3 bg-purple-900/10 space-y-2">
      <div className="flex items-center justify-between">
        <p className="font-bold text-sm">Ebenezer West</p>
        <div className="flex gap-2 items-center justify-start">
          <p className="font-bold text-sm text-purple-900 dark:text-purple-600">Contact me: </p>
          <a target="_blank" href="https://github.com/k1ngniizar">
            <FaGithub/>
          </a>
          <a target="_blank" href="https://wa.me/qr/UAGRYFNNPTNBI1">
            <FaWhatsapp/>
          </a>
          <a target="_blank" href="mailto:huncleniizar@gmail.com">
            <FaEnvelope/>
          </a>
        </div>
      </div>
      <div className="flex items-center gap-1 dark:text-purple-600 text-purple-900">
        <Copyright size={12}/> 
        <p className="text-xs font-bold">2025 Ebenezer West. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default App
