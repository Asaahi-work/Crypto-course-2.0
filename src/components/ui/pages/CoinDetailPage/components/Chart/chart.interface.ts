import { Dispatch, SetStateAction } from "react"
import { TimeframeType } from "../../../../../../utils/determineTimeframe"

export interface IChart {
    DayQuery: {
        prices: [number[], number[]]
    }
    ThreeDayQuery: {
        prices: [number[], number[]]
    }
    WeekQuery: {
        prices: [number[], number[]]
    }
    MonthQuery: {
        prices: [number[], number[]]
    }
    timeframe: TimeframeType
}