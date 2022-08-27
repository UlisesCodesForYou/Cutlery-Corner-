import useInput from "../../customHooks";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');


export const TrackYourOrder = () => {

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        reset: resetNameInput,
        inputBlurHandler: nameBlurHandler
    } = useInput(isNotEmpty)

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        reset: resetEmailInput,
        inputBlurHandler: emailBlurHandler
    } = useInput(isEmail);

    let formIsValid = false
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const formSubmissionHandler = event => {
        event.preventDefault()

        if (!enteredNameIsValid) {
            return
        }
        resetNameInput()
        resetEmailInput()
    }



    return (
        <>
            <form onSubmit={formSubmissionHandler}>
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input type='text'
                           id='name'
                           onChange={nameChangedHandler}
                           onBlur={nameBlurHandler}
                           value={enteredName}/>
                    {nameInputHasError && <p>You must enter your name.</p>}
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        onChange={emailChangedHandler}
                        onBlur={emailBlurHandler}
                        value={enteredEmail}/>
                    {emailInputHasError && <p>Please enter a valid email.</p>}
                    <label htmlFor='topic'>Your Order Number</label>
                    <input type='text' id='topic'/>
                </div>
                <div>
                    <button disabled={!formIsValid}>Submit</button>
                </div>
            </form>

        </>
    )
}