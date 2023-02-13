import { axiosClassic } from "../../api/Instance"
import { IDeFi } from "../../shared/intefaces/defi.interface"
import { IWidget } from "../../shared/intefaces/widget.interface"

// let watchList = ['bitcoin','ethereum']

export const WidgetService = {
    async getBitcoin() {
        return await axiosClassic.get<IWidget[]>('/coins/markets', {
            params: {
                vs_currency: 'usd',
                ids:'bitcoin'
            }
        })
    },

    async getMainWidgets() {
        return await axiosClassic.get<IWidget[]>('/coins/markets?vs_currency=usd&ids=bitcoin,ethereum')
    },

    async getDefiCap() {
        return await axiosClassic.get<IDeFi>('/global/decentralized_finance_defi')
    }
}