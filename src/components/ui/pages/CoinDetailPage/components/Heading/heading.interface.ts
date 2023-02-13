import {Dispatch, SetStateAction} from 'react'

export interface IHeading {
    name: string
    image: string
    current_price: string 
    price_change_percentage_24h: number
    chart: 'DEFAULT' | 'TV'
    setChart: Dispatch<SetStateAction<'DEFAULT' | 'TV'>>
}