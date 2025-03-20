import React from 'react'
import { appleImg } from '../utils'
import { searchImg } from '../utils'
const Navbar = () => {
  return (
    <header>
        <nav>
            <img src={appleImg} alt="apple" width={14} height={18} />

            <div>
                {
                    ['Phone', 'Macbooks','Tablets'].map((nav)=>(
                        <div key={nav}>
                          {nav}
                        </div>
                    ))
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar
