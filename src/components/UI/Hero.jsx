import React from 'react';
import play from '../../images/play.png';
import heroImg from '../../images/heroImg.png';
import heart from '../../images/heart.png';
import location from '../../images/location.svg';
import dumble from '../../images/dumble.png';
import '../../Styles/hero.css';

const Hero = () => {
  return <section id='home' >
    <div className="container">
        <div className="hero_wrapper">
            {/*======hero content=====*/}
            <div className="hero_content">
                <h2 className="section_title" data-aos='fade-up' data-aos-duration='1500'>Exercise is the key to a <span className="highlights">Healthy</span> Lifestyle</h2>
                <div><br/></div>
                <p data-aos="fade-up" data-aos-delay='100' data-aos-duration='1800' >Strength doesn’t come from what you can do. It comes from overcoming <br/> the things you once thought you couldn’t. – Ashley Greene</p>

                <div><br/></div>
                <div><br/></div>
                <div className="hero_btns" data-aos="fade-up" data-aos-delay='200' data-aos-duration='2000'>
                    <button className="register_btn">
                        Get Started
                    </button>
                    <button className="watch_btn">
                        <span><img src={play} alt="" /></span>
                        Watch Video
                    </button>
                </div>
            </div>
            {/*======hero image=====*/}
            <div className="hero_img">
                <div className="hero_img_wrapper">

                    <div className="box-01">
                        <div className="box-02">
                            <div className="box-03">
                                <div className="box_img">
                                    <img src={heroImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heart_rate" data-aos='fade-right' data-aos-duration='1500'>
                        <h5>Heart Rate</h5>
                        <span><img src={heart} alt="" /></span>
                        <h6>2567 BPM</h6>
                    </div>


                    <div className="gym_location" data-aos='fade-left' data-aos-duration='1500'>
                        <h5>Find a new <br/>gym near you</h5>
                        <span><img src={location} alt="" /></span>
                    </div>

                    <div className="dumble_icon" data-aos='fade-down' data-aos-duration='1500'>
                        <img src={dumble} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Hero