import React from 'react'
import '../Footer/Footer.scss'
import {Link} from 'react-router-dom'
import goog from '../../Image/goog.svg'
import app from '../../Image/app.png'
function Footer() {
  return (
    <div className='Footer'>
        <div className="container">
          <Link to="/" className='Footer__logo'>LOGO</Link>
            <div className="foot">
              <div className="foot__left">
                <ul className="foot__left__list">
                  <li className="foot__left__item">
                    <p className='foot__left__item__text'>Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar</p>
                  </li>
                  <li className="foot__left__item">
                    <p className='foot__left__item__text'>Ish vaqti: Har kuni 8:00 dan 18:00 gacha</p>
                  </li>
                    <li className="foot__left__item1">
                      <i class="fa-brands fa-facebook-f  foot__left__item1__icon1"></i>
                      <i class="fa-brands fa-instagram foot__left__item1__icon "></i>
                      <i class="fa-brands fa-telegram  foot__left__item1__icon"></i>
                      <i class="fa-brands fa-youtube  foot__left__item1__icon"></i>
                  </li>
                </ul>
                  <div className="foot__left__box">
                    <div className="foot__left__box__left">
                      <p className="foot__left__box__left__text">
                        E-mail
                      </p>
                      <Link to="mailto:info@mehrigiyo.uz" className='foot__left__box__left__link'>info@mehrigiyo.uz</Link>
                    </div>
                    <div className="foot__left__box__right">
                      <p className='foot__left__box__right__text'>Bizga qo'ng'iroq qiling</p>
                      <Link to="tel:+99898 125 31 03" className='foot__left__box__left__link'>+99898 125 31 03</Link>
                    </div>
                  </div>
              </div>
              <div className="foot__right"  >
                    <div className="foot__right__left">
                      <p className='foot__right__left__text'>Huquqiy</p>
                    </div>
                    <div className="foot__right__right">
                      <h4 className='foot__right__right__title'>Ilovani yuklab olish</h4>
                        <img src={goog} alt=""  className='foot__right__right__goog'/>
                          <br />
                          <br />
                        <img src={app} alt="" className='foot__right__right__app'/>
                    </div>
              </div>
            </div>
        </div>
        <div className="bootom">
          <div className="container">
            <ul className='list'>
              <li className='item1'>
                © 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan. 
                Saytdan olingan barcha maʼlumotlar chop etilganda veb-saytga havola qilish majburiy.
              </li>
               <li className='item2'>
                  <Link to="/" className='item2__link'>Bosh sahifa</Link>
                  <Link to="bizhaqimizda" className='item2__link'>Biz haqimizda</Link>
                  <Link to="Yangiliklar" className='item2__link'>Yangiliklar</Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer