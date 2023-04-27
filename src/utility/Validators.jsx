export default class Validators {

    passwordRegex = /"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$"/
    emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    required = (fieldValue) => {
        if (!fieldValue?.length) {
            return true;
        }
        return null;
    }

    maxLength = (fieldValue, max) => {
        if (fieldValue?.length >= max) {
            return true;
        }
        return null;
    }

    minLength = (fieldValue, min) => {
        if (fieldValue?.length < min) {
            return true;
        }
        return null;
    }

    email = (fieldValue) => {
        if (!this.emailRegex.test(fieldValue)) {
            return true;
        }
        return false;
    }

    password = (fieldValue) => {
        if (!this.passwordRegex.test(fieldValue)) {
            return true;
        }
        return null;
    }
}