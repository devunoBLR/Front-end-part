module.exports = (function () {
    return new class {
        fieldsIsEmpty(data) {
            return !data || !data.author || typeof data.author !== "string" || data.author.length === 0;
        }

        authorValidator(author) {
            const regEx = new RegExp('[A-Za-zА-Яа-я]{1,255}');
            let tempest = author.match(regEx);
            if (author.length >= 1 && author.length <= 255 && tempest !== null && tempest[0].length === author.length)
                return true;
        }

        checkValidatorFromCreationPage(data) {
            if (this.fieldsIsEmpty(data))
                return 0;

            let checkValidAuthor = this.authorValidator(data.author);

            if (!checkValidAuthor){
                return 1;
            }
            return -1;
        }
    };
})();