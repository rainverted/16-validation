class Validation {
    isValidFirstName(firstName) {
        //blogai jeigu ne stringas
        //blogai jeigu simboliu kiekis yra maziau nei 2
        //blogai jeigu pirmoji vardo raide mazoji
               if (!this.isValidMessage(firstName)) {
            return false;
        }
        if (firstName.length < 2) {
            return false;
        }
        if (firstName[0].toLowerCase() === firstName[0]) {
            return false;
        }
        if (firstName.slice(1).toLowerCase() !== firstName.slice(1)) {
            return false;
        }
        return true;
    }

    isValidLastName(lastName) {
        //blogai jeigu ne stringas
        //blogai jeigu simboliu yra maziau nei 2
        return true;
    }

    isValidEmail() {
        return true;
    }

    isValidMessage(message) {
        //blogai jeigu ne stringas
        //blogai jeigu tekstas yra tuscias
        if (typeof message !== 'string' || message === '') {
           console.log('ERROR: Message has to be a text string');
        return false;
       } 
       return true;
    }

    isValidPhoneNumber(phoneNumber) {
        //tipo nustatytmas: string & mumber, & else
        //
        return true;
    }

    isValidMonthName() {
        return true;
    }

    isValidWeekdayName() {
        return true;
    }

    isValidPersonID() {
        return true;
    }
}

module.exports = Validation;