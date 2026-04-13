const Footer = () => {
    const anoAtual = new Date().getFullYear();
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; {anoAtual} Rubens Neto. Desenvolvido com React.</p>
                
                <nav className="footer-nav">
                    <ul>
                        <li><a href="mailto:rubensnetomartinssuarezneto@gmail.com">E-mail</a></li>
                        <li><a href="https://github.com/RUBENSNETO0001" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li><a href="https://www.instagram.com/rubensneto0001/" target="_blank" rel="noreferrer">Instagram</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;