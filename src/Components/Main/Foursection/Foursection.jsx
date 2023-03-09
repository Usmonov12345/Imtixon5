import React from 'react'
import '../Foursection/Foursection.scss'
import { useEffect , useState } from 'react'
import {data} from './datas/Fourdata'

import List from './List'
function Foursection() {
  let [ state , setState] = useState([])
  useEffect(()=>{
    const pol = () =>{
        setState(data)
        console.log(data)
    }   
    pol()
  },[])
  return (
       <div className="container">
        <div className='Foursection'>
               { state.map((use) => {
                return <List key={use.id} data={use}/>
              })
              }
        </div>
       </div>
  )
}

export default Foursection