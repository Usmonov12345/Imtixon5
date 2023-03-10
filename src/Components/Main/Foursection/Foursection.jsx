import React from 'react'
import '../Foursection/Foursection.scss'
import { useEffect , useState } from 'react'
import {data} from './datas/Fourdata'
import { Link } from 'react-router-dom'
import List from './List'
function Foursection() {
  let [ state , setState] = useState([])
  useEffect(()=>{
    const pol = () =>{
        setState(data)
    }   
    pol()
  },[])
  return (
       <div className="container">
        <h2 className='Foursection__title'>Mahsulotlarimiz <br /> ro'yxati</h2>
        <div className='Foursection'>
               { state.map((use) => {
                return <List key={use.id} data={use}/>
              })
              }
        </div>
        <Link className='Foursection__link' to="/Mahsulotlar">
          Barcha mahsulotlarni ko’rish<i class="fa  fa-arrow-right Foursection__icons"></i>
        </Link>
       </div>
  )
}

export default Foursection