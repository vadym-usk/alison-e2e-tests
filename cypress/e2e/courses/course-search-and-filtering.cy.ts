import HomePage from '../../support/page-objects/HomePage';
import SearchResultsPage from '../../support/page-objects/SearchResultsPage';

describe('Course Search & Filtering', () => {
    const homePage = new HomePage();
    const searchResultsPage = new SearchResultsPage();
    const query = Cypress.env('testData').searchQuery;

    it('should search for JavaScript courses, apply "Diploma" CertificateType filter and verify results', () => {
        homePage.visit();
        homePage.enterSearchQuery(query);
        homePage.pressEnterInSearch();

        searchResultsPage.assertSearchResultsPage(query);
        searchResultsPage.applyCertificateTypeFilter('Diploma');
        searchResultsPage.assertDiplomaTypeCards();
    });
});
