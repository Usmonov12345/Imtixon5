import React from 'react'
import '../Like/Lister.scss'
function Listr({data:{title,chegirma,narx,text ,id, img}}) {
  return (
    <div className='Listr' >
      <div className="container">
        <div className="cart">
          <ul className="cart__list">
            <li className='cart__item' id={id}>
                <img src={img} alt="" />
                <h2>{title}</h2>
                  <p>{text}</p>
                  <p>{chegirma}</p>
                  <h3>{narx}</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Listr