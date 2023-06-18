import React from 'react'

import { RxCross2 } from 'react-icons/rx'

const Sidebar = () => {
  return (
    <div className='sidebar' style={{transition:'ease-in 0.2s'}}>
          {/* <RxCross2 size={32} className='cross'  /> */}
          
      <div className='sidebar-title' onClick={event => window.location.href = '/home'}
>Home</div>
          <div className='sidebar-title1'>WareHouse</div>
          <div className='sidebar-title1'>Retail</div>
    </div>
  )
}

export default Sidebar