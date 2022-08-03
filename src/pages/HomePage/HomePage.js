import classes from './HomePage.module.css'

export const HomePage = () => {
    return (
        <div>
            <div className={classes.hero}>
                <img src='/images/Kramer.jpeg' alt=''/>
            </div>

            <div className={classes.grid}>
                <img src='/images/German.jpeg' alt=''/>
                <img src='/images/japanese.jpeg' alt=''/>
                <img src='/images/KramerSet.jpeg' alt=''/>
                <img src='/images/ChefKnives2.jpeg' alt=''/>
                <img src='/images/sushi.jpeg' alt='' />
                <img src='/images/VegKnife.jpeg' alt=''/>
            </div>
            <p>This is the home page</p>
        </div>
    )
}

