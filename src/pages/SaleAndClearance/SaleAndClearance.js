import classes from "../HomePage/HomePage.module.css";
import {useCallback, useEffect, useState} from "react";
import {fetchHomepage} from "../../helpers/apiHelpers";

export const SaleAndClearance = () => {
    const [images, setImages] = useState([])

    const getSaleAndClearanceData = useCallback(async () => {
        const {knives} = await fetchHomepage()
        setImages(knives)

    }, [])

    useEffect(() => {
        getSaleAndClearanceData().catch((err) => console.error(err))
    }, [getSaleAndClearanceData])


    return (
        <div>
            <br/>
            <h1>Sale and Clearance</h1>
            <div className={classes.grid}>
                {images.map((image) => <img src={image.src} alt={image.alt}/>)}
            </div>
        </div>
    )
}

