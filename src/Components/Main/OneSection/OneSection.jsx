import React from 'react'
import '../OneSection/OneSection.scss'
import {NavLink,Link} from 'react-router-dom'
function OneSection() {
  return (
    <div className='OneSection'>
        <div className="container">
            <div className="cardd">
                <ul className='cardd__list'>
                <h1>LOGO</h1>   
                    <li className='cardd__item'>
                           <NavLink to='/' className="cardd__item__link">
                            Bosh sahifa
                        </NavLink>
                    </li>
                    <li className='cardd__item'>
                        <NavLink to='/Mahsulotlar' className="cardd__item__link">
                            Mahsulotlar
                        </NavLink>
                    </li>
                </ul>
                <ul className="cardd__list2">
                    <li className="cardd__list2__item">
                        <Link className='cardd__list2__item__links'>
                            <i class="fa-solid fa-heart cardd__list2__item__links__like"></i>
                        </Link>
                    </li>
                    <li className="cardd__list2__item">
                        <Link className='cardd__list2__item__links'>
                            <i class="fa fa-cart-shopping cardd__list2__item__links__shop"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default OneSection