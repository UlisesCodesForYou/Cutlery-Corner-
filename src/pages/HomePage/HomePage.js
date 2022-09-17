import classes from './HomePage.module.css'

export const HomePage = () => {
    return (
        <div>
            <h1>The Cutlery Corner</h1>
            <br/>
            <div className={classes.hero}>
                <img src='/images/Kramer.jpeg' alt=''/>
            </div>

           <div className={classes.container}>
               <div className={classes.grid}>
                   <img src='/images/German.jpeg' alt=''/>
                   <img src='/images/japanese.jpeg' alt=''/>
                   <img src='/images/KramerSet.jpeg' alt=''/>
                   <img src='/images/ChefKnives2.jpeg' alt=''/>
                   <img src='/images/sushi.jpeg' alt=''/>
                   <img src='/images/VegKnife.jpeg' alt=''/>
               </div>
           </div>
        </div>
    )
}

