import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/profile.portal.page';



describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('Test 1: User logs in with valid data', async () => {
        await LoginPage.setLogin(process.env.LOGIN);
        await LoginPage.setPassword(process.env.PASSWORD);
        await LoginPage.clickSubmitButton();
        await ProfilePage.isOpen();
    });


    it('Test 2: Submit button is disabled without entering values', async () => {
        await LoginPage.submitButtonIsDisabled();
    });


    it('Test 3: Login input is required', async () => {
        await LoginPage.setLogin('example@mail.com')
        await LoginPage.emptyLoginInput();
        await LoginPage.loginRequiredError();
    });


    it('Test 4: Password input is required', async () => {
        await LoginPage.setLogin('example@mail.com')
        await LoginPage.setPassword('123')
        await LoginPage.emptyPasswordInput();
        await LoginPage.passwordRequiredError();
    });


     it('Test 5: Fails with invalid data', async () => {
        await LoginPage.setLogin('example@example.com');
        await LoginPage.setPassword('123456');
        await LoginPage.clickSubmitButton();
        await LoginPage.errorToastAppeared();
    });
});


