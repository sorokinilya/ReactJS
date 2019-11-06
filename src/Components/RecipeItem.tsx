import Button from "@material-ui/core/Button";
import React from "react";
import { connect } from "react-redux";
import { selectItem } from "../Redux/List/actions";
import { editItem } from "../Redux/List/actions";
import { ListItem } from "../Redux/List/types";
import {UpdateSearchParam} from "./SearchItem";


interface SearchProps {
    items: ListItem[]
}

export const RecipeList: React.FC<SearchProps> = ({
    items
}) => {
    return (
      <div> {
          items.map( (item) =>
              <div>{ RecipeItem(item, ()=>{}, () => {} ) } </div>
          )
      }
      </div>
    );
};


const  RecipeItem = (recipe: ListItem,  selectItem: (id: Number) => void, editItem: (id: Number) => void)  => {
    let classes = ['listItem']
    if (recipe.isSelected) {
        classes.push('Selected')
    }
    return (
        <div className={classes.join(' ')} onClick={ ()=> selectItem(recipe.id) }>
            <div className="container clearfix wholeField">
                <div className="listItemTitle"> {recipe.name}</div>
                <div className="mainArticle">
                    <div className="recipeImage">
                        <img src={recipe.img} className="listItemImg"/>
                    </div>
                    <div className="listItemDescription"> {recipe.recipyDesctiption}</div>
                </div>
                <Button variant="contained" color="primary" onClick={ () => editItem(recipe.id) }>
                    Edit
                </Button>
            </div>
        </div>
    )
}

