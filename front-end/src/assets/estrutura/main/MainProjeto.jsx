const Projetos = () => {
    const meusProjetos = [
        {
            id: 1,
            titulo: "Arcano Store",
            descricao: "O ponto de encontro para otakus que levam a cultura de anime a sério... mas nem tanto. Encontre aqui os melhores produtos, figures e acessórios direto do universo geek para a sua coleção. Se é de anime, está na Arcano!",
            techs: ["React", "PHP", "SQL"],
            linkGithub: "https://github.com/RUBENSNETO0001/--Arcano_Store--.git",
            linkDemo: "#"
        },
        {
            id: 2,
            titulo: "Gerenciamento de Biblioteca",
            descricao: "Aplicação em Java para gerenciamento de bibliotecas, com funcionalidades CRUD para livros, empréstimos e usuários. Desenvolvida com foco em prática de programação orientada a objetos e manipulação de dados via console.",
            techs: ["Java", "SQL", "Swing"],
            linkGithub: "https://github.com/falk-dev/java-library-manager.git",
            linkDemo: "#"
        },
        {
            id: 3,
            titulo: "Loja Belli Douceur",
            descricao: "Projeto de e-commerce para uma loja de doces, desenvolvido com HTML, CSS e JavaScript. O site apresenta um design atraente e responsivo, permitindo aos usuários navegar pelos produtos, adicionar itens ao carrinho e finalizar compras de forma intuitiva.",
            techs: ['HTML', 'CSS', 'JavaScript'],
            linkGithub: "https://github.com/RUBENSNETO0001/--LojaBelliDouceur--",
            linkDemo: "#"
        }
    ];

    return (
        <section className="projetos-container" id="projetos">
            <h2>Projetos</h2>
            <div className="carrossel-wrapper">
                <div className="projetos-lista-carrossel">
                    {meusProjetos.map((projeto) => (
                        <div className="projeto-item" key={projeto.id}>
                            <h3>{projeto.titulo}</h3>
                            <p>{projeto.descricao}</p>
                            <div className="projeto-techs">
                                {projeto.techs.map(tech => (
                                    <span key={tech} className="tag-mini">{tech}</span>
                                ))}
                            </div>
                            <div className="projeto-links">
                                <a href={projeto.linkGithub} className="btn-card">GitHub</a>
                                <a href={projeto.linkDemo} className="btn-card">Demo</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projetos;