import React from 'react'
import '../Loginsection/Loginsection.scss'
import img from '../../../Image/pip.svg'
import { useForm } from "react-hook-form";
import img1 from '../../../Image/flag.svg'
import sama from '../../../Image/sama.svg'
function Loginsection() {
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    
  return (
    <div className='Loginsection'>
        <div className="container">
            <div className="box">
                <div className="box__left"> 
                    <img src={img} alt="" className='box__left__img' />
                </div>
                <div className="box__right">
                    <p className="box__right__text">
                        Biz bilan bog'lanish
                    </p>
                    <h3 className='box__right__title'>
                            So'rovingizni yuboring
                    </h3>
                        
                     <form onSubmit={handleSubmit(onSubmit)} className="box__right__form" >
                          <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="Ism"  className='box__right__form__input' required/>
                          <input type="email"{...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder="E-mail" className='box__right__form__input' required/>
                          <img src={img1} alt="" className='box__right__form__flag'/>
            
                          <input type="text" {...register("age", { min: 18, max: 99 })} placeholder="+998-88-777-77-77 "  className='box__right__form__input1' required/>
                            <button type='submit' className='box__right__form__btn'>yuborish <img src={sama} alt="" /></button>
                    </form>
                        
                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loginsection