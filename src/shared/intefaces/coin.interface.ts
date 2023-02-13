export interface ICoin {
    id: string
    symbol: string
    name: string
    image: string
    current_price: number
    market_cap: number
    price_change_24h: number
    price_change_percentage_24h: number
}

export interface ICoinDetail extends ICoin {
    total_volume: number
    circulating_supply: number
    max_supply: number | null
}


export interface ICoinChart {
        prices: [number[], number[]]
        market_caps?: []
        total_volumes?: []
}