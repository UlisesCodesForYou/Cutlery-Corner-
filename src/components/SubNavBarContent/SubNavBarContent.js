import {NavLink} from "react-router-dom";
import classes from './MainNavigation.module.css'

export const SubNavBarContent = () => {
    return (
        <>
            <header className={classes.header}>
                <nav>
                    <ul>
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
                            <NavLink to='/knives-and-accessories'>Knives Accessories</NavLink>
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
