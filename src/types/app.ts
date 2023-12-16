export type Tproducts = {
  id: number,
  num: number,
  imgURL: string,
  title: string,
  price: number,
  quantity?: number
}[]

export type cartType = {
  id: number,
  imgURL: string,
  title: string,
  price: number
  category: string,
  quantity: number
}

export type wishlistType = {
  id: number,
  imgURL: string,
  title: string,
  price: number
  category?: string,
  quantity?: number
}

export type Tproduct = {
  id: number,
  imgURL: string,
  title: string,
  price: number,
  category: string,
  quantity?: number
}