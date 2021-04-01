module.exports = (function (){
    return new class {
        checkCorrectData(data){
            const regEx = new RegExp('[A-Za-z0-9]{3,20}');
            let tempL = data.username.match(regEx);
            let temlP = data.password.match(regEx);
            if(data.username.length >= 3
                && data.password.length >= 3
                && data.username.length <= 20 && data.password.length <= 20
                && tempL !== null && temlP !== null
                && tempL[0].length === data.username.length
                && temlP[0].length === data.password.length &&
            typeof data.username === "string" && typeof data.password === "string"){
                return true;
            }
            return false;
        }

        forTDD(data){
            return this.checkCorrectData(data);
        }
    };
})();