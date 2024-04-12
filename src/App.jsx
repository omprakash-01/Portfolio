
// import './App.css'
import Navbar from './componests/Navbar'
import Home from './componests/Home'
import Internship from './componests/Internship'

function App() {
 

  return (
    <>
    {/* Navbar component */}
      <Navbar></Navbar>
      <div className="container">
      <Home></Home>
      <Internship></Internship>
      </div>
      

    </>
  )
}

export default App
