import React from 'react';
import '../../Styles/footer.css';
import logo from '../../images/dumble.png'

const Footer = () => {
  return <footer className="footer" data-aos='fade-up' data-aos-duration='1500'>
    <div className="container">
        <div className="footer_wrapper">
            <div className="footer_box">
                <div className="logo">
                    <div className="logo_img">
                        <img src={logo} alt="" />
                    </div>
                    <h2>Bloody Sweet Gym</h2>
                </div>
               {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequatur blanditiis minus sapiente a consequuntur?</p> */}
            </div>

            <div className="footer_box">
                <h4 className="footer_title">Company</h4>

                <ul className="footer_links">
                    <li><a href="#">Our program</a></li>
                    <li><a href="#">Our plan</a></li>
                    <li><a href="#"></a>Become a member</li>
                </ul>
            </div>

            <div className="footer_box">
                <h4 className="footer_title">Quick Links</h4>

                <ul className="footer_links">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#"></a>Support</li>
                </ul>
            </div>

            <div className="footer_box">
                <h4 className="footer_title">Company</h4>

                <ul className="footer_links">
                    <li><a href="#">Our program</a></li>
                    <li><a href="#">Our plan</a></li>
                    <li><a href="#"></a>Become a member</li>
                </ul>
            </div>
        </div>

    </div>
  </footer>
}

export default Footer