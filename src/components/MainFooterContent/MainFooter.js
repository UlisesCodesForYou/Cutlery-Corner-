import classes from "./MainFooter.module.css";

export const MainFooter = () => {
    return (
        <>
            <footer className={classes.footer}>
                <ul>
                    <li>FREE SHIPPING AND RETURNS ON ALL ORDERS</li>
                    <li>KNIFE SERVICING</li>
                    <li>CREATE AN ACCOUNT</li>
                    <li>EXPERT ADVICE</li>
                </ul>
                <ul>
                    <li>Follow Us!</li>
                    <li>Socials go here</li>
                    <li>Help</li>
                    <li>Multiple links for help goes here</li>
                    <li>Policies</li>
                        <li>This store is a static site I created using REACT. So, the contents on this site are just for demonstration purposes. Thank you! </li>
                </ul>
            </footer>
        </>
    )
}

