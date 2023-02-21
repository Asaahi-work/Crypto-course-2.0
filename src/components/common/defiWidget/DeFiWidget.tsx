import { FC, PropsWithChildren } from "react"
import { IDeFiWidget } from "./defi.interface"
import styles from "./defi.module.scss"

const DeFiWidget: FC<PropsWithChildren<IDeFiWidget>> = ({ market_cap }) => {
  return (
    <div className={styles.widgetitem}>
      <p className={styles.name}>DeFi</p>
      <p className={styles.cap}>{Number(market_cap).toFixed(3)}</p>
      <p className={styles.currency}>$</p>
    </div>
  )
}

export default DeFiWidget
