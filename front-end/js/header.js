function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="container">
            <nav>
                <a href="#" class="logo">
                    <img src="./assets/logo.svg" alt="logo">
                </a>

                <ul class="nav-list">
                    <li><a href="#" class="nav-link">Ver Vagas</a></li>
                    <li><a href="#" class="nav-link">Para Empresas</a></li>
                    <li><a href="#" class="nav-link btn-entrar">Entrar</a></li>
                    <li><a href="#" class="nav-link btn-cadastrar">Cadastre-se</a></li>
                </ul>
            </nav>
        </div>
    `;

    return header;
}

const headerElement = createHeader();
document.querySelector('header').appendChild(headerElement);