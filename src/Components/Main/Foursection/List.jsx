import React from 'react'
import { Link } from 'react-router-dom'
import './List.scss'
function List({data:{title,text,narx,chegirma,id,img}},) {

  return (
    <div className='List'>
        <div className="container">
            <div className="cardf">
                <ul className="cardf__list">
                    <li className="cardf__item" id={id}>
                        <i class="fa fa-heart cardf__item__heard"></i>
                        <img src={img} alt="" className='cardf__item__img' />
                        <h3 className='cardf__item__title'>{title}</h3>
                        <p className='cardf__item__text'>{text}</p>
                        <div className="cardf__item__cardf">
                            <div className="cardf__item__cardf__left">
                                  <p className='cardf__item__cagirma'>{chegirma}</p>
                                  <p className='cardf__item__narx'>{narx}</p>
                            </div>
                            <div className="cardf__item__cardf__left">
                                <button className='cardf__item__btn'>
                                <i class="fa-solid fa-plus cardf__item__iconP"></i>
                                </button>
                            </div> 
                        </div>
                      <Link to="Mahsulotlar"  className='cardf__item__link'>
                      Tafsilotlar<i class="fa-solid fa-angle-right "></i>
                      </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default List