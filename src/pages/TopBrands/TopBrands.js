import classes from "../HomePage/HomePage.module.css";

export const TopBrands = () => {
    return (
        <div>
            <h1>Top Brands</h1>

            <div className={classes.grid}>
                <img src='/images/German.jpeg' alt=''/>
                <img src='/images/japanese.jpeg' alt=''/>
                <img src='/images/VegKnife.jpeg' alt=''/>
                <img src='/images/ChefKnives2.jpeg' alt=''/>
                <img src='/images/sushi.jpeg' alt=''/>
                <img src='/images/KramerSet.jpeg' alt=''/>
            </div>
        </div>
    )
}

