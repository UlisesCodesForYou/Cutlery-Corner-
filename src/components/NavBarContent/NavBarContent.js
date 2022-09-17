// import classes from './NavBarContent.module.css'
import {NavLink} from "react-router-dom";
import classes from './NavBarContent.module.css'

export const NavBarContent = () => {
    return (
        <>
            <header className={classes.header}>
                <NavLink to='/' className={classes.logo}>The Cutlery Corner </NavLink>

                <nav className={classes.head_links}>

                    <ul>
                        <div className={classes.toggle}>
                            <span className={classes.bar}></span>
                            <span className={classes.bar}></span>
                            <span className={classes.bar}></span>
                        </div>
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



