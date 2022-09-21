import classes from "../HomePage/HomePage.module.css";
import {useCallback, useEffect, useState} from 'react'
import {fetchHomepage} from "../../helpers/apiHelpers";

export const NewArrivals = () => {
    const [images, setImages] = useState([])

    const getNewArrivalsData = useCallback(async () => {
        const {knives} = await fetchHomepage()
        setImages(knives)
    }, [])

    useEffect(() => {
        getNewArrivalsData().catch((err) => console.error(err))
    }, [getNewArrivalsData])

    return (
        <div>
            <br/>
            <h1>New Arrivals</h1>
            <div className={classes.grid}>
                {images.map((image) => <img src={image.src} alt={image.alt}/>)}
            </div>
        </div>
    )
}
