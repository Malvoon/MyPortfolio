import React from 'react'
import './index.scss'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Presentation from './Components/Presentation/Presentation'

const App = () => {
  return (
    <>
      <Header/>
      <Presentation/>
      <Footer/>
    </>
  )
}

export default App