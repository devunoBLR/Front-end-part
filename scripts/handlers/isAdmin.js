module.exports = (function () {
    return new class {
        checkAdmin(data) {
            if (data.username === 'admin' && data.password === 'admin') {
                return true;
            }
        }

        isAdmin(data) {
            if (this.checkAdmin(data)) {
                return 1;
            } else {
                return 0;
            }
        }
    };
})();
