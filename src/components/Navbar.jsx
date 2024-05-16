import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <ul className='flex flex-row float-end gap-16 text-lg mr-16 text-white font-semibold'>
            <Link to='/'><li>HOME</li></Link>
            <Link to='/projects'><li>PROJECTS</li></Link>
            <Link to='/skills'><li>SKILLS</li></Link>
            <Link to='experience'><li>EXPERIENCE</li></Link>
        </ul>
    </div>
  )
}

export default Navbar