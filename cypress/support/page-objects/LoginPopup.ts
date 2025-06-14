export default class LoginPopup {

    elements = {
        loginForm: () => cy.get('#login'),
        emailInput: () => cy.get('input[name="email"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        loginBtn: () => cy.get('input.submit-login')
    };

    // Enters the provided email into the email input field of the login form.
    enterEmail(email: string): this {
        this.elements.loginForm().should('be.visible').within(() => {
            this.elements.emailInput().should('be.visible').clear().type(email);
        });

        return this;
    }

    // Enters the provided password into the password input field of the login form.
    enterPassword(password: string): this {
        this.elements.loginForm().should('be.visible').within(() => {
            this.elements.passwordInput().should('be.visible').clear().type(password);
        });

        return this;
    }

    // Clicks the login button to submit the login form.
    clickLoginBnt(): this {
        this.elements.loginForm().should('be.visible').within(() => {
            this.elements.loginBtn().click();
        });

        return this;
    }
}
