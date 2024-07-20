import React from 'react'
import {link} from '../../Utils/link'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-white shadow-md'>
        <div className='container flex justify-between py-4 sm:py-3'>
            <div  className='font-bold text-[20px] px-5'>
                Logo
            </div>
            <div>
                <ul className='flex items-center gap-10'>
                    {link.map((nav) =>(
                        <li key={nav.id}>
                            <NavLink to={nav.path}>{nav.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar