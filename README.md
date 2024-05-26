<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projeto Sigma</title>
  <style>
    .center-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    h4.subtitle {
      color: #888;
      text-align: left;
      margin-left: 20px;
    }
    ul.list {
      text-align: left;
      margin-left: 30px;
    }
    ul.sublist {
      margin-left: 30px; 
    }
</style>
</head>
<body>
  <div class="center-container">
    <h1 class="title">Automação do Projeto Sigma</h1>
  </div>
  <div>
    <h4 class="subtitle">1 - Ferramentas/Linguagens que está sendo utilizada para automação do Projeto Sigma:</h4>
       <ul class="sublist">
            <li>Node.Js e JavaScript</li>
            <li>Visual Studio Code</li>
            <li>Cypress</li>
        </ul>

  <h4 class="subtitle">2 - Node.js é a ferramenta que vai nos entregar a capacidade de interpretar código JavaScript.</h4>
  <h4 class="subtitle">Passos para instalar o Node.js:</h4>
    <ul class="sublist">      
      <li>Ir para o google e digitar "install node"</li>
      <li>Escolher o link node.org e baixar o Node conforme o sistema operacional que está utilizando</li>
      <li>Link para baixar: <a href="https://nodejs.org/en/download/package-manager">https://nodejs.org/en/download/package-manager</a></li>
      <li>Comando a seguir mostra se o Node foi instalado e a versão, rodar o comando: "node -v"</li>
      <li>Ir no GitBash (executar como administrador)</li>
      <li>Para iniciar o gerenciador de pacote do Node, digite o comando: npm init -y</li>
      <li>Cria o arquivo package.json, que contém as dependências do projeto</li>
  </ul>

<h4 class="subtitle">3 - Visual Studio Code é a IDE que será utilizado para editar os códigos dos testes automatizados.
    </h4>
<h4 class="subtitle">Passos para instalar o Visual Studio Code:</h4>
    <ul class="sublist">
        <li>Ir no google e digitar "install Vs Code"</li>
        <li>Escolher o link referente a Download Visual Sudio Code e baixar o Vs Code conforme o sistema operacional que está utilizando</li>
        <li>Link para baixar: <a href="https://code.visualstudio.com/download">https://code.visualstudio.com/download</a></li>
      <li>Instalar o Vs Code</li>
        <li>Instalar o Vs Code</li>
        <li>Para abrir o Vs Code, basta ir no cmd e digitar "code ."</li>
    </ul>
<h4 class="subtitle">4 - Cypress é um framework utilizado para automatizar testes de aplicação web</h4>
<h4 class="subtitle">Passos para instalar o Cypress:</h4>
    <ul class="sublist">        
        <li>Ir no GitBash (executar como administrador)</li>
        <li>Para instalar o Cypress localmente, executar os comandos: "npm install cypress" e "npx cypress install". Caso mostre a mensagem: "Pass the --force option if you'd like to reinstall anyway.", rode o comando npx "cypress install --force"<br><br><strong>** Essa mensagem é mostrada por que já tem uma instalação do Cypress em outro local, então ao rodar o comando acima, para força a instalação para o novo projeto.</strong></li>
        <li>Verificar se o Cypress foi instalado, utilizando o comando: npx cypress verify</li>
    </ul>
    <h4 class="subtitle">5 - Automação referente ao Projeto Sigma. Escrever código fonte para automação de teste de “recuperação de senha”. Sendo que o teste deve conter a seguinte estrutura:</h4>
    <ul class="sublist">
       <li>Acessar a aplicação: <a href="https://homolog-sigma.decea.mil.br/sigma-ui/login">https://homolog-sigma.decea.mil.br/sigma-ui/login</a></li>
      <li>Selecionar a opção de “Esqueceu sua Senha?”</li>
      <li>Selecionar o Radio Button: CPF</li>
      <li>Preencher o campo com: 320.100.318-22</li>
      <li>Clicar no botão Enviar</li>
      <li>Validar que o envio foi realizado.</li>
    </ul>
<h4 class="subtitle">6 - Para fazer o teste automatizado rodar siga os passos abaixo:</h4>
    <ul class="sublist">
      <li>Abrir o GitBash no caminho em que está instalado o sistema: C:\Users\Luluanjo2\documents\ProvaSigma</li>
      <li>Digitar o comando "npx open cypress" e telcar enter</li>
      <li>Ao abrir a tela do Cypress selecionar a opção E2E Testing</li>
      <li>Selecionar o navegador: Chrome e clicar em Star E2E Testing in Chrome</li>
      <li>Na tela a seguir clique no arquivo "esqueceuSenha.cy.js".</li>
      <li>O teste roda com sucesso atendendo todas os passos conforme o item 7.</li>
    </ul>
<h4 class="subtitle">7 - A validação desse teste automatizado do Projeto Sigma consiste nos seguintes passos:</h4>
    <ul class="sublist">
       <li>Abre a tela do site <a href="https://homolog-sigma.decea.mil.br/sigma-ui/login">https://homolog-sigma.decea.mil.br/sigma-ui/login</a> que está definido no arquivo cypress.config.js</li>
      <li>Clicar no link "Esqueceu a senha".</li>
      <li>Abre a tela "Esqueci minha senha" com duas opções de radiobutton: Usuário e CPF.</li>
      <li>Selecionar o radiobutton "CPF" (.check({force: true})).</li>
      <li>Digitar o CPF, que é passado por parâmetro (const CPF = '320.100.318-22').</li>
      <li>Clicar no botão Enviar.</li>
      <li>Valida que o envio foi realizado com sucesso.</li>
    </ul>
 </div>
</body>
</html>