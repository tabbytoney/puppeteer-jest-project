import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage'
import FeedbackPage from '../pages/FeedbackPage'
import TopBar from '../pages/components/TopBar';

describe('End-To-End Test', () => {
    let homepage;
    let loginpage;
    let feedbackPage;
    let topbar;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homepage = new HomePage();
        feedbackPage = new FeedbackPage();
        topbar = new TopBar();
        loginpage = new LoginPage();
    });


	it('should load homepage', async () => {
		await homepage.visit();

	});

    it('navbar should be displayed', async () => {
        await homepage.isNavbarDisplayed();
        await topbar.isTopBarDisplayed();
    });

    it('try to login', async () => {
        await loginpage.visit();
        await loginpage.isTopBarDisplayed();
        await loginpage.login('username', 'password'); //these are the correct credentials for the site
        await loginpage.wait(5000);
    })

    it('feedback should work', async () => {
        await feedbackPage.visit();
        await feedbackPage.isFeedbackFormDisplayed();
        await feedbackPage.submitFeedback('Johnny', 'johnny@email.com', 'Practice test', 'comment here');
        await feedbackPage.wait(5000)
    });



    //fixture
});