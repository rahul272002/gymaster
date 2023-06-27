import React from 'react';
import '../../Styles/start.css';
import trainer from '../../images/trainer.png'


const Start = () => {
  return <section id='classes'>
    <div className="container">
        <div className="start_wrapper">
            <div className="start_img">
                <img src={trainer} alt="" data-aos='fade-left' data-aos-duration='1500'/>
            </div>

            <div className="start_content" data-aos='fade-right' data-aos-duration='1500'>
                <h2 className="section_title">
                    Ready to make a <span className="highlights"> change?</span>
                </h2>
                <p>Regular participation in gym classes can lead to improvements in cardiovascular endurance, strength, flexibility, and overall fitness. Classes often incorporate a mix of cardiovascular exercises, strength training, and stretching, offering a well-rounded workout.</p>

                <button className="register_btn">
                    Get Started
                </button>
            </div>

        </div>
    </div>
  </section>
}

export default Start