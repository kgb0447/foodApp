export interface productTypes {
  id: number;
  name: string;
  short_description: string;
  categories?: string[];
  price: number;
  ratings: number;
  reviews?: number;
  image?: string;
  quantity?: number;
}
