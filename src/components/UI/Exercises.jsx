import React from 'react'
import '../../Styles/exercises.css';
import lunges from '../../images/lunges.png';
import yoga from '../../images/yoga.png';
import extended from '../../images/extended.png';


const Exercises = () => {
  return <section id='benefits'>
    <div className="container exercise_container">
        <div className="exercise_top">
            <div><br/></div><div><br/></div>
            <h2 className="section_title">Benefits of <span className="highlights">Exercise</span></h2>
            <p>Going to the gym improves physical fitness, including cardiovascular health, muscle strength, and endurance.<br/> Regular exercise also helps manage weight by burning calories and building lean muscle mass.</p>
        </div>

        {/*=====exercise list=====*/}

        <div className="exercise_wrapper">
            <div className="exercise_item" data-aos='zoom-in' data-aos-duration='1500'>
                <span className="exercise_icon">
                    <img src={lunges} alt="" />
                </span>

                <div className="exercise_content">
                    <h4>Healthy Life</h4>
                    <p>A healthy lifestyle includes<br/> regular exercise, a healthy diet, taking good care of oneself.</p>
                </div>
            </div>

            <div className="exercise_item" data-aos='zoom-in' data-aos-duration='1500'>
                <span className="exercise_icon">
                    <img src={yoga} alt="" />
                </span>

                <div className="exercise_content">
                    <h4>Increased Flexibility</h4>
                    <p>Increased flexibility can be achieved by combination of<br/> static stretching, and dynamic stretching</p>
                </div>
            </div>

            <div className="exercise_item" data-aos='zoom-in' data-aos-duration='1500'>
                <span className="exercise_icon">
                    <img src={extended} alt="" />
                </span>

                <div className="exercise_content">
                    <h4>Reducing Blood Pressure</h4>
                    <p>Drink some water. Dehydration can cause your blood pressure to rise, so drinking a glass of water can help</p>
                </div>
            </div>
        </div>


    </div>
  </section>
}

export default Exercises