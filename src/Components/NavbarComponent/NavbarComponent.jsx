import React from 'react'
import './NavbarComponent.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomeComponent from '../HomeComponent/HomeComponent'
import AboutUsCompnent from '../AboutUsComponent/AboutUsComponent'
import DepartmentComponent from '../DepartmentComponent/DepartmentComponent'
import EventsComponent from '../EventsComponent/EventsComponent'

const NavbarComponent = () => {
  return (
    <BrowserRouter>
        <div className='nav-container'>
            <Link className='nav-content' to='/'>Home</Link>
            <Link className='nav-content' to='/about'>About</Link>
            <Link className='nav-content' to='/department'>Department</Link>
            <Link className='nav-content' to='/events'>Events</Link>
        </div>
        <Routes>
            <Route exact path='/' element={<HomeComponent/>}></Route>
            <Route exact path='/about' element={<AboutUsCompnent/>}></Route>
            <Route exact path='/department' element={<DepartmentComponent/>}></Route>
            <Route exact path='/events' element={<EventsComponent/>}></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default NavbarComponent