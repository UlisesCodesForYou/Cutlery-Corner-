import {useState} from "react";

export const ContactUs = (props) => {

//  Custom hook is gonna go here.  I need to fiinish up.  I need to watch the vid that covers custom hooks.
    let formIsValid = false

    if(enteredNameIsValid) {
        formIsValid = true
    }





    const formSubmissionHandler = event => {
        event.preventDefault()
        setEnteredNameIsTouched(true)

        if (!enteredNameIsValid) {

            return
        }
        setEnteredName('')
        setEnteredNameIsTouched(false)

    }


    return (<>
            <div>
                <p>Submit your info and we'll get back to you as soon as we can! </p>
                <h1>Contact Us</h1>
                <p>Est Lorem cupidatat cupidatat est irure minim consequat. Amet sint eu nisi deserunt dolor velit culpa
                    tempor aliquip amet et amet adipisicing qui.</p>
                <h1>Live Chat</h1>
                <p>Est Lorem cupidatat cupidatat est irure minim consequat. Amet sint eu nisi deserunt dolor velit culpa
                    tempor aliquip amet et amet adipisicing qui.</p>
            </div>

            <form onSubmit={formSubmissionHandler}>
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler}
                           value={enteredName}/>
                    {nameInputIsInvalid && <p>You must enter your name.</p>}
                    <label htmlFor='email'>E-mail</label>
                    <input type='email' id='email'/>
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