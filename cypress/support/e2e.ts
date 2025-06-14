import './commands'

Cypress.on('uncaught:exception', (err) => {
    if (
        err.message.includes('reviews is not defined') ||
        err.message.includes('Script error') ||
        err.message.includes('Cannot read properties of undefined') ||
        (err.message.includes('select2 is not a function'))
    ) {
        return false;
    }
});
