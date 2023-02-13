import {FC, useEffect, useRef} from 'react'
import styles from './header.module.scss'
import Logo from '../../../assets/images/logo.jpg'
import {Link} from 'react-router-dom'


const Header:FC = () => {
    const headerRef = useRef<any>()    

    const scrollHandler = () => {
       const bcr = headerRef.current.getBoundingClientRect()
       console.log(bcr)
    }
    
    useEffect(() => {
      window.addEventListener("scroll", scrollHandler, false)
      return () => window.removeEventListener("scroll", scrollHandler, false)
    }, [])


    return (
        <header ref={headerRef} className={styles.header}>
                <Link to='/home'>
                    <img src={Logo} alt='logo' className={styles.logo}/>
                </Link>
                <li><Link to='/markets' className={styles.markets}>Рынки</Link></li>
                <li><Link to='/news' className={styles.markets}>Новости</Link></li>
        </header>
    )
}

export default Header