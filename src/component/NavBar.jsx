
import React from "react"
import ManuFile from "./Manufile"

const NavBar = () => {
    return (
        <nav className="navbar bg-base-100 border-b border-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><ManuFile path="/" linkname="Home" /></li>
                        <li><ManuFile path="/contact" linkname="Contact" /></li>
                        <li><ManuFile path="/dashboard" linkname="Dashboard" /></li>
                        <li><ManuFile path="/studentList" linkname="Student List" /></li>
                        <li><ManuFile path="/addStudent" linkname="Add Student" /></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">My Application</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><ManuFile path="/" linkname="Home" /></li>
                    <li><ManuFile path="/contact" linkname="Contact" /></li>
                    <li><ManuFile path="/dashboard" linkname="Dashboard" /></li>
                    <li><ManuFile path="/studentList" linkname="Student List" /></li>
                    <li><ManuFile path="/addStudent" linkname="Add Student" /></li>
                </ul>
            </div>

            <div className="navbar-end">
                {/* Add actions like a theme toggle or profile later */}
            </div>
        </nav>
    )
}

export default NavBar