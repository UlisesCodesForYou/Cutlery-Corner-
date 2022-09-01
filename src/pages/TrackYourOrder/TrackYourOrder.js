import useInput from "../../customHooks";
import {Prompt, useHistory} from "react-router-dom";
import {useState} from "react";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');


export const TrackYourOrder = () => {
    const history = useHistory()
    const [isFocused, setIsFocused] = useState(false)

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
        history.push('/')

        if (!enteredNameIsValid) {
            return
        }
        resetNameInput()
        resetEmailInput()
    }

    const formFocusedHandler = () => {
        setIsFocused(true)

    }

    const finishedEnteringHandler = () => {
        setIsFocused(false)
    }



    return (
        <>
            <Prompt when={isFocused} message={(location) => 'Are you sure you want to leave?  All of your information will be lost!'} />
            <form onSubmit={formSubmissionHandler} onFocus={formFocusedHandler}>
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
                    <button disabled={!formIsValid} onClick={finishedEnteringHandler}>Submit</button>
                </div>
            </form>

        </>
    )
}