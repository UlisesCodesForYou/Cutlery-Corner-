import {useHistory, Prompt } from "react-router-dom";
import {useState} from 'react';

import useInput from '../../customHooks/index'
import classes from './ContactUs.module.css'

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

export const ContactUs = () => {
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

            <div className={classes.col}>
                <Prompt when={isFocused} message={(location) => 'Are you sure you want to leave? All your information will be lost.'}/>
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
                        <label htmlFor='topic'>Enter your question topic</label>
                        <textarea id='topic' rows='6'/>
                    </div>
                    <div>
                        <button disabled={!formIsValid} onClick={finishedEnteringHandler}>Submit</button>
                    </div>
                </form>

            </div>
        </>

    )

}