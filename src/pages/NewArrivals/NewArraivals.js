import classes from "../HomePage/HomePage.module.css";

export const NewArrivals = () => {
    return (
        <div>
            <h1>New Arrivals</h1>
            <div className={classes.grid}>
                <img src='/images/japanese.jpeg' alt=''/>
                <img src='/images/KramerSet.jpeg' alt=''/>
                <img src='/images/German.jpeg' alt=''/>
                <img src='/images/sushi.jpeg' alt=''/>
                <img src='/images/ChefKnives2.jpeg' alt=''/>
                <img src='/images/VegKnife.jpeg' alt=''/>
            </div>
        </div>
    )
}
