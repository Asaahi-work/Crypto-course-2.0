import { useQuery } from "@tanstack/react-query"
import { FC, useState } from "react"
import { useParams, Params } from "react-router-dom"
import {
  useCoin3DayQuery,
  useCoinDayQuery,
  useCoinMonthQuery,
  useCoinWeekQuery,
} from "../../../../hooks/coinDetail.hook"
import { useGetId } from "../../../../hooks/getId.hook"
import { CoinService } from "../../../../services/coinService/coin.service"
import { TimeframeType } from "../../../../utils/determineTimeframe"
import ChartLoadingBox from "../../../common/preloaders/chartLoading/ChartLoadingBox"
import Layout from "../../layout/Layout"
import styles from "./coinDetail.module.scss"
import ChartComponent from "./components/Chart/Chart"
import Heading from "./components/Heading/Heading"
import InfoBlock from "./components/InfoBlock/InfoBlock"
import TradingViewWidget from "./components/TradingViewChart/TradingViewChart"

const CoinDetailPage: FC = () => {
  const [timeframe, setTimeframe] = useState<TimeframeType>("DAY")
  const [chart, setChart] = useState<"DEFAULT" | "TV">("DEFAULT")

  console.log(timeframe)

  const { id } = useParams()
  const coinsDetailQuery = useQuery(["coin detail info", id], () =>
    CoinService.getCoin(id)
  )
  const coinsSymbolQuery = useQuery(["coin symbol info", id], () =>
    CoinService.getSymbol(id)
  )

  const coinsDetailDay = useQuery(["coin detail day", id], () =>
    CoinService.getDayCoin(id)
  )
  const coinsDetail3Day = useQuery(["coin detail 3days", id], () =>
    CoinService.get3DayCoin(id)
  )
  const coinsDetailWeek = useQuery(["coin detail 7days", id], () =>
    CoinService.get7DayCoin(id)
  )
  const coinsDetailMonth = useQuery(["coin detail 30days", id], () =>
    CoinService.getMonthCoin(id)
  )

  if (chart === "TV") {
    return (
      <Layout>
        <main className={styles.detail}>
          {coinsDetailQuery.isLoading ? (
            <ChartLoadingBox />
          ) : coinsDetailQuery.data?.data ? (
            coinsDetailQuery.data.data.map((el: any) => (
              <>
                <Heading
                  chart={chart}
                  setChart={setChart}
                  key={el.id}
                  price_change_percentage_24h={el.price_change_percentage_24h}
                  image={el.image}
                  name={el.name}
                  current_price={el.current_price}
                />
              </>
            ))
          ) : (
            <div>No data found.</div>
          )}
          <div className={styles.tvChart}>
            <TradingViewWidget />
          </div>
        </main>
      </Layout>
    )
  }

  return (
    <Layout>
      <main className={styles.detail}>
        {coinsDetailQuery.isLoading ? (
          <ChartLoadingBox />
        ) : coinsDetailQuery.data?.data ? (
          coinsDetailQuery.data.data.map((el: any) => (
            <>
              <Heading
                chart={chart}
                setChart={setChart}
                key={el.id}
                price_change_percentage_24h={el.price_change_percentage_24h}
                image={el.image}
                name={el.name}
                current_price={el.current_price}
              />
              <InfoBlock
                key={el.id}
                price_change_24h={el.price_change_24h}
                price_change_percentage_24h={el.price_change_percentage_24h}
                total_volume={el.total_volume}
                circulating_supply={el.circulating_supply}
                max_supply={el.max_supply}
                market_cap={el.market_cap}
                current_price={el.current_price}
              />
            </>
          ))
        ) : (
          <div>No data found.</div>
        )}

        <section className={styles.timeframes}>
          <button onClick={() => setTimeframe("DAY")}>День</button>
          <button onClick={() => setTimeframe("DAY3")}>3 Дня</button>
          <button onClick={() => setTimeframe("DAY7")}>Неделя</button>
          <button onClick={() => setTimeframe("MONTH")}>Месяц</button>
        </section>

        {coinsDetailDay.isLoading ? (
          <ChartLoadingBox />
        ) : coinsDetailDay.data?.data &&
          coinsDetail3Day.data?.data &&
          coinsDetailWeek.data?.data &&
          coinsDetailMonth.data?.data ? (
          <ChartComponent
            timeframe={timeframe}
            DayQuery={coinsDetailDay.data.data}
            ThreeDayQuery={coinsDetail3Day.data.data}
            WeekQuery={coinsDetailWeek.data.data}
            MonthQuery={coinsDetailMonth.data.data}
          />
        ) : (
          <div>No data found.</div>
        )}
      </main>
    </Layout>
  )
}

export default CoinDetailPage
