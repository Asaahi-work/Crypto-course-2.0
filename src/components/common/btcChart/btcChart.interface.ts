import { TimeframeType } from "../../../utils/determineTimeframe"

export interface IBtcChart {
    btcDayQuery: {
        prices: [number[], number[]]
    }
    btc3DayQuery: {
        prices: [number[], number[]]
    }
    btc7DayQuery: {
        prices: [number[], number[]]
    }
    btcMonthQuery: {
        prices: [number[], number[]]
    }
    timeframe: TimeframeType
}