/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./ClassesStarFish.css"

const ClasssesStarfish = () => {
  return (
    <div className='row' >
        <nav className="navbar navbar-expand-lg ">
  <div className="container-lg bgColor ">
  
    <button className="navbar-toggler  w-100 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className=" text-white fs-4 ">Classes</span>
    </button>
    <div className="collapse navbar-collapse justify-content-center " id="navbarNavAltMarkup">
      <div className="navbar-nav text-center">
        <a className="nav-link active text-white fs-4 hoverColor1" aria-current="page" href="#">GENERAL ENGLISH</a>
        <a className="nav-link text-white fs-4 hoverColor1 " href="#">BUSINESS ENGLISH</a>
        <a className="nav-link text-white fs-4 hoverColor1 " href="#">AF</a>
        <a className="nav-link text-white fs-4  hoverColor1 " href="#">IELTS</a>
        <a className="nav-link text-white fs-4  hoverColor1 " href="#">TOEFL</a>
        <a className="nav-link text-white fs-4  hoverColor1 " href="#">SAT</a>
      </div>
    </div>
    <hr/>
  </div>
  
</nav>
    </div>
  )
}

export default ClasssesStarfish