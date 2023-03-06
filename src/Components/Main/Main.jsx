import React from 'react'
import OneSection from './OneSection/OneSection'
import '../Main/Main.scss'
import Twosection from './Twosection/Twosection'
function Main() {
  return (
    <div >
      <div className="boxc">
        <div className="bort">
           <OneSection/>
           <Twosection/>
        </div>
      </div>
    </div>
  )
}

export default Main