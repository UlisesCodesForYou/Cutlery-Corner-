import useInput from "../../customHooks";
import {Prompt, useHistory} from "react-router-dom";
import {useState} from "react";
import classes from './TrackYourOrder.module.css'

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
            <section className={classes.section}>
               <div className={classes.item}>
                   <Prompt when={isFocused} message={(location) => 'Are you sure you want to leave?  All of your information will be lost!'} />
                   <form onSubmit={formSubmissionHandler} onFocus={formFocusedHandler} className={classes.TrackOrderForm}>
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
                           <br/>
                           <button disabled={!formIsValid} onClick={finishedEnteringHandler} className={classes.btn}>Submit</button>
                       </div>
                   </form>
               </div>
            </section>


        </>
    )
}