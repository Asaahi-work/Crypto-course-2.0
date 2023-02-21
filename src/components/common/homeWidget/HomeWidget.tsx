import { FC, PropsWithChildren } from "react"
import styles from "./homew.module.scss"
import { IHomeWidget } from "./HomeWidget.interface"

const HomeWidget: FC<PropsWithChildren<IHomeWidget>> = ({
  name,
  price,
  priceChange,
  image,
}) => {
  return (
    <div className={styles.widget}>
      <img className={styles.image} src={image} height={40} width={40} />
      <h3 className={styles.name}>{name}</h3>
      <p className={priceChange > 0 ? styles.price__up : styles.price__down}>
        {price.toFixed(2)}
      </p>
      <p className={styles.currency}>USD</p>
      <p className={priceChange > 0 ? styles.price__up : styles.price__down}>
        {priceChange.toFixed(3)}%
      </p>
    </div>
  )
}

export default HomeWidget
