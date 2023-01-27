import React from 'react'
import "./Work.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useState } from 'react'
export const Work = () => {
    const obj = {
        "amazon": ["Software Development Engineer Intern @ Amazon.com Inc.", "May - Aug 2022", "SDE Intern for the Amazon Payments and Security Team, LumosXBatch Transmission.", "Designed a unique way of S2S authentication for services in Amazon.com’s core Batch Payments architecture, by leveraging the use of digital signatures(JWTs) secured with AWS KMS, to migrate from legacy web CAs.", "This implementation cuts down the incurred IMR cost by a significant 90% and also unaltered the SLA of the payments service, while keeping the service secure."],
        "tcs": ["Graduate Research Assistant-UF @ FICS", "Jul 2021 - present", "FICS stands for Florida Institute for Cybersecurity Research, Gainesville, FL, USA. This is where I conducted an extensive research on Explainable Ai (XAI by DARPA) directed around how an optical character recognizer works on Assuring Printed Circuit Boards.", "Implemented various interpretable specific and agnostic methodologies like Gradient CAMs, Layer-wise Relevance BackPropagation (LRP),Local Interpretable Model-Agnostic Explanations (LIME) and Shapley Additive Explanations (SHAP)"]
    }

    const [active, setActive] = useState('amazon');
    const [click, setClick] = useState('amazon')
    

    AOS.init();
    return (
        <div className='work'>
            <div className="work_title">
                <h2 className='heading_work' data-aos="fade-up">Where I've Worked</h2>
                <hr className='line3'></hr>
                <hr className='line4'></hr>
            </div>
            <div className="details" data-aos="fade-up" duration='2000' > 


                <div className="left_work" data-aos="fade-up">
                    <h2 className='bkl' onClick={() => setActive("amazon")}>Amazon.com</h2>
                    <h2 className='bkl'onClick={() => setActive("tcs")}>TCS.com</h2>

                </div>
                <div className="right_work" data-aos="fade-up">
                    <h2 className='main_title' >
                        {obj[active][0]}
                    </h2>
                    <h3 className='title_date'>
                    {obj[active][1]}
                    </h3>
                    <div className="ulw">
                        <ul className='left_ulw'>
                            {
                                
                                obj[active].slice(2, obj[active].length).map((ele, i) => {
                                    return (
                                        <li className='niv' key={i}>{ele}</li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}