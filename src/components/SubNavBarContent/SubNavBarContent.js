import {NavLink} from "react-router-dom";
import classes from './SubNavBarContent.module.css'

export const SubNavBarContent = () => {
    return (
        <>
            <header className={classes.header}>
                <nav>
                    <ul className={classes.nav_links}>
                        <li>
                            <NavLink to='/'>Home Page</NavLink>
                        </li>
                        <li>
                            <NavLink to='/top-brands'>Top Brands</NavLink>
                        </li>
                        <li>
                            <NavLink to='/new-arrivals'>New Arrivals</NavLink>
                        </li>
                        <li>
                            <NavLink to='/best-sellers'>Best Sellers</NavLink>
                        </li>
                        <li>
                            <NavLink to='/brands'>Brands</NavLink>
                        </li>
                        <li>
                            <NavLink to='/knives-and-accessories'>Accessories</NavLink>
                        </li>
                        <li>
                            <NavLink to='/sale-and-clearance'>Sale & Clearance</NavLink>
                        </li>

                    </ul>
                </nav>
            </header>
        </>
    )
}

