    import Page from './page';

class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }


    get loginValidationError () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]'); }
    get passwordValidatorError () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_password"]]//div[@role="alert"]'); }
    get errorToast() {return $('.ant-notification-notice-message'); }

    async open (){
        return super.open('/user/login');
    }


    async setLogin (email){
        return (await this.inputUsername).setValue(email);
    }

    async setPassword (password){
        return (await this.inputPassword).setValue(password);
    }

    async clickSubmitButton (){
        return (await this.buttonSubmit).click();
    }

    submitButtonIsDisabled() {
        expect(this.buttonSubmit).toBeDisabled();
    }

    async emptyLoginInput() {
        return this.clearInput(await this.inputUsername);
    }


    async loginRequiredError() {
        await expect(this.loginValidationError).toBeDisplayed();
        await expect(this.loginValidationError.getText()).toEqual('Required');
    }

    async emptyPasswordInput() {
        this.clearInput(await this.inputPassword)
    }


    async passwordRequiredError() {
        await expect(this.passwordValidatorError).toBeDisplayed();
        await expect(this.passwordValidatorError).toHaveText('Required');
    }

    async errorToastAppeared() {
        expect(this.errorToast).toBeDisplayed();
    }

}

    export default new LoginPage();

