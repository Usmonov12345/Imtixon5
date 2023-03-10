import React from 'react'
import OneSection from '../../Main/OneSection/OneSection'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {data} from '../../Main/Foursection/datas/Fourdata'
import Listr from './Listr'
import '../Like/Like.scss'
function Like() {
  let [state,setState] = useState([])
  useEffect(() => {
    let pol = () => {
      setState(...state,data)
    }
    pol()
  },[])
  return (
  <>
    <OneSection/>
    <div className='Like'>
      <Link className='Like__pho' to="tel:+998882064344">
      <i class="fa-sharp fa-solid fa-phone Like__phone "></i>
      </Link>
      <Link to="tel:+998882064344"   className='Like__phon'>
      <i class="fa-solid fa-comment Like__com"></i>
      </Link>
        <div className="container">
          <div className="cardf">
                <ul className="cardf__list">
                  <li className="cardf__item">
                    <Link to="/" className='cardf__item__link'>
                      Bosh sahifa  
                    </Link>
                  </li>
                    /
                  <li className="cardf__item">
                    <Link to="/Mahsulotlar" className='cardf__item__link'> 
                    Saqlangan dorilar  
                    </Link>
                  </li>
                </ul>
                
                <h2 className="cardf__title">
                  Sevimli dorilar
                </h2>
                
                <ul className="cardf__lisT" >
                  <li className="cardf__iteM">
                    {state.map((res) =>{
                      return <Listr key={res.id} data={res} x/>
                    })
                    }
                  </li>
                </ul>
          </div>
        </div>
    </div>
  </>
  )
}

export default Like