import useInput from '../../customHooks/index'
import classes from './ContactUs.module.css'

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

export const ContactUs = () => {

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


    return (<>
            <div className={classes.col}>
                <h1>Contact Us</h1>
                <p>Est Lorem cupidatat cupidatat est irure minim consequat. Amet sint eu nisi deserunt dolor velit culpa
                    tempor aliquip amet et amet adipisicing qui.</p>

                <h1>Live Chat</h1>
                <p>Est Lorem cupidatat cupidatat est irure minim consequat. Amet sint eu nisi deserunt dolor velit culpa
                    tempor aliquip amet et amet adipisicing qui.</p>
                <p>Submit your info and we'll get back to you as soon as we can! </p>
            </div>





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
                    <label htmlFor='topic'>Enter your question topic</label>
                    <input type='text' id='topic'/>
                </div>
                <div>
                    <button disabled={!formIsValid}>Submit</button>
                </div>
            </form>

        </>

    )

}