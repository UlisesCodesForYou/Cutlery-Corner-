// import classes from './NavBarContent.module.css'
import {NavLink} from "react-router-dom";
import classes from './NavBarContent.module.css'

export const NavBarContent = () => {
    return (
        <>
            <header className={classes.header}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='contact-us'>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='track-your-order'>Track Your Order</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )

}



