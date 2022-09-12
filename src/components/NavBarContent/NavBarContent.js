// import classes from './NavBarContent.module.css'
import {NavLink} from "react-router-dom";
import classes from './NavBarContent.module.css'

export const NavBarContent = () => {
    return (
        <>
            <header className={classes.header}>
                <NavLink to='/' className={classes.logo}>The Cutlery Corner </NavLink>
                <nav>
                    <ul className={classes.nav_links}>
                        <li>
                            <NavLink to='contact-us' activeClassName={classes.active}>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='track-your-order' activeClassName={classes.active}>Track Your Order</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )

}



