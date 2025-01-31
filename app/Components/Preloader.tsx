import React from 'react'
import '../../public/Css/preloader.css'

export default function Preloader() {
  return (
    <div className='h-[100vh] w-full bg-yellow-300 !my-0 !py-0'>
      <h1>Cooking in progress..</h1>
      <div id="cooking">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div id="area">
          <div id="sides">
            <div id="pan"></div>
            <div id="handle"></div>
          </div>
          <div id="pancake">
            <div id="pastry"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
