import "./NavItem.css"
import React from 'react'


export default props =>
    <a href={props.href}>
        <i className={props.icon} /> {props.label}
    </a>
