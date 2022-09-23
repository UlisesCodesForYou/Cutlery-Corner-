import classes from "./MainFooter.module.css";
import {NavLink} from "react-router-dom";
import Social from "../social";


export const MainFooter = () => {
    return (
        <>
            <footer className={classes.footer}>
                <nav>
                    <ul className={classes.foot_links}>
                        <li>
                            <NavLink to='/Free-Shipping-And-Returns-Info'>FREE SHIPPING AND RETURNS ON ALL ORDERS</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Knife-Servicing-Info'>KNIFE SERVICING</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Create-An-Account'>CREATE AN ACCOUNT</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Expert-Advice'>EXPERT ADVICE</NavLink>
                        </li>
                    </ul>
                    <br/>

                    <ul className={classes.foot_links}>
                        <li>
                            <h1 className={classes.follow}>Follow Us!</h1>
                        </li>
                       <Social/>
                        <li>
                            <NavLink to='/Help'>Help</NavLink>
                        </li>
                        {/*<li>Multiple links for help goes here</li>*/}
                        <li>
                            <NavLink to='/Policies'>Policies</NavLink>
                        </li>

                    </ul>
                </nav>
            </footer>
        </>
    )
}

