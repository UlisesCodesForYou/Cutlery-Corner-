// import classes from './NavBarContent.module.css'
import {NavLink} from "react-router-dom";
import classes from './NavBarContent.module.css'

export const NavBarContent = () => {
    return (
        <>
            <header className={classes.header}>
                <NavLink to='/' className={classes.logo}>The Cutlery Corner </NavLink>

                <nav className={classes.nav_links}>

                    <ul>
                        <div className={classes.toggle}>
                            <span className={classes.bar}></span>
                            <span className={classes.bar}></span>
                            <span className={classes.bar}></span>
                        </div>
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



