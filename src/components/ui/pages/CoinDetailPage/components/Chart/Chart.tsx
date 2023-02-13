import {FC, PropsWithChildren} from 'react'
import styles from '../../coinDetail.module.scss'
import { Chart as ChartJS, Title, Filler, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Line } from 'react-chartjs-2';
import { IChart } from './chart.interface';
import { determineTimeframe } from '../../../../../../utils/determineTimeframe';
import { options } from '../../../../../../config/chartjsConfig';

ChartJS.register( 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend)

const ChartComponent:FC<PropsWithChildren<IChart>> = ({DayQuery, ThreeDayQuery, WeekQuery, MonthQuery, timeframe}) => {
    return (
        <div className={styles.chartComponent}>
            <Line
                data={{
                    labels: determineTimeframe(
                        timeframe, 
                        DayQuery.prices,
                        ThreeDayQuery.prices,
                        WeekQuery.prices,
                        MonthQuery.prices).map((el:number[]) => {
                        let date = new Date(el[0])
                        let time = date.getHours() > 12
                            ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
                            : `${date.getHours()}: ${date.getMinutes()} AM`
                        
                         return time
                    }),
                    datasets: [{
                        label:'', 
                        fill:true,
                        data: determineTimeframe(
                          timeframe, 
                          DayQuery.prices,
                          ThreeDayQuery.prices,
                          WeekQuery.prices,
                          MonthQuery.prices).map((el:number[]) => el[1]), 
                        borderColor:'#93f2e4',
                        backgroundColor:'rgba(147, 242, 228, 0.4)',
                        pointRadius:1,
                    }]
                }}

                options={options}
            >
            </Line>
        </div>
    )
}

export default ChartComponent