export default class ErrorMessage {

    required = (fieldName) => {
        return <p>{fieldName} is required</p>
    }

    invalid = (fieldName) => {
        return <p>{fieldName} is invalid</p>
    }

    minLength = (min) => {
        return <p>Minimum {min} characters are required</p>
    }

    maxLength = (max) => {
        return <p>Maximum {max} characters are allowed</p>
    }
}