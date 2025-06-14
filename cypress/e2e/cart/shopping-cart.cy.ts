import HomePage from '../../support/page-objects/HomePage';
import SearchResultsPage from '../../support/page-objects/SearchResultsPage';
import CourseLearningPage from '../../support/page-objects/CourseLearningPage';

describe('Shopping Cart', () => {
    const homePage = new HomePage();
    const searchResultsPage = new SearchResultsPage();
    const courseLearningPage = new CourseLearningPage();
    const query = Cypress.env('testData').searchQuery;

    before(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginUI(Cypress.env('email'), Cypress.env('password')); // Login before running the test
    });

    it('should add a course to the cart, verify the course appears in the cart', () => {
        homePage.visit();
        cy.hideSalePopup(); // Hide any sale popup that might appear
        homePage.enterSearchQuery(query);
        homePage.pressEnterInSearch();

        searchResultsPage.assertSearchResultsPage(query);
        cy.hideSalePopup(); // Hide any sale popup that might appear

        searchResultsPage.addNewCourseToCart();
        cy.get('@selectedCourseTitle').then((savedTitle) => {
            courseLearningPage.elements.courseTitle().should('have.text', savedTitle);
        });

        courseLearningPage.elements.mainIframe().should('be.visible');
    });
});
