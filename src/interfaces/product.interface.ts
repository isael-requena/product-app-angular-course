export interface IProduct {
    id : number;
    title : string;
    description : string;
    images : string[];
    price : number;
    category: ICategory;
    creationAt?: Date;
}

export interface ICategory {
    id: number;
    name: string,
    image: string,
    creationAt?: Date,
}