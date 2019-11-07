
import React from "react";
import Button from "@material-ui/core/Button";
import {InputParam } from "../Common/constants"


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
        <div>
            <img src={img} className="editorItemImg"/>
            <input
                value={ name }
                type="text"
                placeholder="Enter name"
                onChange={ updatedNameAction }
            />
            <input
                value={ recipyDesctiption }
                type="text"
                placeholder="Enter description"
                onChange={ updatedDescriptionAction }
            />
            <input type="file" id="imageFile" name='imageFile'/>

            <Button className="a" onClick={ closeAction }>Close</Button>
            <Button color="primary" className="b" onClick={ saveAction }>Save</Button>
            </div>)
}
