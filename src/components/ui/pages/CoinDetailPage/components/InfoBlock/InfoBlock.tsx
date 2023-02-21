import { Hint } from "@skbkontur/react-ui"
import { FC, PropsWithChildren } from "react"
import styles from "../../coinDetail.module.scss"
import { IInfoBlock } from "./infoBlock.interface"

const InfoBlock: FC<PropsWithChildren<IInfoBlock>> = ({
  circulating_supply,
  market_cap,
  max_supply,
  current_price,
  total_volume,
  price_change_percentage_24h,
  price_change_24h,
}) => {
  return (
    <section className={styles.infoBlock}>
      <div>
        <p>Цена:</p>
        <div className={styles.priceContainer}>
          <p
            className={
              price_change_percentage_24h > 0 ? styles.grPrice : styles.rPrice
            }
          >
            {current_price.toLocaleString()}{" "}
          </p>
          <p className={styles.currency}> USD</p>
        </div>
      </div>
      <div>
        <p>Изменение за 24ч.</p>
        <div className={styles.priceContainer}>
          <p
            className={
              price_change_percentage_24h > 0 ? styles.grPrice : styles.rPrice
            }
          >
            {price_change_percentage_24h.toFixed(2)} %
          </p>
          <p
            className={
              price_change_percentage_24h > 0 ? styles.grPrice : styles.rPrice
            }
          >
            {price_change_24h.toFixed(2)} $
          </p>
        </div>
      </div>
      <div>
        <Hint text='Рыночная капитализация — стоимость объекта, рассчитанная на основе текущей рыночной цены.'>
          <p>Рыночная кап. ?</p>
        </Hint>
        <p className={styles.priceCap}>{market_cap.toLocaleString()} $</p>
      </div>
      <div>
        <p>Объем за 24ч.</p>
        <p>{total_volume.toLocaleString()} $</p>
      </div>
      <div>
        <Hint text='Циркулирующее предложение – наиболее точное приблизительное значение количества монет, которые циркулируют на рынке и имеются на руках у населения.'>
          <p>Циркул. предложение ?</p>
        </Hint>

        <p>{circulating_supply.toLocaleString()}</p>
      </div>
      <div>
        <Hint text='Максимальное предложение – наиболее точное приблизительное значение максимального количества монет, которое когда-либо будет существовать в течение срока обращения криптовалюты.'>
          <p>Макс. предложение ?</p>
        </Hint>
        <p>
          {max_supply === null
            ? "- - - - - - - - - - - - - - - - -"
            : max_supply}
        </p>
      </div>
    </section>
  )
}

export default InfoBlock