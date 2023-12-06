/// <reference types="cypress" />

describe('casos de teste', () => {

  it('realizar login com dados corretos', () => {
   cy.visit('/' + 'login');
   cy.get('input[type="email"]').type('junior@gmail.com');
   cy.get('input[type="password"]').type('1234');
   cy.contains('button', 'Entrar').click();
   cy.contains('span', 'Sair').should('be.visible');
  });
  it('realizar login com email correto e senha incorreta', () => {
   cy.visit('/' + 'login');
   cy.get('input[type="email"]').type('junior@gmail.com');
   cy.get('input[type="password"]').type('123');
   cy.contains('button', 'Entrar').click();
   cy.on('window:alert', (str) => {
    expect(str).to.equal('Email ou senha incorretos');
   });
  });
  it('realizar login com email incorreto', () => {
   cy.visit('/' + 'login');
   cy.get('input[type="email"]').type('juniorgmail.comm');
   cy.get('input[type="password"]').type('123');
   cy.contains('button', 'Entrar').click();
   cy.on('window:alert', (str) => {
    expect(str).to.equal('Email ou senha incorretos');
   });
  });
  it('criar conta com email já existente', () => {
   cy.visit('/' + 'register');
   cy.get('[placeholder="Primeiro Nome"]').type('Lourival');
   cy.get('[placeholder="Ultimo Nome"]').type('Junior');
   cy.get('[placeholder="E-mail"]').type('junior@gmail.com');
   cy.get('[placeholder="Senha"]').type('123');
   cy.get('[placeholder="Contato"]').type('1234455666');
   cy.get('[placeholder="CPF"]').type('12345543223');
   cy.contains('button', 'Cadastrar').click();
   cy.on('window:alert', (str) => {
    expect(str).to.equal('Email já cadastrado');
   });
  });
  it('criar conta senha inválida(6 dígitos)', () => {
   cy.visit('/' + 'register');
   cy.get('[placeholder="Primeiro Nome"]').type('Lourival');
   cy.get('[placeholder="Ultimo Nome"]').type('Junior');
   cy.get('[placeholder="E-mail"]').type('junior@gmail.com');
   cy.get('[placeholder="Senha"]').type('123456');
   cy.get('[placeholder="Contato"]').type('1234455666');
   cy.get('[placeholder="CPF"]').type('12345543223');
   cy.contains('button', 'Cadastrar').click();
   cy.on('window:alert', (str) => {
    expect(str).to.equal('Senha precisa ter no mínimo 6 dígitos');
   });
  });
  it('criar conta com CPF inválido', () => {
   cy.visit('/' + 'register');
   cy.get('[placeholder="Primeiro Nome"]').type('Lourival');
   cy.get('[placeholder="Ultimo Nome"]').type('Junior');
   cy.get('[placeholder="E-mail"]').type('junior@gmail.com');
   cy.get('[placeholder="Senha"]').type('123');
   cy.get('[placeholder="Contato"]').type('1234455666');
   cy.get('[placeholder="CPF"]').type('12345678');
   cy.contains('button', 'Cadastrar').click();
   cy.on('window:alert', (str) => {
    expect(str).to.equal('Insira um CPF válido');
   });
  });
  it('criar conta com dados em branco', () => {
   cy.visit('/' + 'register');
   cy.contains('button', 'Cadastrar').click();
   cy.on('window:alert', (str) => {
    expect(str).to.equal('Preencha todos os campos!');
   });
  });
  it('criar anúncio com dados em branco', () => {
   cy.visit('/' + 'login');
   cy.get('input[type="email"]').type('junior@gmail.com');
   cy.get('input[type="password"]').type('1234');
   cy.contains('button', 'Entrar').click();
   cy.contains('span', 'Sair').should('be.visible');
   cy.contains('button', 'Anunciar').click();
   cy.contains('button', 'Anunciar').click();
   cy.on('window:alert', (str) => {
    expect(str).to.equal('Você precisa adicionar imagens do seu imóvel');
   });
  });
  it('criar anúncio sem inseriri imagens', () => {
   cy.visit('/' + 'login');
   cy.get('input[type="email"]').type('junior@gmail.com');
   cy.get('input[type="password"]').type('1234');
   cy.contains('button', 'Entrar').click();
   cy.contains('span', 'Sair').should('be.visible');
   cy.contains('button', 'Anunciar').click();
   cy.get('[placeholder="R$ 1000,00"]').type('2000');
   cy.get('[placeholder="Somente Números"]').type('62900-000');
   cy.get('[placeholder="Informe sua rua"]').type('Rua das Flores');
   cy.get('label[for="Número"] + input').type('123');
   cy.get('label[for="Bairro"] + input').type('Centro');
   cy.get('[placeholder="Crie um titulo chamativo para seu anuncio"]').type('Apartamento Aconchegante no Coração da Cidade');
   cy.get('[placeholder="Descreva seu anuncio"]').type('Este lindo apartamento de 2 quartos é perfeito para quem busca conforto e conveniência. Com uma espaçosa sala de estar, cozinha moderna e uma vista deslumbrante da cidade, este é o lugar perfeito para chamar de lar.');
   cy.get('[placeholder="Número para contato da locação"]').type('(88) 988888888');
   cy.contains('button', 'Anunciar').click();
   cy.on('window:alert', (str) => {
    expect(str).to.equal('Você precisa adicionar imagens do seu imóvel');
   });
  });
  it('criar anúncio inserindo 3 imagens', () => {
   cy.visit('/' + 'login');
   cy.get('input[type="email"]').type('junior@gmail.com');
   cy.get('input[type="password"]').type('1234');
   cy.contains('button', 'Entrar').click();
   cy.contains('span', 'Sair').should('be.visible');
   cy.contains('button', 'Anunciar').click();
   cy.get('[placeholder="R$ 1000,00"]').type('2000');
   cy.get('[placeholder="Somente Números"]').type('62900-000');
   cy.get('[placeholder="Informe sua rua"]').type('Rua das Flores');
   cy.get('label[for="Número"] + input').type('123');
   cy.get('label[for="Bairro"] + input').type('Centro');
   cy.get('[placeholder="Crie um titulo chamativo para seu anuncio"]').type('Apartamento Aconchegante no Coração da Cidade');
   cy.get('[placeholder="Descreva seu anuncio"]').type('Este lindo apartamento de 2 quartos é perfeito para quem busca conforto e conveniência. Com uma espaçosa sala de estar, cozinha moderna e uma vista deslumbrante da cidade, este é o lugar perfeito para chamar de lar.');
   cy.get('[placeholder="Número para contato da locação"]').type('(88) 988888888');
   cy.get('input[type="file"]').selectFile('sala.jpg', { force: true });
   cy.get('input[type="file"]').selectFile('sala.jpg', { force: true });
   cy.get('input[type="file"]').selectFile('sala.jpg', { force: true });
   cy.contains('button', 'Anunciar').click();
  });
  it('criar anúncio inserindo número inválido de imagens(2 imagens)', () => {
   cy.visit('/' + 'login');
   cy.get('input[type="email"]').type('junior@gmail.com');
   cy.get('input[type="password"]').type('1234');
   cy.contains('button', 'Entrar').click();
   cy.contains('span', 'Sair').should('be.visible');
   cy.contains('button', 'Anunciar').click();
   cy.get('[placeholder="R$ 1000,00"]').type('2000');
   cy.get('[placeholder="Somente Números"]').type('62900-000');
   cy.get('[placeholder="Informe sua rua"]').type('Rua das Flores');
   cy.get('label[for="Número"] + input').type('123');
   cy.get('label[for="Bairro"] + input').type('Centro');
   cy.get('[placeholder="Crie um titulo chamativo para seu anuncio"]').type('Apartamento Aconchegante no Coração da Cidade');
   cy.get('[placeholder="Descreva seu anuncio"]').type('Este lindo apartamento de 2 quartos é perfeito para quem busca conforto e conveniência. Com uma espaçosa sala de estar, cozinha moderna e uma vista deslumbrante da cidade, este é o lugar perfeito para chamar de lar.');
   cy.get('[placeholder="Número para contato da locação"]').type('(88) 988888888');
   cy.get('input[type="file"]').selectFile('sala.jpg', { force: true });
   cy.get('input[type="file"]').selectFile('sala.jpg', { force: true });
   cy.wait(1000);
   cy.contains('button', 'Anunciar').click();
   cy.wait(1000);
   cy.on('window:alert', (str) => {
    expect(str).to.equal('Por favor, insira no mínimo 3 imagens do seu imóvel');
   });
  });
  it('excluir um anúncio criado', () => {
   cy.visit('/' + 'login');
   cy.get('input[type="email"]').type('junior@gmail.com');
   cy.get('input[type="password"]').type('1234');
   cy.contains('button', 'Entrar').click();
   cy.contains('span', 'Sair').should('be.visible');
   cy.contains('button', 'Detalhes').first().click();
   cy.contains('button', 'Excluir anúncio').click();
  });

  

})



