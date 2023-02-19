export  interface productTypes{
    id: number,
    name:string,
    description: string,
    categories:string[],
    price: number,
    ratings: number,
    reviews ?: number,
    thumbnail?: string,
}