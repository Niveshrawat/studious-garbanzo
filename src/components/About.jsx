import React from 'react'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const About = () => {
    AOS.init();
  return (

    <div className='jkkk'>
        <div className="left_container">
        <div className="about2">

            <h2 className='heading_about' data-aos="fade-up">ABOUT ME</h2>
            <hr className='line2'></hr>
            <p className='content_about' data-aos="fade-up">
            Hello! I'm Nivesh Rawat. I'm a computer science engineer by profession and a graphic designer by passion. Hence, whatever I build, I focus on pixel perfect delivery and experience. I'm from Hyderabad, India.
            <br></br>
            <br></br>
            I always try to sate my ever fostering curiosity to learn new things. I enjoy creating things that live on your device or the internet. I'm currently interning as a Software Engineer with the Information Security,Payments team at Amazon.com Inc. while pursuing my master's degree in Computer Science from University of Florida.
            <br></br>
            <br></br>
            Here are a few technologies I've been working with recently:
            <div className="ul">
                <ul className='left_ul'>
                <li>React Js</li>
                <li>Node Js</li>
                <li>AWS</li>
                </ul>
                <ul className='right_ul'>
                <li>Python</li>
                <li>Kubernetes</li>
                <li>Machine Learning</li>
            </ul>
            </div>
            
            </p>
            
            
            


        </div>
        </div>
        <div className="right_container" data-aos="fade-up">
          <img className='nivesh_img' data-aos="flip-right" data-aos-duration="2000"src='https://cdn.discordapp.com/attachments/1059104671911919619/1064591573444218912/Niveshs_Photo.jpeg'/>
          <div className="right_child" >
            <div className="child"></div>
          </div>
            
            
        </div>
    </div>
  )
}

export default About