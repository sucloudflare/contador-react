<h1>Projeto Contador em React</h1>
<p>Bem-vindo ao projeto Contador! Este é um projeto simples criado com React que permite você aumentar e diminuir um número clicando em botões. Vamos aprender como isso funciona e como você pode rodar o projeto no seu computador.</p>
    
<h2>O que é React?</h2>
<p>React é uma biblioteca JavaScript que ajuda a criar interfaces de usuário de uma maneira fácil e organizada. Com React, você pode criar componentes reutilizáveis que tornam o código mais limpo e mais fácil de manter.</p>
    
<h2>Estrutura do Projeto</h2>
<p>Aqui está uma visão geral dos arquivos principais no nosso projeto:</p>
<ul>
   <li><code>src/App.js</code>: Este é o arquivo principal onde definimos nossos componentes.</li>
  <li><code>src/App.css</code>: Este arquivo contém os estilos (cores, tamanhos, etc.) do nosso projeto.</li>
 <li><code>public/index.html</code>: Este é o arquivo HTML onde nosso app React será carregado.</li>
</ul>
    
 <h2>Código explicado</h2>
<h3><code>src/App.js</code></h3>
 <pre><code>
import React, { useState } from 'react';
import './App.css';

function Contador() {
  const [aumentar, setAumentar] = useState(0);

  const mais = () => {
    setAumentar(aumentar + 1);
  };

  const menos = () => {
    setAumentar(aumentar - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aumentar: {aumentar}</h1>
        <button onClick={mais}>Aumentar</button>
        <button onClick={menos}>Diminuir</button>
      </header>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Contador />
    </div>
  );
}

export default App;
    </code></pre>
    
<h3>O que esse código faz?</h3>
<ul>
  <li><strong>Importações</strong>: Estamos trazendo o React e o <code>useState</code> para usar no nosso projeto. O <code>useState</code> nos ajuda a criar e controlar variáveis que podem mudar, como o nosso contador.</li>
  <li><strong>Função Contador</strong>:
  <ul>
   <li><code>useState(0)</code>: Começamos com o contador no valor 0.</li>
   <li><code>mais</code> e <code>menos</code>: Essas funções aumentam e diminuem o valor do contador.</li>
  <li><strong>Retorno JSX</strong>: Aqui estamos criando a estrutura do nosso contador, mostrando o valor atual e dois botões para incrementar e decrementar.</li>
   </ul>
   </li>
  <li><strong>Função App</strong>: Esta é a função principal que inclui nosso componente <code>Contador</code>.</li>
</ul>
    
<h3><code>src/App.css</code></h3>
  <pre><code>
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
    </code></pre>
    
 <h3>O que esse CSS faz?</h3>
<ul>
<li><code>.App</code>: Centraliza o texto dentro do contêiner <code>.App</code>.</li>
<li><code>.App-header</code>: Define o cabeçalho com um fundo escuro e centraliza tudo vertical e horizontalmente.</li>
<li><code>button</code>: Define o estilo dos botões, como margens, padding, tamanho da fonte, e o cursor de pointer (mãozinha) ao passar o mouse sobre o bot
  o.</li>
    </ul>
    
<h2>Como Rodar o Projeto</h2>
  <p>Siga esses passos para rodar o projeto no seu computador:</p>
<ul>
 <li><strong>Instalar o Node.js</strong>: Primeiro, você precisa instalar o Node.js, que vem com o npm (gerenciador de pacotes do Node). <a href="https://nodejs.org/">Baixe aqui</a>.</li>
 <li><strong>Baixar o Projeto</strong>: Clone este repositório ou baixe o ZIP e extraia os arquivos.</li>
  <li><strong>Instalar Dependências</strong>: No terminal, navegue até a pasta do projeto e execute o comando:</li>
</ul>
  <pre><code>npm install</code></pre>
 <ul>
  <li><strong>Rodar o Projeto</strong>: Após instalar as dependências, rode o comando:</li>
 </ul>
 <pre><code>npm start</code></pre>
 <ul>
 <li><strong>Ver no Navegador</strong>: O projeto vai abrir automaticamente no seu navegador. Se não abrir, acesse <a href="http://localhost:3000">http://localhost:3000</a>.</li>
    </ul>
    
 <p>Agora você deve ver o contador na tela. Clique nos botões para ver o número aumentar e diminuir!</p>
    
   
<h2>Divirta-se!</h2>
<p>Espero que você se divirta aprendendo e mexendo no código deste projeto simples de contador. React é uma ferramenta poderosa e divertida para criar interfaces de usuário. Continue explorando e aprendendo!</p>
