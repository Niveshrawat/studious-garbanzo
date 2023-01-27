import React from 'react'
import './Hire.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Hire = () => {
  AOS.init();
  return (
    <div className='hey' >
        <div className="parent_hire">
            <h2 className='heading_hire'>
                What's Next?
            </h2>
            <h1 className='hire'>Hire Me!</h1>
            <p className='desc_hire'>I'm currently looking for new opportunities to work. Otherwise, if you have a question or just want to say hi, my inbox is always open!</p>
        </div>
        <button className='hire_btn'>Say Hello</button>
    </div>
  )
}

export default Hire