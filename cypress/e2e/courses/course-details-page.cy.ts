import CourseDetailsPage from '../../support/page-objects/CourseDetailsPage';
import CourseLearningPage from '../../support/page-objects/CourseLearningPage';

describe('Course Details Page', () => {
    const courseDetailsPage = new CourseDetailsPage();
    const courseLearningPage = new CourseLearningPage();
    const jsCourse = Cypress.env('testData').jsCourse;

    before(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginUI(Cypress.env('email'), Cypress.env('password')); // Login before running the test
    });

    it('should navigate to a specific course page, verify key elements and test "Continue Learning" functionality', () => {
        courseDetailsPage.visit(jsCourse.jsCourseUrl);
        cy.hideSalePopup(); // Hide any sale popup that might appear
        courseDetailsPage.assertCourseDetails(
            jsCourse.courseTitle,
            jsCourse.courseHeadline,
            jsCourse.courseDescription,
            jsCourse.courseRating
        );
        courseDetailsPage.clickContinueLearningBtn();

        courseLearningPage.elements.mainIframe().should('be.visible');
    });
});
