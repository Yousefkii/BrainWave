import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits"
import Collaboration from "./components/Collaboration.jsx"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services.jsx"

function App() {

  return (
    <>
    <div className="pt-[4.75 rem] lg:pt-[5.25rem] pg-black overflow-hidden">
      <Header/>
      <Hero/>
      <Benefits/>
      <Collaboration/>
      <Services/>
      </div>
      <ButtonGradient/>
    </>
  ) 
}

export default App
