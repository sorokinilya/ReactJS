import Button from "@material-ui/core/Button";
import React from "react";
import {InputParam} from "../Common/constants";


interface SearchProps {
    text: string
    buttonText: string
    updated:(text: InputParam) => void
    search:() => void
    add:() => void
}

export const SearchInterface: React.FC<SearchProps> = ({
    text,
    buttonText,
    updated,
    search,
    add
}) => {
    return (
        <div className="container clearfix searchField">
            <Button variant="contained" color="primary" onClick={ add }>
                +
            </Button>
            <input
                value={ text }
                type="text"
                placeholder="Search Recipes"
                style={{margin: 10}}
                onChange={ updated }
            />
            <button onClick={ search }>{ buttonText }</button>
        </div>
    );
};


//export default SearchInterface;
