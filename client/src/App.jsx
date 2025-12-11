import React from 'react'
import Header from './Pages/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './Pages/Footer'
import EmiCalculator from './Pages/Emicalculator'
import VisionMissionSection from './Pages/VisionMissionSection'
import WhoWeAreSection from './Pages/WhoWeAreSection'
import BusinessProcess from './Pages/BusinessProcess'
import WhyChooseCredaro from './Pages/WhyChooseCredaro'
import LoanTypesTimeline from './Pages/LoanTypesTimeline'
import EligibilityCriteria from './Pages/EligibilityCriteria'
import WhatsAppBtn from './Pages/Whatsapp'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <VisionMissionSection/>
      <WhoWeAreSection/>
      <BusinessProcess/>
      <WhyChooseCredaro/>
      <LoanTypesTimeline/>
      <EligibilityCriteria/>
      <EmiCalculator />
      <WhatsAppBtn/>
      <Footer />
    </div>
  )
}

export default App
