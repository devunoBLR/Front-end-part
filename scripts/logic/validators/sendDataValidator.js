module.exports = (function () {
    return new class {
        checktTitleForm(title) {
             return title === "" || title.length > 255 || typeof title !== "string";
        }

        checkAuthor(author){
            return author === "" || author.length > 255 || typeof author !== "string";
        }

        checkDateInput(date){
            return !(date === "" || date.length > 4 || date < 1700 || date < (new Date().getFullYear() + 1)
            || typeof date !== 'number');
        }

        checkAbout(about) {
            return !(about === "" || about.length > 10000 || typeof about === "string");
        }

        checkValidationFromSendForm(data) {
            if (this.checktTitleForm(data.title)){
                return 0;
            }

            if (this.checkAuthor(data.author)){
                return 1;
            }
            if (this.checkDateInput(data.date)){
                return 2;
            }

            if (this.checkAbout(data.about)){
                return 3;
            }
            if (this.checktTitleForm(data.title) && this.checkAuthor(data.date)){
                return 4;
            }
            if (this.checktTitleForm(data.title) && this.checkAuthor(data.about)){
                return 5;
            }
            if (this.checktTitleForm(data.title) && this.checkAuthor(data.author)){
                return 6;
            }
            if (this.checktTitleForm(data.author) && this.checkAuthor(data.date)){
                return 7;
            }
            if (this.checktTitleForm(data.author) && this.checkAuthor(data.about)){
                return 8;
            }
            if (this.checktTitleForm(data.about) && this.checkAuthor(data.date)) {
                return 9;
            }
            return -1;
        };
    };
})();