export default class Validators {

    passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    nameRegex = /^[a-zA-Z]{1,15}$/

    required = (fieldValue: string) => {
        if (!fieldValue?.length) {
            return true;
        }
        return null;
    }

    maxLength = (fieldValue: string, max: number) => {
        if (fieldValue?.length >= max) {
            return true;
        }
        return null;
    }

    minLength = (fieldValue: string, min: number) => {
        if (fieldValue?.length < min) {
            return true;
        }
        return null;
    }

    email = (fieldValue: string) => {
        if (!this.emailRegex.test(fieldValue)) {
            return true;
        }
        return false;
    }

    password = (fieldValue: string) => {
        if (!this.passwordRegex.test(fieldValue)) {
            return true;
        }
        return null;
    }
}