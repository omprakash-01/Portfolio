import Navbar from './componests/Navbar'
import Home from './componests/Home'
import Internship from './componests/Internship'
import Skills from './componests/Skills'
import Projects from './componests/Projects'
import Contact from './componests/Contact'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react'

function App() {
 
  useEffect(() => {
    Aos.init();
    
   }, [])

  return (
    <>
    {/* Navbar component */}
      <Navbar></Navbar>
      <div className="container">
      <Home></Home>
      <Internship></Internship>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      </div>
      

    </>
  )
}

export default App
