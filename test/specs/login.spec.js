import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/profile.portal.page';



describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('Test 1: User logs in with valid data', () => {
        LoginPage.setLogin(process.env.LOGIN);
        LoginPage.setPassword(process.env.PASSWORD);
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });


    it('Test 2: Login button is disabled without entering values', () => {
        LoginPage.submitButtonIsDisabled();
    });


    it('Test 3: Login input is required', () => {
        LoginPage.setLogin('example@mail.com')
        LoginPage.emptyLoginInput();
        LoginPage.loginRequiredError();
    });


    it('Test 4: Password input is required', () => {
        LoginPage.setLogin('example@mail.com')
        LoginPage.setPassword('123')
        LoginPage.emptyPasswordInput();
        LoginPage.passwordRequiredError();
    });


     it('Test 5: Fails with invalid data', () => {
        LoginPage.setLogin('example@example.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });



});


