import React from 'react';
import './Recipes.css'

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
            <div className="listItemTitle"> {props.recipe.name}</div>
            <img src={props.recipe.img} className="listItemImg"/>
            <div className="listItemDescription"> {props.recipe.recipyDesctiption}</div>
        </div>
    )
}

class Recipes extends React.Component {

    state = {
        searching: false,
        filter: '',
        recipes: [{
            id: 1,
            isSelected: false,
            name: "Borch",
            price: 10,
            img: "https://gotovim-doma.ru/images/recipe/0/0a/00ad9d3b1ff86a92ce5935bc47a1bdee_l.jpg",
            recipyDesctiption: "Borch description"
        }, {
            id: 2,
            isSelected: false,
            name: "Fish",
            price: 20,
            img: "https://miro.medium.com/max/1899/1*mJ11PM4ZSBF0ZIAj5TebIw.png",
            recipyDesctiption: "Fish description"
        },
            {
                id: 3,
                isSelected: false,
                name: "Fish",
                price: 20,
                img: "https://miro.medium.com/max/1899/1*mJ11PM4ZSBF0ZIAj5TebIw.png",
                recipyDesctiption: "Fish description"
            }]
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
            <div>
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