import { Hint } from '@skbkontur/react-ui'
import { useQuery } from '@tanstack/react-query'
import {FC, useState,} from 'react'
import { Link } from 'react-router-dom'
import { CoinService } from '../../../../services/coinService/coin.service'
import { WidgetService } from '../../../../services/widgetService/widget.service'
import { TimeframeType } from '../../../../utils/determineTimeframe'
import BtcChart from '../../../common/btcChart/BtcChart'
import HomeWidget from '../../../common/homeWidget/HomeWidget'
import ChartLoadingBox from '../../../common/preloaders/chartLoading/ChartLoadingBox'
import LoadingBox from '../../../common/preloaders/loading/LoadingBox'
import Layout from '../../layout/Layout'
import styles from './home.module.scss'

const HomePage:FC = () => {
    const [timeframe, setTimeframe] = useState<TimeframeType>('DAY')

    const {data, isLoading} = useQuery(['btc'], () => WidgetService.getBitcoin())

    const btcDayQuery = useQuery(['btc day'], () => CoinService.getDayBtc())
    const btc3DayQuery = useQuery(['btc 3day'], () => CoinService.get3DayBtc())
    const btc7DayQuery = useQuery(['btc 7days'], () => CoinService.get7DayBtc())
    const btcMonthQuery = useQuery(['btc month'], () => CoinService.getMonthBtc())
    
    


    return (
        <Layout>
            <main className={styles.main}>
                <h1 className={styles.title}>Быстрый просмотр</h1>
                <LoadingBox/>
                <div className={styles.widget}>
                </div>


                <h1 className={styles.title}>Обзор рынка</h1>

                <div className={styles.market}>
                    {
                        isLoading ? <LoadingBox/>
                         : data?.data ? 
                         <Link to={'/coin/detail/bitcoin'}>
                            <HomeWidget name={data?.data[0].name} price={data?.data[0].current_price} priceChange={data?.data[0].price_change_percentage_24h} image={data?.data[0].image}/> 
                         </Link>
                         : <div>No data found.</div>
                    }
                    <div className={styles.btnContainer}>
                        <button className={styles.btn} onClick={() => setTimeframe('DAY')}>День</button>
                        <button className={styles.btn} onClick={() => setTimeframe('DAY3')}>3 дня</button>
                        <button className={styles.btn} onClick={() => setTimeframe('DAY7')}>Неделя</button>
                        <button className={styles.btn} onClick={() => setTimeframe('MONTH')}>Месяц</button>
                        <Hint text="торговый период — интервал времени, используемый для группировки котировок при построении элементов ценового графика">
                            <button className={styles.hint}>Timeframe ?</button>
                        </Hint>
                    </div>
                   
                    {
                        isLoading ? <ChartLoadingBox/> 
                        : btcDayQuery.data?.data && btc3DayQuery.data?.data && btc7DayQuery.data?.data && btcMonthQuery.data?.data ?
                        <BtcChart timeframe={timeframe} btcDayQuery={btcDayQuery.data.data} btc3DayQuery={btc3DayQuery.data.data} btc7DayQuery={btc7DayQuery.data.data} btcMonthQuery={btcMonthQuery.data.data}/>
                        : <div>No data found.</div>
                    }
                    
                </div>

                <h1 className={styles.title}>Выбор редакции</h1>
                
                <div className={styles.redactions}>

                    <div className={styles.categoryContainer}>
                        <div className={styles.category}>
                            <h3 className={styles.categoryName}>Торговые идеи</h3>
                        </div>
                        <div className={styles.category}>
                            <h3 className={styles.categoryName}>Документация</h3>
                        </div>
                    </div>

                    <div className={styles.graphic}>

                    </div>
                </div>

                <h1 className={styles.title}>Последние новости</h1>

                <div className={styles.graphic}>

                </div>


            </main>
        </Layout>
    )
}

export default HomePage