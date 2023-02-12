
import styles from './SocialMediaAccountLogIn.module.scss';

export function SocailMediaAcccountLogIn ({handleLink}:any) {
    return(
        <section className={styles.entryButtons}>
            <div className={styles.label}></div>
            <button><img src={require('../../../assets/img/icons/fb@2x.png')} alt="" /> Facebook</button>
            <button> <img src={require('../../../assets/img/icons/gc@2x.png')} alt="" /> Google</button>

            {
                window.location.pathname === '/' ? <button className={styles.register}>Start with email or phone</button> : null
            }
            

            <div className={styles.login}>Already have an account? <u onClick={() => handleLink('/signin')}>Sign In</u></div>
        </section>
    )
}