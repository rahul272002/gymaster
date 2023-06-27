import React from 'react';
import '../../Styles/pricing.css';



const Pricing = () => {
  return <section id='pricing-plan'>
    <div className="container">
      <div className="pricing_top">
        <h2 className="section_title">Gym <span className="highlights"> Pricing</span> Plan</h2>
        <p>Gym pricing varies widely depending on various factors such as location, facilities, <br/>amenities, and membership options.</p>
    
      </div>

      {/*===pricing_wrapper====*/}

      <div className="pricing_wrapper">
        {/*regular member*/}
        <div className="pricing_item" data-aos='fade-up' data-aos-duration='1500'>
          <div className="pricing_card_top">
            <h2 className='section_title'>Regular Member</h2>
            <h3 className="pricing section_title">&#8377;4129.00 <span> /month</span></h3>
            
          </div>

          <div className='services'>
            <ul>
              <li> Unlimited access to the gym</li>
              <li> Customer support</li>
              <li> Personal trainer</li>
              <li> Standard options</li>
              <li> 5 classes per week</li>
            </ul>

            <button className="register_btn">Join Now</button>
          </div>
        </div>

        {/*premium member*/}
        <div className="pricing_item pricing_item-02" data-aos='fade-up' data-aos-duration='1800'>
          <div className="pricing_card_top">
            <h2 className='section_title'>Premium Member</h2>
            <h2 className="pricing section_title">&#8377;5750.00 <span> /month</span></h2>
            
          </div>

          <div className='services'>
            <ul>
              <li> Unlimited access to the gym</li>
              <li> Customer support</li>
              <li> Personal trainer</li>
              <li> Standard options</li>
              <li> 5 classes per week</li>
            </ul>

            <button className="register_btn">Join Now</button>
          </div>
        </div>

        {/*standard member*/}
        <div className="pricing_item" data-aos='fade-up' data-aos-duration='2000'>
          <div className="pricing_card_top">
            <h2 className='section_title'>Standard Member</h2>
            <h3 className="pricing section_title">&#8377;8250.00 <span> /month</span></h3>
            
          </div>

          <div className='services'>
            <ul>
              <li> Unlimited access to the gym</li>
              <li> Customer support</li>
              <li> Personal trainer</li>
              <li> Standard options</li>
              <li> 5 classes per week</li>
            </ul>

            <button className="register_btn">Join Now</button>
          </div>
        </div>

      </div>

    </div>
  </section>
}

export default Pricing