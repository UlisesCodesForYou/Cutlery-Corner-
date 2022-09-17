import classes from "../HomePage/HomePage.module.css";
import {useCallback, useEffect, useState} from "react";
import {fetchHomepage} from "../../helpers/apiHelpers";

export const BestSellers = () => {
    const [images, setImages] = useState([])

    const getBestSellersData = useCallback(async () => {
        const {knives} = await fetchHomepage()
        setImages(knives)
    }, [])

    useEffect(() => {
        getBestSellersData().catch(err => console.error(err))
    }, [getBestSellersData])

    return (
        <div>
            <h1>Best Sellers</h1>
            <div className={classes.grid}>
                {images.map((image) => <img src={image.src} alt={image.alt}/>)}
            </div>
        </div>
    )
}

