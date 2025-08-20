import { useState } from 'react'
import Project from './Project'
import Framework from './Framework';
import AboutDetails from './AboutDetails';

function Main({handleContact}) {
  
  return (
    <>
      <AboutDetails handleContact={handleContact}/>
    </>
  )
}

export default Main