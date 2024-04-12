export interface IArticle {
  id: string;
  type: string;
  photoCover: string;
  title: string;
  description: string;
}

export const dataFake: IArticle[] = [
  {
    id: '1',
    type: 'main',
    photoCover:
      'https://leandromtr.com/wp-content/uploads/2020/05/conceitos-basicos-do-csharp-950x500.jpg',
    title: 'O que é C#?',
    description:
      'C# (C Sharp) é uma linguagem de programação poderosa e popular criada pela Microsoft. Ela é considerada uma linguagem de alto nível, o que significa que é mais fácil de aprender e usar do que linguagens de programação de baixo nível. <br><br> <strong>Veja algumas características do C#:</strong> <br><br> <strong>Orientada a objetos:</strong> C# permite que você crie programas usando conceitos de programação orientada a objetos, como classes, objetos e herança. Isso ajuda a organizar seu código e torná-lo mais reutilizável. <br><br> <strong>Fortemente tipada:</strong> C# é uma linguagem fortemente tipada, o que significa que você precisa declarar o tipo de dado de uma variável antes de usá-la. Isso ajuda a evitar erros e torna seu código mais seguro. <br><br> <strong>Versátil:</strong> C# pode ser usada para desenvolver uma ampla variedade de aplicativos, incluindo aplicativos de desktop, aplicativos web, serviços móveis e jogos. <br><br> Devido às suas características, C# é uma linguagem popular para desenvolvedores iniciantes e experientes. Se você está interessado em aprender a programar, C# é uma ótima opção.',
  },
  {
    id: '2',
    type: 'other',
    photoCover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    title: 'O que é JavaScript?',
    description:
      'JavaScript (JS) é uma linguagem de programação crucial para a web moderna. Junto com HTML e CSS, ela forma a base para sites interativos e dinâmicos. Aqui estão alguns pontos-chave sobre JavaScript: <br><br> <strong>Interpretada:</strong> Diferente de linguagens compiladas (como C++), o código JavaScript não precisa ser convertido em outra linguagem antes da execução. Um interpretador embutido no navegador lê e executa o código diretamente. <br><br> <strong>Orientada a objetos:</strong> Embora não seja puramente orientada a objetos como Java, o JavaScript permite criar objetos, definir propriedades e métodos para encapsular dados e funcionalidades. <br><br> <strong>Script de alto nível:</strong> É uma linguagem de alto nível, o que significa que sua sintaxe é relativamente fácil de aprender e ler, parecendo mais com a linguagem humana do que com linguagens de máquina de baixo nível. <br><br> <strong>Executada no cliente (client-side):</strong> O código JavaScript tradicionalmente é executado diretamente pelo navegador do usuário, tornando as páginas web interativas. Por exemplo, validação de formulários, animações e carregamento dinâmico de conteúdo são possíveis graças ao JavaScript. <br><br> <strong>Versátil:</strong> JavaScript tem evoluído e expandido seu uso para além dos navegadores. Tecnologias como Node.js permitem a execução de JavaScript no servidor, possibilitando a criação de uma ampla variedade de aplicações, incluindo back-ends, serviços web e até mesmo aplicativos desktop. <br><br> Resumindo, JavaScript é uma linguagem de programação essencial para a criação de sites interativos e dinâmicos. Sua natureza interpretada, orientação a objetos, sintaxe de alto nível e versatilidade a tornam uma ferramenta poderosa para desenvolvedores web modernos.',
  },
  {
    id: '3',
    type: 'other',
    photoCover:
      'https://hermes.dio.me/articles/cover/7b89fda2-4af3-4ae0-98bc-ad2b65854909.png',
    title: 'O que é Java?',
    description:
      'Java é uma linguagem de programação orientada a objetos, de alto nível, robusta, segura e amplamente utilizada para o desenvolvimento de uma variedade de aplicações. Aqui estão alguns pontos-chave sobre Java: <br><br> <strong>Orientada a objetos:</strong> Java adota o paradigma de programação orientada a objetos, que utiliza conceitos como classes, objetos, herança e encapsulamento para organizar o código de forma modular e reutilizável. <br><br> <strong>Multiplataforma:</strong> Graças à máquina virtual Java (JVM), o código Java compilado (bytecode) pode ser executado em qualquer plataforma operacional que possua uma implementação da JVM. Isso permite que os desenvolvedores escrevam "escreva uma vez, execute em qualquer lugar" (WORA - Write Once, Run Anywhere). <br><br> <strong>Fortemente tipada:</strong> Java é uma linguagem fortemente tipada, o que significa que o tipo de dado de uma variável precisa ser declarado antes de seu uso. Essa característica ajuda a prevenir erros durante a execução do programa. <br><br> <strong>Gerenciamento automático de memória:</strong> Java possui um coletor de lixo automático, que libera a memória ocupada por objetos que não estão mais sendo utilizados. Isso elimina a necessidade de gerenciamento manual de memória, tornando o desenvolvimento em Java mais fácil e menos propenso a erros. <br><br> <strong>Grande comunidade e ecossistema:</strong> Java possui uma grande comunidade global de desenvolvedores e um vasto ecossistema de bibliotecas, frameworks e ferramentas, tornando mais fácil encontrar soluções para problemas comuns e acelerar o processo de desenvolvimento. <br><br> Java é uma linguagem de programação versátil e poderosa que oferece diversas vantagens para o desenvolvimento de software. Sua natureza orientada a objetos, multiplataforma, segurança e amplo ecossistema a tornam uma escolha popular para uma ampla gama de aplicações.',
  },
  {
    id: '4',
    type: 'other',
    photoCover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmngeGJFNocA_JXfnBGI-yKvz1WNGQ2P7hYqKDrpO2w&s',
    title: 'O que é Python?',
    description: 'Python é uma linguagem de programação de alto nível, conhecida por sua simplicidade e versatilidade. Ela se destaca por sua sintaxe clara e concisa, que se assemelha mais à linguagem humana do que a linguagens de baixo nível, tornando o código Python mais fácil de ler, escrever e manter. <br><br> <strong>Características:</strong> <br><br> <strong>Interpretada:</strong> Diferente de linguagens compiladas como C++, o código Python não precisa ser convertido em outra linguagem antes da execução. Um interpretador lê e executa o código diretamente, tornando o desenvolvimento mais rápido e dinâmico. <br><br> <strong>Orientada a Objetos:</strong> Python suporta paradigmas de programação como procedural e funcional, mas oferece recursos de orientação a objetos, permitindo a criação de classes e objetos para encapsular dados e funcionalidades, promovendo organização e reuso de código. <br><br> <strong>Tipada Dinamicamente:</strong> Ao contrário de Java, que é fortemente tipada, Python é tipada dinamicamente. Isso significa que o tipo de dado de uma variável pode ser alterado durante a execução do programa, oferecendo flexibilidade, mas exigindo atenção extra do desenvolvedor para evitar erros. <br><br> <strong>Grande Biblioteca Padrão:</strong> Python possui uma extensa biblioteca padrão, oferecendo módulos para tarefas comuns como manipulação de arquivos, redes, datas, expressões regulares e muito mais. Isso reduz a necessidade de escrever código do zero e agiliza o desenvolvimento. <br><br> Python é uma linguagem de programação poderosa e amigável que oferece uma curva de aprendizado suave para iniciantes e funcionalidades avançadas para programadores experientes. Sua versatilidade a torna aplicável a diversos domínios, tornando-se uma escolha popular para desenvolvimento web, ciência de dados, automação e muito mais.',
  },
];
