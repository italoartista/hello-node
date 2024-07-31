let style = `
    <style>
        body {
            font-family: consolas;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #333;
            color: white;
            padding: 1em;
            text-align: center;
        }
        nav ul {
            list-style: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin-right: 10px;
        }
        nav ul li a {
            text-decoration: none;
            color: white;
        }
        main {
            padding: 1em;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1em;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>

`

const menu = `
<nav>
    <ul>
        <li><a href="/bio">Biografia</a></li>
        <li><a href="/projects">Projetos</a></li>
        <li><a href="/contact">Contato</a></li>
    </ul>
</nav>
`;

const header = ` 
<header>
    <h1>IA website</h1>
    ${menu}
</header>
`;	

const head = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IA website</title>
    ${style}
</head>
<body>
${header}
`;

const main = `
<main>
    <h1>IA website</h1>
    <p>Este é um site de IA</p>
</main>
`;


const bio = `
<main>
    <h1>Biografia</h1>
    <p>Nasceu em 1980, programa deste 2000...</p>
    <p>... e é um grande entusiasta de IA</p>   
</main>
`

const projects = `  
<main>
    <h1>Projetos</h1>
<ul>
    <li>Projeto com C++</li>
    <li>Projeto com Python</li>
    <li>Projeto com Java</li>
    <li>Projeto com JavaScript</li>
</ul>
</main>
`

const contact = `
<main>
    <h1>Contato</h1>
    <p>Telefone: 11 9999-9999</p>
    <form> 
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <label for="msg">Mensagem:</label>
        <textarea id="msg" name="msg"></textarea>
        <button type="submit">Enviar</button>
    </form>
</main>
`	

const footer = `
</body>
<footer>
    <p> Todos os direitos reservados</p>
</footer>
`


export {head, main, bio, projects, contact, footer};