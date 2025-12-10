import React from 'react'
import Header from './Pages/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import StepCard from './Pages/StepCard'
import FAQAccordion from './Pages/Faqs'
import Footer from './Pages/Footer'
import EmiCalculator from './Pages/Emicalculator'
import WhatsappFloatButton from './Pages/WhatsappFloatButton'
import Reviews from './Pages/Reivews'
import Drivebutton from './Pages/drivebutton'
import VisionMissionSection from './Pages/VisionMissionSection'
import WhoWeAreSection from './Pages/WhoWeAreSection'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <VisionMissionSection/>
      <WhoWeAreSection/>
      {/* <Services />
      <StepCard />
      <FAQAccordion /> */}
      <EmiCalculator />
      {/* <Drivebutton />
      <Reviews /> */}
      <WhatsappFloatButton />
      <Footer />
    </div>
  )
}

export default App
