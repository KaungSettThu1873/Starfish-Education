/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./NavBar.css"
const NavBar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-lg">
    <a class="navbar-brand " href="#">
      <img src="/image/starfish_logo.png" className='logoSize'/>
    </a>
    <button class="navbar-toggler w-25 border-0  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item text-center">
          <a class="nav-link active fontDesign fs-5 fontsColor" aria-current="page" href="#Home">Home</a>
        </li>
        <li class="nav-item text-center ">
          <a class="nav-link fontDesign fs-5 fontsColor" href="#AboutUs">About Us</a>
        </li>
        <li class="nav-item text-center ">
          <a class="nav-link fontDesign fs-5 fontsColor " href="#StudyAbroad">Study Abroad</a>
        </li>
        <li class="nav-item text-center ">
          <a class="nav-link fontDesign fs-5 fontsColor" href="#Carreropportunities">Carrer opportunities</a>
        </li>
        <li class="nav-item text-center ">
          <a class="nav-link fontDesign fs-5 fontsColor" href="#ContactUs">Contact Us</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    
    </div>
  )
}

export default NavBar