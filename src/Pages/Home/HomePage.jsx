import React from 'react'
import About from '../../Components/Header/About/About'
import Certificate from '../../Components/Header/Certificate/Certificate'
import Courses from '../../Components/Header/Courses/Courses'
import Footer from '../../Components/Header/Footer/Footer'
import Header from '../../Components/Header/Header/Header'
import Mentors from '../../Components/Header/Mentors/Mentors'
import News from '../../Components/Header/News/News'

export default function HomePage() {
  return (
    <div>
        <Header/>
        <About/>
        <Courses/>
        <Mentors/>
        <News/>
        <Certificate/>
        <Footer/>
    </div>
  )
}
