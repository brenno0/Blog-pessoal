import styles from './header.module.scss';
import Link from 'next/link';
import { signIn,signOut,useSession } from "next-auth/client"
import {FiLogOut} from 'react-icons/fi'
import { useRouter } from 'next/dist/client/router';



export default function Header() {
    const [session,loading] = useSession();
    const router = useRouter();

    const sessionLogout = async () => {
      const pushUser = await router.push('/')
        signOut()
        return pushUser;
    }
    
    return(
        <header className={styles.container}>
            <div className={styles.logo}><a href="/"><h1>BrBlog</h1></a></div>
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