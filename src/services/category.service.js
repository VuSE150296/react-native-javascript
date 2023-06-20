const data = [
    {
        id: "1",
        name: "All",
    },
    {
        id: "2",
        name: "Cacti",
    },
    {
        id: "3",
        name: "In pots",
    },
    {
        id: "4",
        name: "Dired flowers",
    },
    {
        id: "5",
        name: "Other",
    }
]
export class CategoryService {
    static async listCategory() {
        return data;
    }
}