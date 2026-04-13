const Footer = () => {
    const anoAtual = new Date().getFullYear();
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; {anoAtual} Seu Nome. Desenvolvido com React.</p>
                
                <nav className="footer-nav">
                    <ul>
                        <li><a href="mailto:seu-email@exemplo.com">E-mail</a></li>
                        <li><a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/seu-usuario" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li><a href="https://instagram.com/seu-perfil" target="_blank" rel="noreferrer">Instagram</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;