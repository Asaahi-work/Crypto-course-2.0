import { FC, PropsWithChildren } from "react";
import styles from '../../coinDetail.module.scss'
import {useState} from 'react'
import { IHeading } from "./heading.interface";

const Heading:FC<PropsWithChildren<IHeading>> = ({chart, setChart, name, image, current_price, price_change_percentage_24h}) => {
    const [count, setCount] = useState<number>(2)
    const price = current_price.toLocaleString()
    
    const handlerButton = () => {
        console.log(count)
        setCount(count + 1)
        console.log(count)
        if (count % 2 === 0) {
            setChart('TV')
        } else if (count % 2 !== 0) {
            setChart('DEFAULT')
        }
    }

    return (
        <section className={styles.header}>
            <div className={styles.heading}>
                <img className={styles.img} src={image} width={100} height={100}/>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.el}>|</p>
                <p className={price_change_percentage_24h > 0 ? styles.grPrice : styles.rPrice}>{price}</p>
                <p className={styles.currency}>USD</p>
            </div>
            <button className={styles.interactiveBtn} onClick={handlerButton}>{chart === "DEFAULT" ? 'Подробный интерактивный график' : 'Линейный график'}</button>
        </section>        
    )
}

export default Heading