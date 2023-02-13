import {FC, PropsWithChildren} from 'react'
import styles from '../../ui/pages/PreviewPage/preview.module.scss'
import { IWidget } from '../../../shared/intefaces/widget.interface';

const Widget:FC<PropsWithChildren<IWidget>> = ({name, current_price, image, price_change_percentage_24h}) => {

    return (
        <div className={styles.widgetitem}>
            <img className={styles.symbol} src={image} height={40} width={40} />
            <p className={styles.name}>{name}</p>
            <p className={price_change_percentage_24h > 0 ? styles.price__up : styles.price__down}>{current_price.toFixed(2)}</p>
            <p className={styles.currency}>USD</p>
        </div>
    )
}

export default Widget