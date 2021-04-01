module.exports = (function () {
    return new class {

        loginFormIsEmpty(data) {
            return !data || !data.username || !data.password || typeof data.username !== "string" || typeof data.password !== "string"
                || data.username.length === 0 || data.password.length === 0;

        }

        FormFieldIsCorrectLogin(username) {
            const regEx = new RegExp('[A-Za-z0-9]{3,20}');
            let tempest = username.match(regEx);
            if (username.length >= 3 && name.length <= 20 && tempest !== null && tempest[0].length === username.length)
                return true;
        }

        FormFieldIsCorrectPassword(password) {
            const regEx = new RegExp('[A-Za-z0-9]{3,20}');
            let tempest = password.match(regEx);
            if (password.length >= 3 && password.length <= 20 && tempest !== null && tempest[0].length === password.length)
                return true;
        }

        checkValidationFromLoginForm(data) {
            if (this.loginFormIsEmpty(data))
                return 0;

            let checkedValidLogin = this.FormFieldIsCorrectLogin(data.username);
            let checkedValidPassword = this.FormFieldIsCorrectPassword(data.password);

            if (!checkedValidLogin) {
                return 1;
            } else if (!checkedValidPassword) {
                return 2;
            } else if (!checkedValidLogin && !checkedValidPassword) {
                return 3;
            }
            return -1;
        }
    };
})();
