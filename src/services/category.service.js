const data = [
    {
        name: "All",
    },
    {
        id: "1",
        name: "Cacti",
    },
    {
        id: "2",
        name: "In pots",
    },
    {
        id: "3",
        name: "Dired flowers",
    },
    {
        id: "4",
        name: "Other",
    }
]
export class CategoryService {
    static async listCategory() {
        return data;
    }

}