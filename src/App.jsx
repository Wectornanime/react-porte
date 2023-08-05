import './App.css'

import About from './Components/About'
import SocialIcon from './Components/Social-Icons'
import Container from './Components/Container'
import Badges from './Components/Badges'
import Card from './Components/Card'

function App() {
    return (
        <main>
        <About
        imageURL="https://github.com/Wectornanime.png"
        imageAlt="Foto de Wectornanime"
        name="Wectornanime"
        subName="Estudante de desenvolvimento"
        description="Meu nome é Wectornanime, sou tecnico de redes de computadores e estudante de Análise e Desenvolvimento de Sistemas de 2º periodo pela faculdade Senac."
        >
            <SocialIcon
            link="https://github.com/Wectornanime"
            name="logo-github"/>

            <SocialIcon
            link="https://www.linkedin.com/in/wectornanime-nascimento/"
            name="logo-linkedin"/>
        </About>
        
        <Container
        class="hability"
        title="Habilidades"
        description="Tecnologias que tenho dominio."
        >
            <Badges
            name="devicon-git-plain"
            text="Git"
            />

            <Badges
            name="devicon-github-plain"
            text="GitHub"
            />

            <Badges
            name="devicon-html5-plain"
            text="HTML 5"
            />

            <Badges
            name="devicon-css3-plain"
            text="CSS 3"
            />

            <Badges
            name="devicon-javascript-plain"
            text="Java Script"
            />

            <Badges
            name="devicon-typescript-plain"
            text="Type Script"
            />
        
            <Badges
            name="devicon-angularjs-plain"
            text="Angular"
            />

            <Badges
            name="devicon-react-plain"
            text="React"
            />

            <Badges
            name="devicon-mysql-plain"
            text="My SQL"
            />

            <Badges
            name="devicon-python-plain"
            text="Python"
            />

            <Badges
            name="devicon-flask-plain"
            text="Flask"
            />                        
        </Container>

        <Container
        class="projects"
        title="Projetos"
        description="Projetos realizados recentemente."
        >
            <Card
            imageLink="imagem.jpg"
            imageAlt="Imagem do projeto"
            title="Projeto de Slide"
            description="Um Slide feito com HTML, CSS e JS puro."
            link="https://github.com/Wectornanime/Projeto_de_slide"
            />
            
            <Card
            imageLink="imagem.jpg"
            imageAlt="Imagem do projeto"
            title="Blog em Angular"
            description='Desafio de projeto proposto pela DIO (Digital Innovation One) no bootcamp "Potencial Tech Angular Developer - powered by iFood".'
            link="https://github.com/Wectornanime/DIO-desafio_de_projeto-Angular-Blog"
            />

            <Card
            imageLink="imagem.jpg"
            imageAlt="Imagem do projeto"
            title="Buzz Feed Clone"
            description='Desafio de projeto proposto pela DIO (Digital Innovation One) no bootcamp "Potencial Tech Angular Developer - powered by iFood". No projeto foi posposto, desenvolver um clone do BuzzFeed utilizando Angular. Nele foi montado um pequeno teste simples, com o intuito de revelar se você é um "vilão", ou um "herói".'
            link="https://github.com/Wectornanime/DIO-desafio_de_projeto-Angular-BuzzFeed-Clone"
            />
            
            <Card
            imageLink="imagem.jpg"
            imageAlt="Imagem do projeto"
            title="Cadastro Idoso"
            description="O projeto é uma aplicação web completa com front, back e banco de dados, para cadastro de idosos e remédios que podem ser associados ao idoso."
            link="https://github.com/Wectornanime/cadastroIdoso"
            />   
        </Container>
        
        </main>
    )
}

export default App
