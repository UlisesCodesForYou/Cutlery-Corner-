import classes from "../HomePage/HomePage.module.css";
import {useCallback, useEffect, useState} from "react";
import {fetchHomepage} from "../../helpers/apiHelpers";

export const KnivesAndAccessories = () => {
    const [images, setImages] = useState([])

    const getKnivesAndAccessoriesData = useCallback(async () => {
        const {knives} = await fetchHomepage()
        setImages(knives)
    }, [])

    useEffect(() => {
        getKnivesAndAccessoriesData().catch((err) => console.error(err))
    }, [getKnivesAndAccessoriesData])


    return (
        <div>
            <h1>Accessories</h1>
            <div className={classes.grid}>
                {images.map((image) => <img src={image.src} alt={image.alt}/>)}
            </div>
        </div>
    )
}

