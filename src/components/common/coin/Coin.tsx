import {FC, PropsWithChildren} from 'react'
import { Link } from 'react-router-dom'
import styles from './coin.module.scss'
import { ICoinResponse } from './coinComponent.interface'

const Coin:FC<PropsWithChildren<ICoinResponse>> = ({id, symbol, name, image, current_price, market_cap, price_change_24h, price_change_percentage_24h}) => {
    return (
        <Link to={`/coin/detail/${id}`}>
            <div className={styles.coin}> 
                <img src={image} height={40} width={40} className={styles.image}/>
                <p className={styles.symbol}>{symbol.toUpperCase()}</p>
                <p className={styles.name}>{name}</p>
                <p className={styles.price}>Цена <span className={price_change_percentage_24h > 0 ? styles.price__up : styles.price__down}>{current_price.toFixed(2)}</span></p>
                <p className={styles.priceChange}>Изменение за 24ч. <span className={price_change_percentage_24h > 0 ? styles.price__up : styles.price__down}>{price_change_24h.toFixed(2)} USD</span></p>
                <p className={styles.priceChangeP}>Изменение за 24ч. в % <span className={price_change_percentage_24h > 0 ? styles.price__up : styles.price__down}>{price_change_percentage_24h.toFixed(2)}%</span></p>
                <p className={styles.marketCap}>Рыночная капитализация <span>{market_cap.toLocaleString()} </span>$</p>
            </div>
        </Link>
    )
}

export default Coin