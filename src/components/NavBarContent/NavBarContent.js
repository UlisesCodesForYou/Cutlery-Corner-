import classes from './NavBarContent.module.css'
import {NavLink} from "react-router-dom";

export const NavBarContent = () => {
    return (
        <>
            <header className={classes.header}>
                <NavLink to='/' className={classes.logo}>The Cutlery Corner </NavLink>

                <nav className={classes.head_links}>

                    <ul>
                        <li className={classes.color}>
                            <NavLink to='contact-us' activeClassName={classes.active} className={classes.color}>Contact Us</NavLink>
                        </li>
                        <li  className={classes.color}>
                            <NavLink to='track-your-order' activeClassName={classes.active} className={classes.color}>Track Your Order</NavLink>
                        </li>
                    </ul>

                </nav>
            </header>
        </>
    )

}



