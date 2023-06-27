export interface Surfboard{
    id: number,
    name: string,
    description: string,
    rating: number,
    images: string,
    price: number,
}

export interface Surfgear{
    id: number,
    name: string,
    description: string,
    images: string,
    price: number,
}

export interface Fin{
    id: number,
    name: string,
    description: string,
    images: string,
    price: number,
}

export interface Wetsuit{
    id: number,
    category : string,
    name: string,
    description: string,
    images: string,
    price: number,
}

export interface User{
    username: string,
    phone_number: number,
    email: string,
    password: string
}