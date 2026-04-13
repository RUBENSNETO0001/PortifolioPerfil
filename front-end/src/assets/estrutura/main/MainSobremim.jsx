const Sobremim = () => {
const skills = ["HTML5", "CSS3", "JavaScript (ES6+)", "PHP", "Python", "Node.js", "java", "React", "Git & GitHub", "Linux", "SQL"];

    return (
        <section className="sobre-container" id="sobre">
            <div className="sobre-grid">

                <div className="sobre-info">
                    <span className="badge">Desenvolvedor Full Stack em Formação</span>
                    <h1>Sobre mim</h1>

                    <p>
                        Olá! Sou o <strong>Rubens</strong>. Atualmente, curso o 5º período de Sistemas para Internet no  <strong>IFAC</strong> (Instituto Federal de Acre).
                        Minha jornada na tecnologia começou com uma base sólida no 2º ano do ensino médio, e hoje foco em construir
                        aplicações modernas, escaláveis e focadas na experiência do usuário.
                    </p>

                    <div className="academic-info">
                        <h3>🎓 Formação</h3>
                        <p>Técnico em Sistemas — <strong>SENAI</strong> (Concluído)</p>
                        <p>Sistemas para Internet — <strong>IFAC</strong> (Cursando)</p>
                    </div>

                    <div className="skills-wrapper">
                        <h3>🛠️ Tecnologias</h3>
                        <div className="skills-tags">
                            {skills.map(skill => (
                                <span key={skill} className="tag">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="cta-buttons">
                        <a href="#contato" className="btn-primary">Entrar em contato</a>
                        <a href="https://github.com/seu-usuario" target="_blank" className="btn-secondary">Ver GitHub</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Sobremim;