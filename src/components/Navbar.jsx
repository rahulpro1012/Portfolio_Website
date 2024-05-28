import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div >
      
        <ul className='flex flex-row gap-16 text-lg text-white font-extralight mr-24 justify-end font-asap-condensed'>
            
            <NavLink exact to='/' className="navbar"  style={({ isActive }) => {
              return isActive ? { color: "#00FA9A" } : {};}}><li >HOME</li></NavLink>
            <NavLink exact to='/projects' className="navbar"  style={({ isActive }) => {
              return isActive ? { color: "#00FA9A" } : {};}}><li >PROJECTS</li></NavLink>
            <NavLink exact to='/skills' className="navbar"  style={({ isActive }) => {
              return isActive ? { color: "#00FA9A" } : {};}}><li >SKILLS</li></NavLink>
            <NavLink exact to='/experience' className="navbar"  style={({ isActive }) => {
              return isActive ? { color: "#00FA9A" } : {};}}><li >EXPERIENCE</li></NavLink>
        </ul>
    </div>
  )
}

export default Navbar