import classes from "./MainFooter.module.css";

const MainFooter = () => {
    return (
        <>
            <footer className={classes.footer}>
                <ul>
                    <li>FREE SHIPPING AND RETURNS ON ALL ORDERS</li>
                    <li>KNIFE SERVICING</li>
                    <li>CREATE AN ACCOUNT</li>
                    <li>EXPERT ADVICE</li>
                </ul>
            </footer>
        </>
    )
}

export default MainFooter