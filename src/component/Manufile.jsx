
import React from "react"
import { NavLink } from "react-router-dom"




const ManuFile = ({ linkname, path }) => {


    return (
        <NavLink to={path} className={({ isActive }) => `btn btn-ghost normal-case text-sm ${isActive ? 'bg-base-200 text-primary' : ''}`}>{linkname}</NavLink>
    )

}


export default ManuFile