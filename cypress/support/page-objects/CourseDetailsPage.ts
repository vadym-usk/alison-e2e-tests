export default class CourseDetailsPage {
    static url = 'courses?query=';

    elements = {
        courseTitle: () => cy.get('h1.course-title'),
        courseHeadline: () => cy.get('div.course-headline'),
        courseDescription: () => cy.get('span.l-info__description-full'),
        courseRating: () => cy.get('span.course-love').first(),
        startLearningBtn: () => cy.contains('a', 'Start Learning'),
        continueLearningBtn: () => cy.contains('a', 'Continue Learning')
    };

    // Navigates to the course details page by visiting the given course URL.
    visit(courseUrl: string): void {
        cy.visit(courseUrl);
    }

    // Clicks the "Start Learning" button on the course details page.
    clickStartLearningBtn(): this {
        this.elements.startLearningBtn().click();
        return this;
    }

    // Clicks the "Continue Learning" button on the course details page.
    clickContinueLearningBtn(): this {
        this.elements.continueLearningBtn().click();
        return this;
    }

    // Asserts that the course details (title, headline, description, rating) match the expected values.
    assertCourseDetails(
        courseTitle: string,
        courseHeadline: string,
        courseDescription: string,
        courseRating: string
    ): void {
        this.elements.courseTitle().should('have.text', courseTitle);
        this.elements.courseHeadline().should('have.text', courseHeadline);
        this.elements.courseDescription().should('have.text', courseDescription);
        this.elements.courseRating().should('have.text', courseRating);
    }
}
