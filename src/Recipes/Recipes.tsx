import React from 'react';
import './Recipes.css'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import storaService, {StorageService} from '../Business/StorageService';

interface IRecipe {
    id: number,
    isSelected: boolean,
    name: string,
    price: number,
    img: string,
    recipyDesctiption: string
}

interface IRecipeProps {
    recipe: IRecipe
    onSelect: () => void
}

function Recipe(props: IRecipeProps) {
    let classes = ['listItem']
    if (props.recipe.isSelected) {
        classes.push('Selected')
    }
    return (
        <div className={classes.join(' ')} onClick={props.onSelect}>
            <div className="container clearfix wholeField">
                <div className="listItemTitle"> {props.recipe.name}</div>
                <div className="mainArticle">
                    <div className="recipeImage">
                        <img src={props.recipe.img} className="listItemImg"/>
                    </div>
                    <div className="listItemDescription"> {props.recipe.recipyDesctiption}</div>
                </div>
                <Button variant="contained" color="primary">
                    Edit
                </Button>
            </div>
        </div>
    )
}


class Recipes extends React.Component {

    state = {
        searching: false,
        filter: '',
         recipes: storaService.getRecipes().map( obj => {
             return {
                 id: obj.id,
                 isSelected: false,
                 name: obj.name,
                 price: obj.price,
                 img: obj.img,
                 recipyDesctiption: obj.recipyDesctiption
             };
         })

             //[{
        //     id: 1,
        //     isSelected: false,
        //     name: "Borscht",
        //     price: 10,
        //     img: "https://gotovim-doma.ru/images/recipe/0/0a/00ad9d3b1ff86a92ce5935bc47a1bdee_l.jpg",
        //     recipyDesctiption: "Borscht is a traditional Ukrainian beet and cabbage soup which is very popular in many Central and Eastern European cuisines. Variations of this dish can be different not only from country to country, but also from one Ukrainian region to another. It is also said that every Ukrainian family has original borscht recipe of its own."
        // }, {
        //     id: 2,
        //     isSelected: false,
        //     name: "Varenyky",
        //     price: 20,
        //     img: "https://chefspencil.com/wp-content/uploads/4-22.jpg",
        //     recipyDesctiption: "The preparation process for varenyky or pirohi is time-consuming. However, this is probably the most unpretentious recipe in terms of filling. If you get the chance to visit a Ukrainian village or a food festival in the city, you will definitely have an opportunity to try out varenyky with the most incredible fillings – from the basic cottage cheese, mashed potatoes or sauerkraut to the more unique like olives, pumpkin, nettle or strawberries."
        // },
        //     {
        //         id: 3,
        //         isSelected: false,
        //         name: "Holubtsi",
        //         price: 20,
        //         img: "https://panukraine.eu/uploads/abouts/shutterstock_558849211-800x533-88542.jpg",
        //         recipyDesctiption: "According to the classic recipe, holubtsi is cooked from boiled cabbage, where you take every other leaf to make a new roll filled with boiled rice and meat. A variation of the dish is to use boiled vine leaves for the rolls. The rice can also be substituted with the other cereals, mushrooms, Korean carrots, etc. Classic holubtsi can be found in many restaurants in Ukraine and on banquet menus too."
        //     }]
    }


     handleSelect(id: number) {
        let recipes = this.state.recipes.concat()
         recipes.forEach(c => { c.isSelected = c.id == id})
         this.setState(recipes)
        console.log(id)
     }

     handleEdit() {
        this.setState( {searching: !this.state.searching})
     }

     handleSearch(text: string) {
        this.setState({filter: text})
     }

     renderRecipes() {
        let filter = this.state.filter.toLowerCase()
         return (
             <div className="list">
                 {
                     this.state.recipes.flatMap(recipe => {
                         if (!filter || recipe.name.toLowerCase().includes(filter) || recipe.recipyDesctiption.toLowerCase().includes(filter)) {
                             return <Recipe recipe={recipe} onSelect={this.handleSelect.bind(this, recipe.id)}
                                            key={recipe.id}/>
                         }
                         return  null
                     })
                 }
                 </div>
         )
     }

     renderControls() {
        let text = this.state.searching ? 'cancel' : 'search'
        return(
            <div className="container clearfix searchField">
                <input
                    value={this.state.filter}
                    type="text"
                    placeholder="Search Recipes"
                    style={{margin: 10}}
                    onChange={ (e) => {
                        this.handleSearch(e.target.value)
                    }}
                />
            <button onClick={ () => {this.handleEdit()} }>{text}</button>
                </div>
        )
     }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="Recipes">
                {
                    this.renderControls()
                }
                {
                    this.renderRecipes()
                }
            </div>
        )
    }
}


export default Recipes;
