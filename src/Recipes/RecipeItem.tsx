import Button from "@material-ui/core/Button";
import React from "react";

export interface IRecipe {
    id: number,
    isSelected: boolean,
    name: string,
    price: number,
    img: string,
    recipyDesctiption: string
}

export interface IRecipeProps {
    recipe: IRecipe
    onSelect: () => void
    onEdit: () => void
}

export function RecipeItem(props: IRecipeProps) {
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
                <Button variant="contained" color="primary" onClick={props.onEdit}>
                    Edit
                </Button>
            </div>
        </div>
    )
}
