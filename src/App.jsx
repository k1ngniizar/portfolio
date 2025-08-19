import Header from "../components/Header/Header";
import About from "../components/About/About";
import Main from "../components/Main/Main";
import { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard/ContactCard";

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
    <Main handleContact={handleContact}/>
    </>
  )
}

export default App
