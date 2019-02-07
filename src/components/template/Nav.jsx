import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem href="/" icon="fa fa-home" label="Início"/>
            <NavItem href="/users" icon="fa fa-users" label="Usuários"/>
        </nav>
    </aside>