import { FC } from "react"
import styles from "./footer.module.scss"

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>Crypto course 2.0 2023.</p>
    </footer>
  )
}

export default Footer
