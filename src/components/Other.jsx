import React from 'react'
import "./Other.css"
const Other = () => {
  return (
    <div className='Other'>
        <div className="other_title5">
            <h1 className='og'>Other Noteworthy Projects</h1>
        </div>

        <div className="other_cards">
            <div className="card">
                    <h2 className='wer1'>Handwritten Digit Recognizer using SVM</h2>
                    <p className='wer2'>Created this by using training datasets from the MNIST database, extracting 9 features using a HOG descriptor and implementing an SVM as a part of coursework Big Data An¬alysis.</p>
            </div>
            <div className="card2">
                    <h2 className='wer3'>Handwritten Digit Recognizer using SVM</h2>
                    <p className='wer4'>Created this by using training datasets from the MNIST database, extracting 9 features using a HOG descriptor and implementing an SVM as a part of coursework Big Data An¬alysis.</p>
            </div>
            <div className="card3">
                    <h2 className='wer5'>Handwritten Digit Recognizer using SVM</h2>
                    <p className='wer6'>Created this by using training datasets from the MNIST database, extracting 9 features using a HOG descriptor and implementing an SVM as a part of coursework Big Data An¬alysis.</p>
            </div>
        </div>
        <button className='show_more'>Show More</button>


    </div>
  )
}

export default Other