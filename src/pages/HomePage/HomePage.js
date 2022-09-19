import classes from './HomePage.module.css'
import {useCallback, useEffect, useState} from "react";
import {fetchHomepage} from '../../helpers/apiHelpers'

export const HomePage = () => {
    const [hero, setHero] = useState(null)
    const [images, setImages] = useState([])

    const getHomepageData = useCallback(async () =>{
        const { hero, knives } = await fetchHomepage()
        // console.debug('response hero', hero)

        setHero(hero.image)
        setImages(knives)
    }, [])

    useEffect(() => {
        getHomepageData().catch(err => console.error(err))

    }, [getHomepageData])


// console.debug('images', images)

    return (
        <div>
            <br/>
            <h1>The Cutlery Corner</h1>
            <br/>
            <div className={classes.hero}>
                {hero && <img src={hero.src} alt={hero.alt}/>}
            </div>

            <div className={classes.container}>
                <div className={classes.grid}>
                    { images.map((image) => <img src={image.src} alt={image.alt} />)}

                </div>
            </div>
        </div>
    )
}



