import { useQuery } from "@tanstack/react-query"
import { CoinService } from "../services/coinService/coin.service"

export const useGetId = (id: unknown) => {
  if (id) {
    return useQuery(["coins info detail", id], () => CoinService.getCoin(id))
  }

  return null
}
