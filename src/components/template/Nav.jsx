import './Nav.css';
import React from 'react';
import NavItem from './NavItem';

export default function Nav(props) {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <NavItem href="/" icon="home" title="Início" />
                <NavItem href="/users" icon="users" title="Usuários" />
                <NavItem href="/anonymous" icon="user-secret" title="Usuário Secreto" />
            </nav>
        </aside>
    )
}