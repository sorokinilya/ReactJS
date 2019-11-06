import React from 'react';
import './App.css';
import { AppState } from './Redux/index'
import { ListState} from "./Redux/List/types";
import { FilterState} from "./Redux/Filter/types";
import { SearchInterface } from "./Components/SearchItem"
import { RecipeList } from "./Components/RecipeItem"
import { updateText, addAction, searchAction } from "./Redux/Filter/actions";
import {connect} from "react-redux";

interface AppProps {
    list: ListState;
    filter: FilterState;
    searchAction: typeof searchAction;
    updateText: typeof updateText;
    addAction: typeof addAction;
}

export type UpdateSearchParam = React.SyntheticEvent<{ value: string }>;

class App extends React.Component<AppProps> {

    updateFilterText = (message: UpdateSearchParam) => {

    };

    render() {
        return (
            <div className="parent">
                <SearchInterface text={ this.props.filter.searchString }
                                 buttonText={ this.props.filter.buttonText }
                                 updated={ this.props.updateText  }
                                 search={ this.props.searchAction }
                                 add={ this.props.addAction }/>
                                 <RecipeList items={this.props.list.recipes }/>
            </div>
        );
    }

}

const mapStateToProps = (state: AppState) => ({
    filter: state.filterReducer,
    list: state.listReducer
});

export default connect(
    mapStateToProps,
    {  searchAction, updateText, addAction }
)(App);

