import './Nav.css'
import React from 'react'
import NavItem from './NavItem'


export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem href="/" icon="fa fa-home" label="Início" {...props}/>
            <NavItem href="/users" icon="fa fa-users" label="Usuários" {...props}/>
        </nav>
    </aside>
