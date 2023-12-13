import React from 'react'
import About from './About'
import MainMenu from './MainMenu'
import Resume from './Resume'
import Work from './Work'
import Blog from './Blog'
import Contact from './Contact'

const MainContent = () => {
  return (
    <div className='col-span-12 lg:col-span-8 rounded-2xl'>
      <MainMenu></MainMenu>
      <About ></About>
      <Resume></Resume>
      <Work> </Work>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  )
}

export default MainContent
