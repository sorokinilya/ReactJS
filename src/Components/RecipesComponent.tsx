import Button from "@material-ui/core/Button";
import React from "react";
import { ListItem } from "../Redux/List/types";

interface SearchProps {
    items: ListItem[]
    selectAction: (item: ListItem) => void
    editAction: (item: ListItem) => void
}

export const RecipesComponent: React.FC<SearchProps> = ({ items, selectAction,  editAction }) => {
    return (
      <div> {
          items.map( (item) => RecipeItem(item, ()=>{ selectAction( item )  }, () => { editAction(item ) } )
          )
      }
      </div>
    );
};


const  RecipeItem = (recipe: ListItem, selectItem: () => void, editItem: () => void)  => {
    let classes = ['listItem']
    let button = null
    if (recipe.isSelected) {
        classes.push('Selected')
        button = (<Button variant="contained" color="primary" onClick={ editItem }>
            Edit
            </Button>)
    }
    return (
        <div className={classes.join(' ')} onClick={ selectItem } key={ recipe.id }>
            <div className="container clearfix wholeField">
                <div className="listItemTitle"> {recipe.name}</div>
                <div className="mainArticle">
                    <div className="recipeImage">
                        <img src={recipe.img} className="listItemImg" alt={ recipe.name }/>
                    </div>
                    <div className="listItemDescription"> {recipe.recipyDesctiption}</div>
                </div>
                { button }
            </div>
        </div>
    )
}

