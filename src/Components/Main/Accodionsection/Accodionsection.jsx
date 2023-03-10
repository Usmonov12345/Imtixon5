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
                    <Link to="/Mahsulotlar" className='acca__left__link'>Batafsil<i class="fa fa-arrow-right"></i></Link>
                </div>
                <div className="acca__right">
                
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <span className='span'>01</span> Какой состав сока Alatoo?
                          </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <span className='span'>02</span> Сколько стоит Алатоо и сколько стоит доставка?

                          </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <span className='span'>03</span> Здравствуйте, аллергия часто на этот сок?

                          </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                    </div>
                
                
                
                
                
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accodionsection