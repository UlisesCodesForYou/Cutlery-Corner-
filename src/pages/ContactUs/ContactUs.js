import {Prompt, useHistory} from "react-router-dom";
import {useState} from 'react';

import useInput from '../../customHooks/index'
import classes from './ContactUs.module.css'

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');
const topicIsNotEmpty = value => value.trim() !== '';

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

    const {
        value: enteredTopic,
        isValid: enteredTopicIsValid,
        hasError: orderTopicHasError,
        valueChangeHandler: topicChangedHandler,
        reset: resetTopicInput,
        inputBlurHandler: topicBlurHandler
    } = useInput(topicIsNotEmpty)

    let formIsValid = false
    if (enteredNameIsValid && enteredEmailIsValid && enteredTopicIsValid) {
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
        resetTopicInput()
    }

    const formFocusedHandler = () => {
        setIsFocused(true)

    }

    const finishedEnteringHandler = () => {
        setIsFocused(false)
    }


    return (<>
            <div className={classes.container}>
                <section className={classes.section}>
                    <div className={classes.item}>
                        <h1>Contact Us</h1>
                        <br/>
                        <p>Est Lorem cupidatat cupidatat est irure minim consequat. Amet sint eu nisi deserunt dolor
                            velit culpa
                            tempor aliquip amet et amet adipisicing qui.</p>
                        <br/>

                        <h1>Live Chat</h1>
                        <br/>
                        <p>Est Lorem cupidatat cupidatat est irure minim consequat. Amet sint eu nisi deserunt dolor
                            velit culpa
                            tempor aliquip amet et amet adipisicing qui.</p>
                    </div>

                </section>

                <section className={classes.section}>
                    <div className={classes.item}>
                        <Prompt when={isFocused}
                                message={(location) => 'Are you sure you want to leave? All your information will be lost.'}/>

                        <form onSubmit={formSubmissionHandler} onFocus={formFocusedHandler}
                              className={classes.submissionForm}>
                            <div className={classes.fields}>
                                <label htmlFor="name">Your Name</label>
                                <input type='text'
                                       id='name'
                                       onChange={nameChangedHandler}
                                       onBlur={nameBlurHandler}
                                       value={enteredName}/>
                                {nameInputHasError && <p className={classes.errorText}>Please enter your name.</p>}

                                <label htmlFor='email'>E-mail</label>
                                <input
                                    type='email'
                                    id='email'
                                    onChange={emailChangedHandler}
                                    onBlur={emailBlurHandler}
                                    value={enteredEmail}/>
                                {emailInputHasError && <p className={classes.errorText}>Please enter a valid email.</p>}
                                <label htmlFor='topic'>Enter your question topic</label>
                                <textarea
                                    id='topic'
                                    onChange={topicChangedHandler}
                                    onBlur={topicBlurHandler}
                                    value={enteredTopic}/>
                                {orderTopicHasError && <p className={classes.errorText}>Please enter your topic</p>}
                            </div>
                            <div>
                                <button disabled={!formIsValid} onClick={finishedEnteringHandler}
                                        className={classes.btn}>Submit
                                </button>
                            </div>
                        </form>

                    </div>
                </section>
            </div>


        </>

    )

}