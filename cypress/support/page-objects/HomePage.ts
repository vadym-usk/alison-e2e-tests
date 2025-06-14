export default class HomePage {
    elements = {
        header: {
            loginBtn: () => cy.get(`a[href*="/login"]`)
        },
        searchInput: () => cy.get('form#home-header-search input[id="autocomplete"]'),
        searchBtn: () => cy.get('div.search-img-wrapper')
    };

    // Navigates to the home page.
    visit(): void {
        cy.visit('/');
    }

    // Clicks the login button in the header.
    clickLoginBtn(): this {
        this.elements.header.loginBtn().click();
        return this;
    }

    // Types a search query into the search input field.
    enterSearchQuery(query: string): this {
        this.elements.searchInput().clear().type(query);
        return this;
    }

    // Presses Enter in the search input to submit the search.
    pressEnterInSearch(): this {
        this.elements.searchInput().type('{enter}');
        return this;
    }
}
