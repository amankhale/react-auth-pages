export default class Validators {
  readonly PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  readonly EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  readonly NAME_REGEX = /^[a-zA-Z]{1,15}$/;

  readonly MAX_EMPLOYEE_AGE = 60;
  readonly MIN_EMPLOYEE_AGE = 18;

  required = (fieldValue: string) => {
    if (!fieldValue?.length) {
      return true;
    }
    return null;
  };

  maxLength = (fieldValue: string, max: number) => {
    if (fieldValue?.length >= max) {
      return true;
    }
    return null;
  };

  minLength = (fieldValue: string, min: number) => {
    if (fieldValue?.length < min) {
      return true;
    }
    return null;
  };

  email = (fieldValue: string) => {
    if (!this.EMAIL_REGEX.test(fieldValue)) {
      return true;
    }
    return false;
  };

  password = (fieldValue: string) => {
    if (!this.PASSWORD_REGEX.test(fieldValue)) {
      return true;
    }
    return null;
  };
}
