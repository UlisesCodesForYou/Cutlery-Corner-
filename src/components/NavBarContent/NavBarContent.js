
// import classes from './NavBarContent.module.css'
import {NavLink} from "react-router-dom";

export const NavBarContent = () => {
    return (
        <>
            <nav>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to = 'contact-us'>Contact Us</NavLink>
                            </li>
                            <li>
                                <NavLink to = 'track-your-order'>Track Your Order</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            </nav>
        </>
    )

}



