import { asyncStorage } from "../data/asyncStorage";

const data = [
    {
        id: "1",
        name: 'Phalaenopsis Orchid',
        imageUrl: require('../../assets/images/phalaenopsis-orchid.jpg'),
        price: 29.99,
        description:
            'The Phalaenopsis Orchid, also known as Moth Orchid, is a popular choice among orchid enthusiasts. It features elegant blooms and comes in various colors.',
        categoryId: "1"
    },
    {
        id: "2",
        name: 'Cattleya Orchid',
        imageUrl: require('../../assets/images/cattleya-orchid.jpg'),
        price: 39.99,
        description:
            'Cattleya Orchids are known for their large, vibrant flowers and strong fragrance. They make a stunning centerpiece in any floral arrangement.',
        categoryId: "2"
    },
    {
        id: "3",
        name: 'Dendrobium Orchid',
        imageUrl: require('../../assets/images/dendrobium-orchid.jpg'),
        price: 24.99,
        description:
            'Dendrobium Orchids are prized for their graceful sprays of flowers that come in various shades. They are relatively easy to care for and can bloom for months.',
        categoryId: "1"
    },
    {
        id: "4",
        name: 'Oncidium Orchid',
        imageUrl: require('../../assets/images/oncidium-orchid.jpg'),
        price: 34.99,
        description:
            'Oncidium Orchids, commonly known as Dancing Lady Orchids, have distinctive yellow flowers with red or brown markings. They add a touch of elegance to any space.',
        categoryId: "3"
    },
    {
        id: "5",
        name: 'Vanda Orchid',
        imageUrl: require('../../assets/images/vanda-orchid.jpg'),
        price: 49.99,
        description:
            'Vanda Orchids are prized for their large, showy flowers and vibrant colors. They require bright light and high humidity to thrive.',
        categoryId: "3"
    },
    {
        id: "6",
        name: 'Cymbidium Orchid',
        imageUrl: require('../../assets/images/cymbidium-orchid.jpg'),
        price: 32.99,
        description:
            'Cymbidium Orchids are known for their long-lasting blooms and variety of colors. They are popular as cut flowers and can also be grown in pots.',
        categoryId: "4"
    },
    {
        id: "7",
        name: 'Miltonia Orchid',
        imageUrl: require('../../assets/images/miltonia-orchid.jpg'),
        price: 27.99,
        description:
            'Miltonia Orchids, also known as Pansy Orchids, have large, flat-faced flowers with intricate patterns. They are often fragrant and make beautiful gifts.',
        categoryId: "1"
    },
    {
        id: "8",
        name: 'Ophrys Orchid',
        imageUrl: require('../../assets/images/ophrys-orchid.jpg'),
        price: 44.99,
        description:
            'Ophrys Orchids, commonly known as Bee Orchids, have flowers that resemble bees or insects. They have evolved to attract specific pollinators.',
        categoryId: "2"
    },
    {
        id: "9",
        name: "Lady's Slipper Orchid",
        imageUrl: require('../../assets/images/ladys-slipper-orchid.jpg'),
        price: 36.99,
        description:
            "Lady's Slipper Orchids have unique pouch-like flowers that come in various shapes and colors. They are highly sought after by orchid enthusiasts.",
        categoryId: "3"
    },
    {
        id: "10",
        name: 'Encyclia Orchid',
        imageUrl: require('../../assets/images/encyclia-orchid.jpg'),
        price: 31.99,
        description:
            'Encyclia Orchids, also known as Cockleshell Orchids, have flowers with frilly lips that resemble seashells. They are native to tropical regions.',
        categoryId: "4"
    },
    {
        id: "11",
        name: 'Brassia Orchid',
        imageUrl: require('../../assets/images/brassia-orchid.jpg'),
        price: 39.99,
        description:
            'Brassia Orchids, commonly known as Spider Orchids, have long, narrow petals that resemble spider legs. They are known for their unique and intriguing appearance.',
        categoryId: "2"
    },
    {
        id: "12",
        name: 'Laelia Orchid',
        imageUrl: require('../../assets/images/laelia-orchid.jpg'),
        price: 29.99,
        description:
            'Laelia Orchids are native to Central and South America. They produce vibrant, star-shaped flowers and are often grown in warm climates.',
        categoryId: "1"
    },
];
export class ProductService {
    static async listProduct() {
        return data;
    }

    static async getListByCategoryId(categoryId) {
        if (typeof categoryId == "string") {
            return data.filter(item => item.categoryId === categoryId)
        }
        return data;
    }
    
    static async checkIsFavorite(id) {
        const favouriteLists = JSON.parse(await asyncStorage.retrieveData("favouriteLists") || '[]') || [];
        return !!(favouriteLists.find(item => item.id == id))
    }
}
