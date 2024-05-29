import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center p-4 nav-bg w-full fixed top-0 left-0 z-50">
      <h1 className="highlight-text text-white">Rahul</h1>
      <ul className="flex flex-row gap-16 text-lg text-white font-extralight mr-24 justify-end font-asap-condensed">
        <NavLink exact to='/' className="navbar" style={({ isActive }) => ({
          color: isActive ? "#00FA9A" : "inherit"
        })}>
          <li>HOME</li>
        </NavLink>
        <NavLink exact to='/About' className="navbar" style={({ isActive }) => ({
          color: isActive ? "#00FA9A" : "inherit"
        })}>
          <li>ABOUT ME</li>
        </NavLink>
        <NavLink exact to='/projects' className="navbar" style={({ isActive }) => ({
          color: isActive ? "#00FA9A" : "inherit"
        })}>
          <li>PROJECTS</li>
        </NavLink>
        <NavLink exact to='/skills' className="navbar" style={({ isActive }) => ({
          color: isActive ? "#00FA9A" : "inherit"
        })}>
          <li>SKILLS</li>
        </NavLink>
        <NavLink exact to='/experience' className="navbar" style={({ isActive }) => ({
          color: isActive ? "#00FA9A" : "inherit"
        })}>
          <li>EXPERIENCE</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
