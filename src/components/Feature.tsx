// import React from 'react'
import dashboard from "../assets/images/dashboard.png"
import cgpa from "../assets/images/cgpa.png"
import timetable from "../assets/images/timetable.png"

const Feature = () => {
  return (
    <>
      <section>
        <h3 className='ft'>Features</h3>
        <div className="wrapper">
        <div className="feature-container">
            <img src={dashboard} alt="" />
            <h4>Unified Dashboard</h4>
            <p>Analysis, Records, Data are 
              collected and stored in our end. And 
              they can be viewed on your
               dashboard...
            </p>
            <a href=''>Learn more &#8594;</a>
        </div>
        <div className="feature-container">
          <img src={cgpa} alt="" />
            <h4>CGPA & Course Tracking</h4>
            <p>Calculates student CGPA and
               track their courses
              as well as improvements made so far...
            </p>
            <a href=''>Learn more &#8594;</a>
        </div>
        <div className="feature-container">
          <img src={timetable} alt="" />
            <h4>Smart Timetable & Assignments</h4>
            <p>
              Smart timetables are created to 
              improve the output of the student in all
              academic spheres... 
            </p>
            <a href=''>Learn more &#8594;</a>
        </div>
        </div>
      </section>
    </>
  )
}

export default Feature
