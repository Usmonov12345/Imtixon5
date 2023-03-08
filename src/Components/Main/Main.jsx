import React from 'react'
import OneSection from './OneSection/OneSection'
import '../Main/Main.scss'
import Twosection from './Twosection/Twosection'
import Threesection from './Threesection/Threesection'
import Foursection from './Foursection/Foursection'
import Logosection from './Logosection/Logosection'
import Loginsection from './Loginsection/Loginsection'
function Main() {
  return (
    <div >
      <div className="boxc">
        <div className="bort">
           <OneSection/>
           <Twosection/>
        </div>
           <Threesection/>
           <Foursection/> 
           <Loginsection/>
           <Logosection/>
      </div>
    </div>
  )
}

export default Main