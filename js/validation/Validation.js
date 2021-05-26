class Validation {
    isValidFirstName(firstName) {
        //blogai jeigu ne stringas
        //blogai jeigu simboliu kiekis yra maziau nei 2
        //blogai jeigu pirmoji vardo raide mazoji

        /*
            isValidLastName(lastName) {
        if (lastName === undefined ||
            typeof lastName !== 'string' ||
            lastName.length < 2 ||
            !this.isUpperCase(lastName[0])) {
            return false;
        }
        return true;
    }*/
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

    //blogai jeigu ne stringas
    //blogai jeigu simboliu yra maziau nei 2
    isValidLastName(lastName) {
        if (lastName === undefined ||
            typeof lastName !== 'string' ||
            lastName.length < 2 ||
            !this.isUpperCase(lastName[0])) {
            return false;
        }
        return true;
    }

    isValidEmail(email) {
        if (typeof email !== 'string' ||
            email.length < 6 ||
            email.indexOf('@') === -1 ||
            email[0] === '@' ||
            email.slice(-4).indexOf('@') > -1 ||
            this.countSimbols(email, '@') > 1) {
            return false;
        }
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


    isValidPhoneNumber() {
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

    isUpperCase(letter) {
        // if (letter === letter.toUpperCase()) {
        //     return true;
        // } else {
        //     return false;
        // }

        return letter === letter.toUpperCase();
    }

    countSimbols(text, letter) {
        let count = 0;

        for (const t of text) {
            if (t === letter) {
                count++;
            }
        }

        return count;
    }
}

module.exports = Validation;