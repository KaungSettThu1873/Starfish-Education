import React from 'react'
import "./MidBar.css"
const MidBar = () => {
  return (
    <div className=' container-fluid mt-2 mt-sm-4 mt-md-4 mt-lg-5 bg-secondary-subtle'>
        <div className='row d-flex '>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 offset-lg-1 d-flex  '>
              <p className='MidFontsDesign fsStyle'>40</p>
              <p className='fs-2 fsStyle'>+</p>
              <p className='fs-5 mt-5 fsStyle'>Qualified Teachers</p>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 d-flex  '>
              <p className='MidFontsDesign fsStyle'>6000</p>
              <p className='fs-2 fsStyle'>+</p>
              <p className='fs-5 mt-5 fsStyle'>Students Each Years</p>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-2 d-flex  '>
              <p className='MidFontsDesign fsStyle'>40</p>
              <p className='fs-5 mt-5 fsStyle'>Campuses</p>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-2 d-flex  '>
              <p className='MidFontsDesign fsStyle'>100</p>
              <p className='fs-2 fsStyle'>+</p>
              <p className='fs-5 mt-5 fsStyle'>Classes</p>
            </div>
           
        </div>
    </div>
  )
}

export default MidBar