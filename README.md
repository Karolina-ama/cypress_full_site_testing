# Cypress Full Website Testing - Palmiros Horoskopai

This project contains automated end-to-end tests for the website [palmiroshoroskopai.lt](http://palmiroshoroskopai.lt/) using **Cypress**.

## 📌 Project Structure

- `cypress/e2e/` - All E2E test files, separated by tested functionality
- `websiteFunctions.txt` - Exploratory test summary describing all observed features
- `testCases.txt` - Detailed test scenarios written before automation
- `.github/workflows/` - CI configuration to run Cypress tests automatically on GitHub

## 🚀 Features Tested

### 1. Home Page
- Page load and visible introductory content
- Navigation menu items
- Section navigation: KONSULTACIJOS, MĖNULIS ŽENKLUOSE, MĖNULIO PAROS

### 2. Dynamic Content Load
- Scroll to bottom triggers new content
- Articles/posts become visible

### 3. Footer
- Social media icons (Facebook, YouTube) are visible
- URLs are valid and open in new tab

### 4. Search Functionality
- ✅ Valid keyword (e.g., `asmenin`) returns results
- ❌ Invalid keyword (e.g., `traktorius`) displays "Nieko nerasta"

### 5. Responsive Design
- Layout tested on:
  - iPhone X (375x812)
  - iPad (768x1024)
  - MacBook 15" (1440x900)

## ⚙️ Technologies

- [Cypress](https://www.cypress.io/)
- GitHub Actions for CI/CD

## 📦 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
Install dependencies:

bash
Copy
Edit
npm install
Run Cypress tests locally:

bash
Copy
Edit
npx cypress open

📸 Screenshots & Test Results
Test execution is visible in the Cypress Test Runner. You can also set up video/screenshot capture via Cypress config.

📄 License
This project is for educational/demo purposes.
