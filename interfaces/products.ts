export type Sizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL'
export type Types = 'shirts'|'pants'|'hoodies'|'hats'

export interface IProduct {
  _id: string
  description: string
  images: string[]
  inStock: number
  price: number
  sizes: Sizes[]
  slug: string
  tags: string[]
  title: string
  type: Types
  gender: 'men'|'women'|'kid'|'unisex'
}