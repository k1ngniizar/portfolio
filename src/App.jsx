import Header from "../components/Header/Header";
import About from "../components/About/About";
import Main from "../components/Main/Main";
import { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard/ContactCard";
import AboutDetails from "../components/Main/AboutDetails";
import { Copyright } from "lucide-react";

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
    <footer className="p-2 border-t-purple-600 border-t">
      <p className="font-bold text-sm">Ebenezer Cheetham-West</p>
      <div className="flex">
        <Copyright size={12}/> 
        <p className="text-xs font-bold">2025 Ebenezer West. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default App
