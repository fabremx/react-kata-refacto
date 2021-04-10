export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  isNew: boolean;
  isSoonEnding: boolean;
  [key: string]: boolean | number | string | undefined;
}
