# Desafio de Desenvolvedor .NET da Função Informática

## Ferramentas utilizadas

#### Visual Studio 2019
* https://visualstudio.microsoft.com/pt-br/thank-you-downloading-visual-studio/?sku=Community&rel=16

#### .NET Framework 4.6.2
* https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net462-developer-pack-offline-installer

#### SQL Server Express 2016 LocalDB
* https://go.microsoft.com/fwlink/?LinkID=799012

## O Desafio
Sistema de manutenção dos dados básicos de clientes e beneficiários.

### Clientes

Na tela de cadastramento/alteração de clientes, incluir um novo campo denominado CPF, que permitirá o cadastramento do CPF do cliente.

Pontos relevantes:

1) O novo campo deverá seguir o padrão visual dos demais campos da tela. 
2) O cadastramento do CPF será obrigatório. 
3) Deverá possuir a formatação padrão de CPF (999.999.999-99). 
4) Deverá consistir se o dado informado é um CPF válido (conforme o cálculo padrão de verificação do dígito verificador de CPF).
5) Não permitir o cadastramento de um CPF já existente no banco de dados, ou seja, não é permitida a existência de um CPF duplicado. 

A aplicação possui um banco de dados interno, que se encontra no caminho “~\FI.WebAtividadeEntrevista\App_Data”, onde será necessária a criação do novo campo no banco de dados, para gravação do valor do CPF

Pontos relevantes:

1) Tabela que deverá armazenar o novo campo de CPF: “CLIENTES”
2) O novo campo deverá ser nomeado como “CPF”

### Beneficiários

Na tela de cadastramento/alteração de clientes, incluir um novo botão denominado Beneficiários, que permitirá o cadastramento de Beneficiários do cliente, o mesmo deve abrir um pop-up para inclusão do CPF e Nome do beneficiário, além disso deve existir um grid onde será exibido os beneficiários que já foram inclusos, no mesmo será possível realizar a manutenção dos beneficiários cadastrados, alteração e exclusão.

Pontos relevantes:

1) O novo botão e novos campos deverão seguir o padrão visual dos demais botões e campos da tela.
2) O campo CPF deverá possuir a formatação padrão (999.999.999-99).
3) Deverá consistir se o dado informado é um CPF válido (conforme o cálculo padrão de verificação do dígito verificador de CPF).
4) Não permitir o cadastro de mais de um beneficiário com o mesmo CPF para o mesmo cliente.
5) O beneficiário será gravado na base de dados quando for acionado o botão Salvar na tela Cadastrar Cliente.
No banco de dados será necessário criar uma nova tabela, para a inclusão dos dados do beneficiário, ID, CPF, NOME, IDCLIENTE.
	
Pontos  relevantes:

1) Tabela que deverá armazenar os dados de beneficiário: “BENEFICIARIOS”
2) O novos campos deverão ser nomeados como “ID”, “CPF”, “NOME”, “IDCLIENTE”
