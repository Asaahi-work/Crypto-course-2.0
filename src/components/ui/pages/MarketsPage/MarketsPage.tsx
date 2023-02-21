import { Hint } from "@skbkontur/react-ui"
import { useQuery } from "@tanstack/react-query"
import { FC, PropsWithChildren, useRef } from "react"
import { CoinService } from "../../../../services/coinService/coin.service"
import { WidgetService } from "../../../../services/widgetService/widget.service"
import Coin from "../../../common/coin/Coin"
import DeFiWidget from "../../../common/defiWidget/DeFiWidget"
import LoadingBox from "../../../common/preloaders/loading/LoadingBox"
import Layout from "../../layout/Layout"
import styles from "./markets.module.scss"

const MarketsPage: FC<PropsWithChildren> = () => {
  const defiQuery = useQuery(["defi cap"], () => WidgetService.getDefiCap())
  const coinsQuery = useQuery(["coins"], () => CoinService.getCoins())

  return (
    <Layout>
      <div className={styles.market}>
        <h1 className={styles.title}>Обзор рынка криптовалют</h1>
        <center>
          <hr className={styles.line} />
        </center>
        <section className={styles.cap}>
          <Hint text=' DeFi — это финансовые инструменты в виде сервисов и приложений, созданных на блокчейне. Это современная альтернатива банковскому сектору. DeFi успешно заменяют традиционные технологии финансовой системы протоколами с открытым исходным кодом.'>
            <h3 className={styles.marketcap}>DeFi капитализация ?</h3>
          </Hint>
          {defiQuery.isLoading ? (
            <LoadingBox />
          ) : defiQuery.data?.data ? (
            <DeFiWidget
              market_cap={defiQuery.data?.data.data.defi_market_cap}
            />
          ) : (
            <div>No data found.</div>
          )}
        </section>
        <section className={styles.instruments}>
          <h3 className={styles.heading}>Крипто-активы</h3>
          <center>
            <hr className={styles.headingLine} />
          </center>
          <div className={styles.coinlist}>
            {coinsQuery.isLoading ? (
              <LoadingBox />
            ) : coinsQuery.data?.data ? (
              coinsQuery.data.data.map((el: any) => (
                <>
                  <Coin
                    id={el.id}
                    key={el.id}
                    symbol={el.symbol}
                    name={el.name}
                    image={el.image}
                    current_price={el.current_price}
                    market_cap={el.market_cap}
                    price_change_24h={el.price_change_24h}
                    price_change_percentage_24h={el.price_change_percentage_24h}
                  />
                </>
              ))
            ) : (
              <div>No data found.</div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default MarketsPage