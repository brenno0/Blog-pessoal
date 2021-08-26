import styles from './header.module.scss';
import Link from 'next/link'
export default function Header() {
    return(
            <header className={styles.container}>
                    <div className={styles.logo}><h1>BrBlog</h1></div>
                    <div className={styles.headerMenu}>
                        <ul>
                            <li><Link href="/"><a>HOME</a></Link></li>
                            <li><Link href="" ><a className={styles.selected}>ABOUT</a></Link></li>
                            <li><Link href="/posts"><a>POSTS</a></Link></li>
                        </ul>
                    </div>
            </header>
    )
}