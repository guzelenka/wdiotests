import Page from './page';

class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }


    get loginValidationError () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]'); }
    get passwordValidatorError () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_password"]]//div[@role="alert"]'); }
    get errorToast() {return $('.ant-notification-notice-message'); }

    open (){
        return super.open('/');
    }


    setLogin (email){
        this.inputUsername.setValue(email);
    }

    setPassword (password){
        this.inputPassword.setValue(password);
    }

    clickSubmitButton (){
        this.buttonSubmit.click();
    }

    submitButtonIsDisabled() {
        expect(this.buttonSubmit).toBeDisabled();
    }

    emptyLoginInput() {
        this.inputUsername.clearValue();
    }

    loginRequiredError() {
        expect(this.loginValidationError).toBeDisplayed();
        expect(this.loginValidationError.getText()).toEqual('Required');
    }

    emptyPasswordInput() {
        this.inputPassword.clearValue();
    }

    passwordRequiredError() {
        expect(this.loginValidationError).toBeDisplayed();
        expect(this.passwordValidatorError.getText()).toEqual('Required');
    }

    errorToastAppeared() {
        expect(this.errorToast).toBeDisplayed();

    }

}

    export default new LoginPage();

