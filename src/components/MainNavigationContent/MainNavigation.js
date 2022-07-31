import {Link} from "react-router-dom";
import classes from './MainNavigation.module.css'

export const MainNavigation = () => {
    return (
        <>
            <header className={classes.header}>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home Page</Link>
                        </li>
                        <li>
                            <Link to='/top-brands'>Top Brands</Link>
                        </li>
                        <li>
                            <Link to='/new-arrivals'>New Arrivals</Link>
                        </li>
                        <li>
                            <Link to='/best-sellers'>Best Sellers</Link>
                        </li>
                        <li>
                            <Link to='/brands'>Brands</Link>
                        </li>
                        <li>
                            <Link to='/knives-and-accessories'>Knives Accessories</Link>
                        </li>
                        <li>
                            <Link to='/sale-and-clearance'>Sale & Clearance</Link>
                        </li>

                    </ul>
                </nav>
            </header>
        </>
    )
}

