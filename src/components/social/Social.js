import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import classes from './social.module.css'

export const Social = () => {
    return (
        <>
            <div className={classes.socialContainer}>
                <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer' className={classes.anchor}>
                    <FontAwesomeIcon icon={faYoutube} size='2x' className={classes.icon}/>
                </a>
                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'  className={classes.anchor}>
                    <FontAwesomeIcon icon={faFacebook} size='2x' className={classes.icon}/>
                </a>
                <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'  className={classes.anchor}>
                    <FontAwesomeIcon icon={faTwitter} size='2x' className={classes.icon}/>
                </a>
                <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'  className={classes.anchor}>
                    <FontAwesomeIcon icon={faInstagram} size='2x' className={classes.icon}/>
                </a>
            </div>
        </>
    )

}