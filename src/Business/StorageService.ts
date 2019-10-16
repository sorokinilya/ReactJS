
export const LOCAL_STORAGE_KEYS = {
    RECIPES: 'recipe',
    DEMO: 'demo'
};

export interface IStorageRecipe {
    id: number,
    name: string,
    price: number,
    img: string,
    recipyDesctiption: string
}

export class StorageService {

    private  recopies: IStorageRecipe[] = [];

    constructor() {

        const items  = localStorage.getItem(LOCAL_STORAGE_KEYS.RECIPES);
        if (items) {
            const values = JSON.parse(items);
            this.recopies = values;
        } else {
            this.recopies = [];
        }

        if (this.showDemo()) {
            this.setShowDemo(false);
            const items: IStorageRecipe[] = [{
                id: 1,
                name: "Borscht",
                price: 10,
                img: "https://gotovim-doma.ru/images/recipe/0/0a/00ad9d3b1ff86a92ce5935bc47a1bdee_l.jpg",
                recipyDesctiption: "Borscht is a traditional Ukrainian beet and cabbage soup which is very popular in many Central and Eastern European cuisines. Variations of this dish can be different not only from country to country, but also from one Ukrainian region to another. It is also said that every Ukrainian family has original borscht recipe of its own."
            }, {
                id: 2,
                name: "Varenyky",
                price: 20,
                img: "https://chefspencil.com/wp-content/uploads/4-22.jpg",
                recipyDesctiption: "The preparation process for varenyky or pirohi is time-consuming. However, this is probably the most unpretentious recipe in terms of filling. If you get the chance to visit a Ukrainian village or a food festival in the city, you will definitely have an opportunity to try out varenyky with the most incredible fillings – from the basic cottage cheese, mashed potatoes or sauerkraut to the more unique like olives, pumpkin, nettle or strawberries."
            },
                {
                    id: 3,
                    name: "Holubtsi",
                    price: 20,
                    img: "https://panukraine.eu/uploads/abouts/shutterstock_558849211-800x533-88542.jpg",
                    recipyDesctiption: "According to the classic recipe, holubtsi is cooked from boiled cabbage, where you take every other leaf to make a new roll filled with boiled rice and meat. A variation of the dish is to use boiled vine leaves for the rolls. The rice can also be substituted with the other cereals, mushrooms, Korean carrots, etc. Classic holubtsi can be found in many restaurants in Ukraine and on banquet menus too."
                }];
             items.forEach(value => {
                 this.addRecipe(value)
             });
        }
    }


    addRecipe(recipe: IStorageRecipe) {
        this.recopies.push(recipe);
        localStorage.setItem(LOCAL_STORAGE_KEYS.RECIPES, JSON.stringify(this.recopies));
    }

    getRecipes(): IStorageRecipe[] {
        return this.recopies
    }

    showDemo(): boolean {
        const item = localStorage.getItem(LOCAL_STORAGE_KEYS.DEMO);
        if (item) {
            return JSON.parse(item) === true
        }
        return true
    }

    setShowDemo(show: boolean) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.DEMO, JSON.stringify(show));
    }

}


const storaService = new StorageService();
export default storaService
