import classes from "../HomePage/HomePage.module.css";
import {useCallback, useEffect, useState} from "react";
import {fetchHomepage} from "../../helpers/apiHelpers";

export const Brands = () => {
        const [images, setImages] = useState([])

        const getBrandsData = useCallback(async () => {
            const {knives} = await fetchHomepage()
            setImages(knives)
        }, [])

        useEffect(() => {
            getBrandsData().catch((err) => console.error(err))
        }, [getBrandsData])


        return (
            <div>
                <h1>Brands</h1>
                <div className={classes.grid}>
                    {images.map((image) => <img src={image.src} alt={image.alt}/>)}
                </div>
            </div>
        )
    }


;