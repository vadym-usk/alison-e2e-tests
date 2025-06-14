# Alison.com E2E Testing Assessment

## Overview
This project implements a robust E2E testing suite for Alison.com using Cypress and TypeScript. The suite covers key user flows such as course search & filtering, course details, and shopping cart functionality. The architecture follows best practices for maintainability, scalability, and reliability.

## Project Structure
```
project-root/
├── cypress/
│   ├── e2e/
│   │   ├── cart/
│   │   │   └── shopping-cart.cy.ts
│   │   └── courses/
│   │       ├── course-details-page.cy.ts
│   │       └── course-search-and-filtering.cy.ts
│   ├── fixtures/
│   │   └── alison-fixtures.json
│   ├── support/
│   │   ├── commands.ts
│   │   ├── e2e.ts
│   │   └── page-objects/
│   │       ├── HomePage.ts
│   │       ├── SearchResultsPage.ts
│   │       ├── CourseDetailsPage.ts
│   │       ├── CourseLearningPage.ts
│   │       └── LoginPopup.ts
├── cypress.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## What is Covered
- **Course Search & Filtering**: Search for courses, apply filters (rating, price, certificate type), verify results.
- **Course Details Page**: Navigate to a course, verify key elements (title, instructor, price, ratings), test "Add to Cart" and "Continue Learning".
- **Shopping Cart**: Add course to cart, verify presence, remove from cart.

## Technologies Used
- **Cypress** (E2E testing framework)
- **TypeScript** (strict mode enabled)
- **Page Object Pattern** (for maintainability)
- **Fixtures** for test data
- **Custom Cypress commands** for login, popup handling, etc.

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/vadym-usk/alison-e2e-tests.git
   cd alison-e2e-tests
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Configure environment variables**
   - Create a `.env` file in the project root with the following variables:
     ```env
     CYPRESS_BASE_URL=https://alison.com
     CYPRESS_USER_EMAIL=your_email@example.com
     CYPRESS_USER_PASSWORD=your_password
     ```
   - (Test data is managed in `cypress/fixtures/alison-fixtures.json`)

4. **Run tests**
   - Headless mode:
     ```bash
     npm run test:headless
     ```
   - Interactive mode:
     ```bash
     npm run test:headed
     ```
   - PROD mode:
     ```bash
     npm run cy:run:prod
     ```

## Environment Variables
All secret environment variables (such as CYPRESS_BASE_URL, CYPRESS_USER_EMAIL, CYPRESS_USER_PASSWORD) are explicitly listed in the `package.json` scripts section for demonstration purposes. This shows how to prepare and pass environment variables for CI/CD pipelines. In a real project, secrets should be managed securely (for example, using CI/CD secrets or .env files not committed to version control).

## Best Practices & Architecture
- **Selectors**: Use of data-testid where possible, fallback to stable CSS selectors.
- **Async Handling**: No hardcoded timeouts, only state-based waits.
- **Reusable Code**: Page Object Model and custom commands for DRY code.
- **Error Handling**: Cypress built-in error handling; no manual try/catch needed in tests.
- **Screenshots**: Automatic screenshot capture on test failure.

## How to Add New Tests
- Create a new `.cy.ts` file in the appropriate `cypress/e2e/` subfolder.
- Use or extend existing Page Object classes in `cypress/support/page-objects/`.
- Add test data to `cypress/fixtures/alison-fixtures.json` if needed.

## Known Limitations & Future Improvements
- Selectors fallback to CSS if data-testid is not available.
- No Allure or advanced reporting by default (can be added if required).
- Promo popups are handled via custom commands, but may require updates if UI changes.
- Flexible assertions are used for dynamic course listings.
