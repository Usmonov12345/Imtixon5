import React from 'react'
import {Link } from 'react-router-dom'
import Img from '../../Image/flag.svg'
import '../../Components/Header/Heade.scss'
function Header() {
  return (
    <header className='header'>
        <div className="container">
            <div className="hero">
                <ul className="hero__list">
                    <li className="hero__item">
                      <Link to="/MahsulotlarKatalogi" className='hero__item__links'>
                          Mahsulotlar katalogi
                      </Link>
                    </li>
                       <li className="hero__item">
                      <Link to="/FotoLavhalar" className='hero__item__links'>
                          Foto-lavhalar
                      </Link>
                    </li>
                       <li className="hero__item">
                      <Link to="/Yetkazmalar" className='hero__item__links'>
                          Yetkazib berish va to'lash
                      </Link>
                    </li>
                       <li className="hero__item">
                      <Link to="/Aksiya" className='hero__item__links11'>
                          Aksiya
                      </Link>
                    </li>
                       <li className="hero__item2">
                      <Link to="/Yangi" className='hero__item__links12'>
                         Yangi
                      </Link>
                    </li>
                </ul>
                <ul className="hero__list2">
                  <li className="hero__list2__item">
                    <img src={Img} alt="" />
                     {/* <i class="fa-solid fa-caret-down"></i> */}
                  </li>
                    <span className='hero__list2__span'></span>
                   <li className="hero__list2__item">
                      Toshkent shahar
                      <i class="fa fa-location-dot"></i>
                  </li>
                    <span className='hero__list2__span'></span>
                  
                  <li className="hero__list2__item">
                    <Link to="/login" className='hero__list2__item__link'>
                        Kirish
                      <i class="fa-solid fa-user hero__list2__item__link_user"></i>
                    </Link>
                      
                  </li>
                </ul>
                
                
            </div>
        </div>
    </header>
  ) 
}

export default Header