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
      margin-left: 30px; /* Adiciona uma margem à esquerda para a sublista */
    }
  </style>
</head>
<body>
  <div class="center-container">
    <h1 class="title">Automação do Projeto Sigma</h1>
  </div>
  <div>
    <h4 class="subtitle">Ferramentas/Linguagens que estou utilizando para automação do Projeto Sigma:</h4>
    <ul class="list">
        <ul class="sublist">
            <li>Node.Js e JavaScript</li>
            <li>Visual Studio Code</li>
            <li>Cypress</li>
        </ul>
    </ul>
    <h4 class="subtitle">Node.js é a ferramenta que vai nos entregar a capacidade de interpretar código JavaScript.</h4>
    <ul class="sublist">
        Passos para instalar o Node.js:
            <ul class="sublist">
                <li>Ir para o google e digitar "install node"</li>
                <li>Escolher o link node.org e baixar o Node conforme o sistema operacional que está utilizando</li>
                <li>Link para baixar: https://nodejs.org/en/download/package-manager</li>
                <li>Comando a seguir mostra se o Node foi instalado e a versão, rodar o comando: node -v</li>
                <li>Ir no GitBash (executar como administrador)</li>
                <li>Para iniciar o gerenciador de pacote do Node, digite o comando: npm init -y</li>
                <li>Cria o arquivo package.json, que contém as dependências do projeto</li>
            </ul>
    </ul>
    <h4 class="subtitle">Visual Studio Code é a IDE que será utilizado para editar os códigos dos testes automatizados.
    </h4>
    <ul class="sublist">
        Passos para instalar o Visual Studio Code:
            <ul class="sublist">
                <li>Ir no google e digitar "install Vs Code"</li>
                <li>Escolher o link referente a Download Visual Sudio Code e baixar o Vs Code conforme o sistema operacional que está utilizando</li>
                <li>Link para baixar: https://code.visualstudio.com/download</li>
                <li>Instalar o Vs Code</li>
                <li>Para abrir o Vs Code, basta ir no cmd e digitar "code ."</li>
            </ul>
    </ul>
   <h4 class="subtitle">Cypress é um framework que utiliza a linguagem JavaScript.</h4>
    <ul class="sublist">
        Passos para instalar o Cypress:
            <ul class="sublist">
                <li>Ir no GitBash (executar como administrador)</li>
                <li>Para instalar o Cypress localmente, executar os comandos: "npm install cypress" e "npx cypress install". Caso mostre a mensagem: "Pass the --force option if you'd like to reinstall anyway.", rode o comando npx "cypress install --force"<br><br><strong>** Essa mensagem é mostrada por que já tem uma instalação do Cypress em outro local, então ao rodar o comando acima, para força a instalação para o novo projeto.</strong></li>
                <li>Verificar se o Cypress foi instalado, utilizando o comando: npx cypress verify</li>
            </ul>
    </ul>
    <h4 class="subtitle">Automação referente ao Projeto Sigma. Escrever código fonte para automação de teste de “recuperação de senha”. Sendo que o teste deve conter a seguinte estrutura:</h4>
    <ul class="sublist">
            <ul class="sublist">
                <li>Acessar a aplicação: https://homolog-sigma.decea.mil.br/sigma-ui/login</li>
                <li>Selecionar a opção de “Esqueceu sua Senha?”</li>
                <li>Selecionar o Radio Button: CPF</li>
                <li>Preencher o campo com: 320.100.318-22</li>
                <li>Clicar no botão Enviar</li>
                <li>Validar que o envio foi realizado.</li>
            </ul>
    </ul>
 </div>

</body>
</html>