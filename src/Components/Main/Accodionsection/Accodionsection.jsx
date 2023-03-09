import React from 'react'
import'../Accodionsection/Accodionsection.scss'
import { Link } from 'react-router-dom'
function Accodionsection() {
  return (
    <div className='Accodionsection'>
        <div className="container">
            <div className="acca">
                <div className="acca__left">
                    <h3 className="acca__left__title">
                        Ko’p so'raladigan savollar
                    </h3>
                    
                    <p className="acca__left__text">
                        Qo'shimcha ma'lumot uchun
                        biz bilan bog'laning
                    </p>
                    <Link to="/" className='acca__left__link'>Batafsil<i class="fa fa-arrow-right"></i></Link>
                </div>
                <div className="acca__right">
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accodionsection