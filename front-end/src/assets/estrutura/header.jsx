import { useState } from 'react'

const Header = () => {
    return(
        <header>
            <h1>Portifólio</h1>
            <nav>
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;