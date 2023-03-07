import React from 'react'
import img from '../../../Image/poll.png'
import '../Twosection/Twosection.scss'
function Twosection() {
  return (
  
    <div className='Twosection'>
        <div className="container">
            <div className="two">
                    <h1 className='two__title'>
                        Bepul shifokor maslahat kerakmi?
                    </h1>
                    <p className="two__text">
                        24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq <br />
                        Faqat <span className='two__text__span'> mobil ilovada</span>
                    </p>
                    <img src={img} alt="" className='two__img' />
            </div>
            <div className="polli">
              
            </div>
        </div>
    </div>
  )
}

export default Twosection