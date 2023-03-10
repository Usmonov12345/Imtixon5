import React from 'react'
import img from '../../../Image/you1.svg'
import '../Yousection/Yousection.scss'
function Yousection() {
  return (
    <div className='Yousection'>
        <div className="container">
            <div className="you">
                <div className="you__left">
                    <h3 className='you__left__title'>Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz</h3>
                </div>
                <div className="you__right">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Yousection