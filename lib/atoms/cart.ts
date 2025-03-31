import { atom } from "recoil"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  color: string
  size: string
}

export interface Cart {
  items: CartItem[]
}

export const cartState = atom<Cart>({
  key: "cartState",
  default: {
    items: [],
  },
})

