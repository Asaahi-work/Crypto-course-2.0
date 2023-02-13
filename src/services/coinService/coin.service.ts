import { axiosClassic } from "../../api/Instance"
import { ICoin, ICoinChart, ICoinDetail } from "../../shared/intefaces/coin.interface"
import { URL } from "./url"

export const CoinService = {
    async getCoins() {
        return await axiosClassic.get<ICoin[]>(URL)
    },

    async getDayBtc() {
        return await axiosClassic.get<ICoinChart>('/coins/bitcoin/market_chart/?vs_currency=usd&days=1')
    },

    async get3DayBtc() {
        return await axiosClassic.get<ICoinChart>('/coins/bitcoin/market_chart/?vs_currency=usd&days=3')
    },

    async get7DayBtc() {
        return await axiosClassic.get<ICoinChart>('/coins/bitcoin/market_chart?vs_currency=usd&days=7')
    },
    
    async getMonthBtc() {
        return await axiosClassic.get<ICoinChart>('/coins/bitcoin/market_chart?vs_currency=usd&days=30')
    },

    async getDayCoin(id: unknown) {
        return await axiosClassic.get<ICoinChart>(`/coins/${id}/market_chart?vs_currency=usd&days=1`)
    },

    async get3DayCoin(id: unknown) {
        return await axiosClassic.get<ICoinChart>(`/coins/${id}/market_chart?vs_currency=usd&days=3`)
    },

    async get7DayCoin(id: unknown) {
        return await axiosClassic.get<ICoinChart>(`/coins/${id}/market_chart?vs_currency=usd&days=7`)
    },

    async getMonthCoin(id: unknown) {
        return await axiosClassic.get<ICoinChart>(`/coins/${id}/market_chart?vs_currency=usd&days=30`)
    },

    async getCoin(id: unknown) {
        return await axiosClassic.get<ICoinDetail[]>(`/coins/markets?vs_currency=usd&ids=${id}`)
    },
    
    async getSymbol(id: any) {
        return await axiosClassic.get(`/coins/markets?vs_currency=usd&ids=${id}`)
    }

}