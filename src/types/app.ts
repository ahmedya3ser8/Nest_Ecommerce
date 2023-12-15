export type ProductItemType = {
  id: number,
  productNum: number;
  imgUrl: string;
  title: string;
  price: number;
}

export type Tproducts = {
  id: number,
  imgURL: string,
  title: string,
  price: number
  category: string
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
  category: string,
  quantity: number
}