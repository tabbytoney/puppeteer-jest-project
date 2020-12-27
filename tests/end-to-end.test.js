import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage'
import FeedbackPage from '../pages/FeedbackPage'
import TopBar from '../pages/components/TopBar';

import { username, password, timeout } from '../config';

describe('End-To-End Test', () => {
    let homePage;
    let loginPage;
    let feedbackPage;
    let topBar;

    beforeAll(async () => {
        jest.setTimeout(timeout);
        homePage = new HomePage();
        feedbackPage = new FeedbackPage();
        topbar = new TopBar();
        loginPage = new LoginPage();
    });

    it('should load homepage', async () => {
        await homePage.visit();
        await homePage.isNavBarDisplayed();
    })

    it('should submit feedback', async () => {
        await homePage.clickFeedbackLink();
        await feedbackPage.isFeedbackFormDisplayed();
        await feedbackPage.submitFeedback('John', 'john@email.com', 'subject', 'Adding a longer comment here');
    })

    it('should login to application', async () => {
        await homePage.visit();
        await topBar.isTopBarDisplayed();
        await topBar.clickSignInButton();
        await loginPage.isLoginFormDisplayed();
        await loginPage.login(username, password);

    })



    //fixture
});