import styles from './header.module.scss';
import Link from 'next/link';
import { signIn,signOut,useSession } from "next-auth/client"
import {FiLogOut} from 'react-icons/fi'



export default function Header() {
    const [session,loading] = useSession();
    console.log(session);

    const sessionLogout = () => {
        if(session) {
            signOut()
        }
    }
    
    return(
        <header className={styles.container}>
            <div className={styles.logo}><h1>BrBlog</h1></div>
            <div className={styles.headerMenu}>
                <img src={session?.user.image} />
                <div className={styles.userDescription}>
                    <p className={styles.name}> {session?.user.name}</p>
                    <p className={styles.email}> {session?.user.email} </p>
                </div>
                {session ? <FiLogOut onClick={() => sessionLogout()} className={styles.logoutIcon} fontSize={20}  /> : <p className={styles.loginSugestion}>Faça login para prosseguir</p>}
            </div>
        </header>
    )
}