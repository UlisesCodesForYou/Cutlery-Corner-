import {NavLink} from "react-router-dom";
import classes from './SubNavBarContent.module.css'

export const SubNavBarContent = () => {
    return (
        <>
            <nav className={classes.header}>
                <ul className={classes.nav_links}>
                    <li>
                        <NavLink to='/'>Home Page</NavLink>
                    </li>
                    <li>
                        <NavLink to='/top-brands' activeClassName={classes.active}>Top Brands</NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-arrivals' activeClassName={classes.active}>New Arrivals</NavLink>
                    </li>
                    <li>
                        <NavLink to='/best-sellers' activeClassName={classes.active}>Best Sellers</NavLink>
                    </li>
                    <li>
                        <NavLink to='/brands' activeClassName={classes.active}>Brands</NavLink>
                    </li>
                    <li>
                        <NavLink to='/knives-and-accessories' activeClassName={classes.active}>Accessories</NavLink>
                    </li>
                    <li>
                        <NavLink to='/sale-and-clearance ' activeClassName={classes.active}>Sale & Clearance</NavLink>
                    </li>

                </ul>
            </nav>

        </>
    )
}

