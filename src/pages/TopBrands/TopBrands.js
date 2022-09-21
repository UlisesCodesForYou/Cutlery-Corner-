import classes from "../HomePage/HomePage.module.css";
import {useCallback, useEffect, useState} from 'react'
import {fetchHomepage} from "../../helpers/apiHelpers";

export const TopBrands = () => {
    const [images, setImages] = useState([])

    const getTopBrandsData = useCallback(async () => {
        const {knives} = await fetchHomepage()
        setImages(knives)

    }, [])

    useEffect(() => {
        getTopBrandsData().catch((err) => console.error(err))
    }, [getTopBrandsData])

    return (
        <div>
            <br/>
            <h1>Top Brands</h1>
            <div className={classes.grid}>
                {images.map((image) => <img src={image.src} alt={image.alt}/>)}
            </div>
        </div>
    )
}

