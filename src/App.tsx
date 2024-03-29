import React from 'react'
import './App.css'
import './index.css'
import { AppState } from './Redux/index'
import { ListState} from "./Redux/List/types";
import { FilterState} from "./Redux/Filter/types";
import { SearchInterface } from "./Components/SearchComponent"
import { RecipesComponent } from "./Components/RecipesComponent"
import { updateText, addAction, searchAction } from "./Redux/Filter/actions";
import { connect } from "react-redux";
import {editItem, selectItem} from "./Redux/List/actions";
import {EditorComponent} from "./Components/Editor/EditorComponent";
import {EditorState} from "./Redux/Editor/types";
import {closeAction, saveAction, nameUpdatedAction, descriptionUpdatedAction, imageUpdatedAction} from "./Redux/Editor/actions";

interface AppProps {
    list: ListState
    filter: FilterState
    editor: EditorState
    searchAction: typeof searchAction
    updateText: typeof updateText
    addAction: typeof addAction

    editItem: typeof editItem
    selectItem: typeof selectItem

    imageUpdatedAction: typeof imageUpdatedAction
    saveAction: typeof saveAction
    closeAction: typeof closeAction
    nameUpdatedAction: typeof nameUpdatedAction
    descriptionUpdatedAction: typeof descriptionUpdatedAction
}

class App extends React.Component<AppProps> {
    render() {
        return (
            <div className="App">
                <SearchInterface text={ this.props.filter.searchString }
                                 buttonText={ this.props.filter.buttonText }
                                 updated={ this.props.updateText  }
                                 search={ this.props.searchAction }
                                 add={ this.props.addAction }/>

                <EditorComponent isActive={ this.props.editor.isActive }
                                 name={ this.props.editor.name }
                                 price={ this.props.editor.price }
                                 img={ this.props.editor.img}
                                 recipyDesctiption={ this.props.editor.recipyDesctiption }
                                 uploadedImageAction={ this.props.imageUpdatedAction }
                                 updatedNameAction={ this.props.nameUpdatedAction }
                                 updatedDescriptionAction={ this.props.descriptionUpdatedAction }
                                 saveAction={ this.props.saveAction }
                                 closeAction={this.props.closeAction } />

                  <RecipesComponent items={this.props.list.recipes }
                              editAction={ this.props.editItem }
                              selectAction={ this.props.selectItem }/>
            </div>
        );
    }

}

const mapStateToProps = (state: AppState) => ({
    filter: state.filterReducer,
    list: state.listReducer,
    editor: state.editorReducer
});

export default connect(
    mapStateToProps,
    {  searchAction, updateText, addAction,
        editItem, selectItem,
        saveAction, closeAction, nameUpdatedAction, descriptionUpdatedAction, imageUpdatedAction
    }
)(App);

