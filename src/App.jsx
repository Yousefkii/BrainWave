import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits"
import Collaboration from "./components/Collaboration.jsx"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

  return (
    <>
    <div className="pt-[4.75 rem] lg:pt-[5.25rem] pg-black overflow-hidden">
      <Header/>
      <Hero/>
      <Benefits/>
      <Collaboration/>
      </div>
      <ButtonGradient/>
    </>
  ) 
}

export default App
