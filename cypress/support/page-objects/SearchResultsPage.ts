export default class SearchResultsPage {
    static url = 'courses?query=';

    elements = {
        mainTitle: () => cy.get('.search-heading-inner h2 span:first-child'),
        titleQuery: () => cy.get('.search-heading-inner h2 .query-search'),
        certificateTypeFilter: () => cy.contains('div.filter.course-type-filter span.filter-heading3', 'Certificate Type'),
        certificateTypeCard: () => cy.get('span.course-type-1'),
        diplomaTypeCard: () => cy.get('span.course-type-2'),
        newCourseCard: () => cy.get('a.card__start.add-course-id').contains('Start Learning')
    };

    // Applies the Certificate Type filter by clicking the filter and selecting the specified type.
    applyCertificateTypeFilter(certificateType: string): this {
        this.elements.certificateTypeFilter().click();
        cy.get(`label.form-checkbox[for="${certificateType.toLowerCase()}"]`).click();

        return this;
    }

    // Adds the first new course to the cart and saves its title as an alias.
    addNewCourseToCart(): this {
        this.elements.newCourseCard().first()
            .parents('.card')
            .within(() => {
                cy.get('h3').invoke('text').then((text) => {
                    cy.wrap(text.trim()).as('selectedCourseTitle');
                });
                this.elements.newCourseCard().click();
            });

        return this;
    }

    // Asserts that the search results page is loaded and the main title and query are correct.
    assertSearchResultsPage(query: string): void {
        cy.url().should('include', SearchResultsPage.url);
        this.elements.mainTitle().should('have.text', Cypress.env('testData').searchResultsMainTitle);
        this.elements.titleQuery().should('have.text', query);
    }

    // Asserts that all visible cards have the 'Certificate' type label.
    assertCertificateTypeCards(): void {
        this.elements.certificateTypeCard().each($el => {
            cy.wrap($el)
                .invoke('text')
                .invoke('trim')
                .should('eq', 'Certificate');
        });
    }

    // Asserts that all visible cards have the 'Diploma' type label.
    assertDiplomaTypeCards(): void {
        this.elements.diplomaTypeCard().each($el => {
            cy.wrap($el)
                .invoke('text')
                .invoke('trim')
                .should('eq', 'Diploma');
        });
    }
}
