import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { SocailMediaAcccountLogIn } from './components/SocialMediaAccountLogIn';

export const Entry = () => {
    const navigate = useNavigate();

    const handleLink = (path:string) => {
        navigate(path);
        console.log("path:",path)
    }
    return(
        <div className={styles.entryWrapper}>
            <section className={styles.grretingSection}>
                <div className={styles.greetings}>Welcome to</div>
                <div className={styles.appName}>FoodHub</div>
                <p>Your favorite foods delivered fast at your door.</p>
            </section>
            <SocailMediaAcccountLogIn handleLink={handleLink}/>
        </div>
    )
}