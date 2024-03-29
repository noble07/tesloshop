import { Size } from './'

export interface ICartProduct {
  _id: string
  images: string
  price: number
  size?: Size
  slug: string
  title: string
  gender: 'men'|'women'|'kid'|'unisex'
  quantity: number
}
