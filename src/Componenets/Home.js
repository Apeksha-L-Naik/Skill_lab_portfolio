import React from 'react'
// import Navbar from './Navbar'
// import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    {/* <div>
        <Navbar/>
        <Outlet/>
    </div> */}
    
    <div className='container' >
        <div className='content'>
            <h2>FrontEnd <span>Developer...</span></h2>
            <p>Passinate frontent developer who converts seamless ideas into reality. Ability to translate design concepts into functional and visually appealing user interfaces has been instrumental in delivering seamless and intuitive experiences.</p>
            <div className='icon'>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-github"></i>
            </div>
        </div>
        <div className='image'>
            <img src='https://cdn.pixabay.com/photo/2016/02/13/05/02/adventurer-1197392_640.png' alt=''/>
        </div>
    </div>
    </>
  )
}

export default Home