
import React from "react"
import { NavLink } from "react-router-dom"




const ManuFile = (props) => {


    return (
        <NavLink to={props.path}  className={({ isActive }) => `btn btn-ghost normal-case text-sm ${isActive ? 'bg-base-200 text-primary' : ''}`}>{props.linkname}</NavLink>
    )

}


export default ManuFile