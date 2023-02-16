
import styles from './SocialMediaAccountLogIn.module.scss';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export function SocailMediaAcccountLogIn (props:any) {
    const {id} = useParams();
    const navigate= useNavigate();
    return(
        <section className={styles.entryButtons}>
            <div className={styles.label}></div>
            <button><img src={require('../../../assets/img/icons/fb@2x.png')} alt="" /> Facebook</button>
            <button><img src={require('../../../assets/img/icons/gc@2x.png')} alt="" /> Google</button>
{/* 
            {
                window.location.pathname === '/' ? <button className={styles.register} onClick={()=>  handleLink('/entry/:signup')}>Start with email or phone</button> : null
            }
             */}
            {
                id === ":signup" ? ( <div className={styles.login}>Already have an account? <u onClick={() => navigate('/entry/:signin')}>Sign In</u></div>) : 
                (<div className={styles.login}>Don't have an account? <u onClick={() => navigate('/entry/:signup')}>Sign Up</u></div>)
            }
           
        </section>
    )
}