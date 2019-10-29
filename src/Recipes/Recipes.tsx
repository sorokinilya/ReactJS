import React from 'react';
import './Recipes.css'
import storaService, {StorageService} from '../Business/StorageService';
import { RecipeItem } from './RecipeItem';
import Button from "@material-ui/core/Button";


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

     handleEditItem(id: number) {
        alert("text " + id)
     }

     handleSearch(text: string) {
        this.setState({filter: text})
     }

     handleAddItem() {

     }

     renderRecipes() {
        let filter = this.state.filter.toLowerCase()
         return (
             <div className="list">
                 {
                     this.state.recipes.flatMap(recipe => {
                         if (!filter || recipe.name.toLowerCase().includes(filter) || recipe.recipyDesctiption.toLowerCase().includes(filter)) {
                             return <RecipeItem recipe={recipe}
                                            onSelect={this.handleSelect.bind(this, recipe.id)}
                                            onEdit={ this.handleEditItem.bind(this, recipe.id)}
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
                <Button variant="contained" color="primary" onClick={this.handleAddItem.bind(this)}>
                    +
                </Button>
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
