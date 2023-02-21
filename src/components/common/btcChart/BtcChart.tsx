import { FC, PropsWithChildren, useState } from "react"
import {
  Chart as ChartJS,
  Title,
  Filler,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { IBtcChart } from "./btcChart.interface"
import styles from "./btcChart.module.scss"
import { options } from "../../../config/chartjsConfig"
import {
  determineTimeframe,
  TimeframeType,
} from "../../../utils/determineTimeframe"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const BtcChart: FC<PropsWithChildren<IBtcChart>> = ({
  timeframe,
  btcDayQuery,
  btc3DayQuery,
  btc7DayQuery,
  btcMonthQuery,
}) => {
  return (
    <div className={styles.chart}>
      <Line
        data={{
          labels: determineTimeframe(
            timeframe,
            btcDayQuery.prices,
            btc3DayQuery.prices,
            btc7DayQuery.prices,
            btcMonthQuery.prices
          ).map((el: number[]) => {
            let date = new Date(el[0])
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
                : `${date.getHours()}: ${date.getMinutes()} AM`

            return time
          }),
          datasets: [
            {
              label: "",
              fill: true,
              data: determineTimeframe(
                timeframe,
                btcDayQuery.prices,
                btc3DayQuery.prices,
                btc7DayQuery.prices,
                btcMonthQuery.prices
              ).map((el: number[]) => el[1]),
              borderColor: "#93f2e4",
              backgroundColor: "rgba(147, 242, 228, 0.4)",
              pointRadius: 1,
            },
          ],
        }}
        options={options}
      ></Line>
    </div>
  )
}

export default BtcChart