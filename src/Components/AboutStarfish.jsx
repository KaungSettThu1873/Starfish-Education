/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./AboutStarfish.css"

const AboutStarfish = () => (
    <div className=' container-lg '>
        <div className='row'>
            <div className='col-md-12 col-lg-6 mt-2 mt-sm-3 mt-md-3 mt-lg-4'>
                <h4 className='aboutFonts'>About Starfish Education</h4>
                <p className=' fontSize '>Founded in 2008 and incorporated as a service company in 2013, STARFISH Education aims to develop the competency of human capital of Myanmar’s youth through English language training. STARFISH Education addresses the needs of the whole person, not just language acquisition, by focusing on building confidence, helping young people actualize...</p>
                <div className='mt-2 mb-2'>
                    <a href='#' className='colorText'>More --</a>
                </div>
                <div>
                    <img src='/image/home_about_us_img.jpg' className='w-100' alt=''/>
                </div>
            </div>
           
            <div className='col-md-12 col-lg-6 mt-2 mt-sm-3 mt-md-3 mt-lg-4'>
                <h4 className='aboutFonts'>About Kaplan Test Prep International</h4>
                    <p className='mb-5 fontSize '>As a Kaplan Certified Education Provider, STARFISH Education provides: Classroom-based test prep courses which utilize proven Kaplan methods and strategies Extensive online study resources with many hours of additional content High-quality realistic practice tests Kaplan Test Prep International Kaplan Test Prep is a premier provider of educational and career services...</p>
                <div>
                    <img src='/image/home_kaplan_img.jpg' className='w-100' alt=''/>
                </div>
            </div>
        </div>
    </div>
)

export default AboutStarfish