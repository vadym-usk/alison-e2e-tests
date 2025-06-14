export default class CourseLearningPage {
    static url = '/topic/learn';

    elements = {
        mainIframe: () => cy.get('#iframe_container'),
        courseTitle: () => cy.get('span.bc2.tw-w-full')
    };
}
