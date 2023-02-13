export type TimeframeType = 'DAY' | 'DAY3' | 'DAY7' | 'MONTH'

export const determineTimeframe = (timeframe: TimeframeType, 
    ArrayDay: [number[], number[]], 
    Array3Day: [number[], number[]], 
    Array7Day: [number[], number[]],
    Array30Day: [number[], number[]]) => {
        switch (timeframe) {
            case 'DAY':
                return ArrayDay
            case 'DAY3':
                return Array3Day
            case 'DAY7':
                return Array7Day
            case 'MONTH':
                return Array30Day
            default:
                return ArrayDay
        }
}