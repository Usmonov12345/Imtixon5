import React from 'react'
import '../Mahsulotlar/Mahsulotlar.scss'
import Like from './Like/Like'
import Listdata from './Like/Listdata'
import Listr from './Like/Listr'
function Mahsulotlar() {
  return (
    <div>
                <Listdata/>
                <Like/>
                <Listr/>
    </div>
  )
}

export default Mahsulotlar