export interface Product{
    id: number,
    name: string,
    description: string,
    rating: number,
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

export interface Fin{
    id: number,
    name: string,
    description: string,
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


export const products = [
    // surfboard products
    {
        id: 1,
        name: "Hanel FF2",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        rating: 6.5,
        images: "/product_img/white surf.webp",
        price: 395000,
    },
    {
        id: 2,
        name: "Arenal Glide",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        rating: 7.2,
        images: "/product_img/yellow surf.webp",
        price: 595000,
    },
    {
        id: 3,
        name: "Hanel Pill",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        rating: 5.3,
        images: "/product_img/blue surf.webp",
        price: 375000,
    },
    {
        id: 4,
        name: "Mitsven Fish",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        rating: 8.1,
        images: "/product_img/red surf.webp",
        price: 695000,
    },
    {
        id: 5,
        name: "Radio Mod Twin",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        rating: 5.7,
        images: "/product_img/white blue surf.webp",
        price: 425000,
    },
    {
        id: 6,
        name: "Radio Mod Twin",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        rating: 5.9,
        images: "/product_img/white pink surf.webp",
        price: 325000,
    },
    {
        id: 7,
        name: " MPE P51",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        rating: 6.8,
        images: "/product_img/white surf4.webp",
        price: 545000,
    },
    {
        id: 8,
        name: "Arenal Fish",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        rating: 7.2,
        images: "/product_img/bluee surf.webp",
        price: 595000,
    },
]



export const wetsuits = [
     // wetsuit products
     {
        id: 1,
        category : "Mens",
        name: "Warm Wetsuit Hooded 5/4/3",
        description: "Mollusk Warm Wetsuits for cold water. Soft, Warm, Stretch Good for water 45° - 53° Hood made with Glide Skin smoothie material to shield your dome from wind YKK Zipper stands up to salt and sand Sturdy knee pads Key loop",
        images: "/wetsuit_img/wet1.jpeg",
        price: 135000,
    },
    {
        id: 2,
        category : "Womens",
        name: "Warm Wetsuit Hooded 5/4/3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        images: "/wetsuit_img/wet2.jpeg",
        price: 135000,
    },
    {
        id: 3,
        category : "Mens",
        name: "Warm Wetsuit Chest Zip 4/3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        images: "/wetsuit_img/wet3.jpeg",
        price: 115000,
    },
    {
        id: 4,
        category : "Womens",
        name: "Warm Wetsuit Chest Zip 4/3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        images: "/wetsuit_img/wet4.jpeg",
        price: 115000,
    },
    {
        id: 5,
        category : "Mens",
        name: "Warm Wetsuit Back Zip 4/3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        images: "/wetsuit_img/wet5.jpeg",
        price: 89500,
    },
    {
        id: 6,
        category : "Womens",
        name: "Warm Wetsuit Back Zip 4/3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        images: "/wetsuit_img/wet6.jpeg",
        price: 89500,
    },
    {
        id: 7,
        category : "Mens",
        name: "Warm Wetsuit Long Sleeve Spring",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        images: "/wetsuit_img/wet7.jpeg",
        price: 80500,
    },
    {
        id: 8,
        category : "Womens",
        name: "Warm Wetsuit Long Sleeve Spring",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        images: "/wetsuit_img/wet8.webp",
        price: 80500,
    },
]

export const womenWetsuits = [
    // only women wetsuit products
   {
       id: 1,
       category : "Womens",
       name: "Warm Wetsuit Hooded 5/4/3",
       description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
       images: "/wetsuit_img/wet2.jpeg",
       price: 135000,
   },
   {
       id: 2,
       category : "Womens",
       name: "Warm Wetsuit Chest Zip 4/3",
       description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
       images: "/wetsuit_img/wet4.jpeg",
       price: 115000,
   },
   {
       id: 3,
       category : "Womens",
       name: "Warm Wetsuit Back Zip 4/3",
       description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
       images: "/wetsuit_img/wet6.jpeg",
       price: 89500,
   },
   {
       id: 4,
       category : "Womens",
       name: "Warm Wetsuit Long Sleeve Spring",
       description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
       images: "/wetsuit_img/wet8.webp",
       price: 80500,
   },
]

export const menWetsuits = [
    // only men wetsuit products
    {
       id: 1,
       category : "Mens",
       name: "Warm Wetsuit Hooded 5/4/3",
       description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
       images: "/wetsuit_img/wet1.jpeg",
       price: 135000,
   },
   {
       id: 2,
       category : "Mens",
       name: "Warm Wetsuit Chest Zip 4/3",
       description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
       images: "/wetsuit_img/wet3.jpeg",
       price: 115000,
   },
   {
       id: 3,
       category : "Mens",
       name: "Warm Wetsuit Back Zip 4/3",
       description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
       images: "/wetsuit_img/wet5.jpeg",
       price: 89500,
   },
   {
       id: 4,
       category : "Mens",
       name: "Warm Wetsuit Long Sleeve Spring",
       description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
       images: "/wetsuit_img/wet7.jpeg",
       price: 80500,
   },
]

export const fins = [
      // fin products
      {
        id: 1,
        name: "Radio Thruster Fin Set",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        images: "/fins_img/fin1.webp",
        price: 31500,
    },
    {
        id: 2,
        name: "Radio Keel Fin Set",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        images: "/fins_img/fin2.webp",
        price: 32500,
    },
    {
        id: 3,
        name: "Radio Twin Fin Set",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        images: "/fins_img/fin3.webp",
        price: 31500,
    },
    {
        id: 4,
        name: "Radio Power Grab 2+1 Fin Set",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        images: "/fins_img/fin4.webp",
        price: 46500,
    },
    {
        id: 5,
        name: "Radio Mods Quad Fin Set",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        images: "/fins_img/fin5.webp",
        price: 44500,
    },
    {
        id: 6,
        name: "Radio Power Grab Side Bites",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
        images: "/fins_img/fin6.webp",
        price: 32500,
    },
]

export const surfgears = [
    // surfgear products
    {
      id: 1,
      name: "Travel Day Bag",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
      images: "/surfgears_img/bag.webp",
      price: 55900,
  },
  {
      id: 2,
      name: "Da Fin",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
      images: "/surfgears_img/fin.webp",
      price: 32500,
  },
  {
      id: 3,
      name: "Graphis Towel",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
      images: "/surfgears_img/towel.webp",
      price: 26500,
  },
  {
      id: 4,
      name: "Wavehouse Leash",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos voluptatum impedit dolorum aliquam magni quas.",
      images: "/surfgears_img/leash.jpg",
      price: 12500,
  }
]