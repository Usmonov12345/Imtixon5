import React from 'react'
import '../Threesection/Threesection.scss'
function Threesection() {
  return (
    <div className='Threesection'>
        <div className="container">
            <div className="bopt"></div>
            <div className="three">
                <ul className="three__list">
                    <li className='three__item'>
                        <div className="three__item__left">
                        <i class="fa-solid fa-truck three__item__yetkazma"></i>
                        </div>
                        <div className="three__item__right">
                            <h4 className='three__item__right__title'>
                                Yetkazib berish bepul
                            </h4>
                            <p className='three__item__right__text'>
                                100 000 so'mdan ortiq <br />
                                buyurtma berganingizda
                            </p>
                        </div>
                    </li>
                    <li className='three__item'>
                        <div className="three__item__left">
                        <i class="fa fa-credit-card three__item__yetkazma"></i>
                        </div>
                        <div className="three__item__right">
                            <h4 className='three__item__right__title'>
                               Tez to'lov
                            </h4>
                            <p className='three__item__right__text'>
                              100% xavfsiz to'lov
                            </p>
                        </div>
                    </li>
                    <li className='three__item'>
                        <div className="three__item__left">
                        <i class="fa-solid fa-percent three__item__yetkazma"></i>
                        </div>
                        <div className="three__item__right">
                            <h4 className='three__item__right__title'>
                                Doimiy chegirmalar
                            </h4>
                            <p className='three__item__right__text'>
                               Ular allaqachon ishlamoqda
                            </p>
                        </div>
                    </li>
                    <li className='three__item'>
                        <div className="three__item__left">
                        <i class="fa-solid fa-headphones three__item__yetkazma"></i>
                        </div>
                        <div className="three__item__right">
                            <h4 className='three__item__right__title'>
                                Onlayn yordam
                            </h4>
                            <p className='three__item__right__text'>
                               Ish vaqti: 08:00 - 18:00
                            </p>
                        </div>
                    </li>
                </ul>
            </div> 
            <div className="bopt"></div>
            
        </div>
    </div>
  )
}

export default Threesection