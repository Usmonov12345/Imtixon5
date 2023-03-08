import React from 'react'
import '../Logosection/Logosection.scss'
import logo1 from '../../../Image/l1.svg'
import logo2 from '../../../Image/l2.svg'
import logo3 from '../../../Image/l3.svg'
import logo4 from '../../../Image/l4.svg'
import logo5 from '../../../Image/l5.svg'
import logo6 from '../../../Image/l6.svg'
import {Link} from 'react-router-dom'
function Logosection() {
  return (
    <div className='Logosection'>
        <div className="containe">
            <div className="botr"></div>
            <div className="carda">
                <ul className='carda__list'>
                    <li className="carda__item">
                         <Link  to="/" className='carda__item__link'>
                                <img src={logo1} alt="" className='card__item__img'/>
                         </Link>   
                    </li>
                    <li className="carda__item">
                         <Link  to="/" className='carda__item__link'>
                                <img src={logo2} alt="" className='card__item__img'/>
                         </Link>   
                    </li>
                    <li className="carda__item">
                         <Link  to="/" className='carda__item__link'>
                                <img src={logo3} alt="" className='card__item__img'/>
                         </Link>   
                    </li>
                    <li className="carda__item">
                         <Link  to="/" className='carda__item__link'>
                                <img src={logo4} alt="" className='card__item__img'/>
                         </Link>   
                    </li>
                    <li className="carda__item">
                         <Link  to="/" className='carda__item__link'>
                                <img src={logo5} alt="" className='card__item__img'/>
                         </Link>   
                    </li>
                    <li className="carda__item">
                         <Link  to="/" className='carda__item__link'>
                                <img src={logo6} alt="" className='card__item__img'/>
                         </Link>   
                    </li>
                </ul>
            </div>
            <div className="botr"></div>
            
        </div>
    </div>
  )
}

export default Logosection