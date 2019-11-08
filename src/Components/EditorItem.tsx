
import React from "react";
import Button from "@material-ui/core/Button";
import {InputParam } from "../Common/constants"
import  "./editor.css"


interface EditorProps {
    isActive: boolean

    name: string
    price: number
    img: string
    recipyDesctiption: string

    updatedNameAction:(text: InputParam) => void
    updatedDescriptionAction:(text: InputParam) => void
    saveAction:() => void
    closeAction:() => void
}


export const EditorItem: React.FC<EditorProps> = ({
                                                      isActive,
                                                      name,
                                                      price,
                                                      img,
                                                      recipyDesctiption,
                                                      updatedNameAction,
                                                      updatedDescriptionAction,
                                                      saveAction,
                                                      closeAction}) => {
    if (!isActive) {
        return null
    }
    return (
        <div className="EditorBack">
            <div className="EditorMain">
                <div className="EditorFieldImg">
                    <img src={img} className="editorItemImg"/>
                    <input type="file" id="imageFile" name='imageFile'/>
                    <div className="EditorButtons">
                        <Button className="a" onClick={ closeAction }>Close</Button>
                        <Button color="primary" className="b" onClick={ saveAction }>Save</Button>
                    </div>
                </div>
                <div className="EditorField">
                    <input
                        value={ name }
                        type="text"
                        placeholder="Enter name"
                        onChange={ updatedNameAction }
                    />
                    <textarea
                        placeholder="Write something..">
                    </textarea>
                </div>
            </div>
        </div>)
}
