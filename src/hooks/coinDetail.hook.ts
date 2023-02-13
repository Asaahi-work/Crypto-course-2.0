import { useQuery } from "@tanstack/react-query"
import { CoinService } from "../services/coinService/coin.service"

export const useCoinDayQuery = (id: string) => {
    return useQuery(['coin chart'], () => CoinService.getDayCoin(id))
}

export const useCoin3DayQuery = (id: string) => {
    return useQuery(['coin chart'], () => CoinService.get3DayCoin(id))
}

export const useCoinWeekQuery = (id: string) => {
    return useQuery(['coin chart'], () => CoinService.get7DayCoin(id))
}

export const useCoinMonthQuery = (id: string) => {
    return useQuery(['coin chart'], () => CoinService.getMonthCoin(id))
}