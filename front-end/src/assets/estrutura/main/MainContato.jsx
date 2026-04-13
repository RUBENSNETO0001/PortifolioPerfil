const Contato = () => {
    const redesSociais = [
        { nome: "E-mail", link: "mailto:rubensnetomartinssuarezneto@gmail.com", label: "Me envie um e-mail" },
        { nome: "GitHub", link: "https://github.com/RUBENSNETO0001", label: "Veja meus códigos" },
        { nome: "Instagram", link: "https://www.instagram.com/rubensneto0001/", label: "Siga meu dia a dia" }
    ];

    return (
        <section className="contato-container" id="contato">
            <div className="contato-header">
                <h2>Vamos conversar?</h2>
                <p>Estou disponível para novos projetos e conexões.</p>
            </div>
            
            <div className="contato-grid">
                {redesSociais.map((rede) => (
                    <a 
                        href={rede.link} 
                        key={rede.nome} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="contato-card"
                    >
                        <div className="contato-info">
                            <span className="contato-nome">{rede.nome} </span>
                            <span className="contato-label">{rede.label}</span>
                        </div>
                        <span className="contato-arrow">→</span>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Contato;