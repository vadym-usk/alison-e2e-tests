import HomePage from '../support/page-objects/HomePage';
import LoginPopup from '../support/page-objects/LoginPopup';

const homePage = new HomePage();
const loginPopup = new LoginPopup();

Cypress.Commands.add('loginUI', (email: string, password: string) => {
    homePage.visit();
    homePage.clickLoginBtn();

    loginPopup.enterEmail(email);
    loginPopup.enterPassword(password);
    loginPopup.clickLoginBnt();

    cy.get('body').then(($body) => {
        if ($body.find('.sale-pop').length > 0) {
            const $popup = $body.find('.sale-pop');
            if ($popup.is(':visible')) {
                cy.wrap($popup).invoke('hide');
            }
        }
    });
});

Cypress.Commands.add('hideSalePopup', () => {
    cy.get('body').then(($body) => {
        const $popup = $body.find('.sale-pop');
        const $overlay = $body.find('.pop__overlay');

        if ($popup.length > 0 && $popup.is(':visible')) {
            cy.wrap($popup).invoke('hide');
        }

        if ($overlay.length > 0 && $overlay.is(':visible')) {
            cy.wrap($overlay).invoke('remove');
        }
    });
});
