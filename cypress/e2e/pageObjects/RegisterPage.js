import userData from '../../fixtures/users/userData.json'
// cypress/pages/RegisterPage.js
class RegisterPage {
    static selectorsList = {
        botaoCadastrarPopUpLogin: '.Ydjie',
        botaoContinuarCadastro: '.jfWhpQ',
        campoNomeCadastro: '#name',
        campoCPFCadastro: '#cpf',
        campoEmailCadastro: '#email',
        campoCelularCadastro: '#phoneNumber',
        campoDataNascCadastro: '#birthdate',
        campoSenhaCadastro: '#password',
        campoConfirmSenhaCadastro: '#confirmPassword',
        termosCheckBoxCadastro: '#acceptedTermsUse',
        campoLoginIconePerfilEntrar: '#login',
        campoSenhaIconePerfilEntrar: '#password',
        botaoEntrarIconePerfilEntrar: '.kINcSM',
        campoCodigoVerificacao: '.jNdhiG',
        botaoFecharPopUpVerificacao: '.cCOtnd',
        botaoEntrarCadastro: '.yLVYI',
    }

    realizarCadastroUsuario(nomeCadastro, cpfCadastro, dataNascCadastro, senhaCadastro) {
      cy.get(RegisterPage.selectorsList.botaoCadastrarPopUpLogin).click({force: true});
      
      cy.get(RegisterPage.selectorsList.campoNomeCadastro).type(nomeCadastro);
      cy.get(RegisterPage.selectorsList.campoCPFCadastro).type(cpfCadastro);
      cy.get(RegisterPage.selectorsList.campoEmailCadastro).type(userData.emailSuccess);
      cy.get(RegisterPage.selectorsList.campoCelularCadastro).type(userData.phoneSuccess);
      cy.get(RegisterPage.selectorsList.campoDataNascCadastro).type(dataNascCadastro);
      cy.get(RegisterPage.selectorsList.campoSenhaCadastro).type(senhaCadastro);
      cy.get(RegisterPage.selectorsList.campoConfirmSenhaCadastro).type(senhaCadastro);
      cy.get(RegisterPage.selectorsList.termosCheckBoxCadastro).click();
      cy.get(RegisterPage.selectorsList.botaoContinuarCadastro).click();
      
    }
    
    realizarLoginUsuario() {
      cy.get(RegisterPage.selectorsList.campoLoginIconePerfilEntrar).type(userData.login);
      cy.get(RegisterPage.selectorsList.campoSenhaIconePerfilEntrar).type(userData.password);
      cy.get(RegisterPage.selectorsList.botaoEntrarIconePerfilEntrar).click();
      
    }

    fecharPopUpCodigoVerificacao() {
      cy.get(RegisterPage.selectorsList.campoCodigoVerificacao).eq(0);
      cy.get(RegisterPage.selectorsList.botaoFecharPopUpVerificacao).should('be.visible').click();
  }

    clicaNoBotaoEntrarNoMenuCadastro() {
      cy.get(RegisterPage.selectorsList.botaoEntrarCadastro).should('be.visible').click();
    }
}
  export default new RegisterPage();
  
