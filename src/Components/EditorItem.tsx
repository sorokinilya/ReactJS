
import React from "react";
import Button from "@material-ui/core/Button";
import {InputParam } from "../Common/constants"


interface EditorProps {
    isActive: boolean

    name: string
    price: number
    // img: string
    recipyDesctiption: string

    updatedNameAction:(text: InputParam) => void
    updatedDescriptionAction:(text: InputParam) => void
    saveAction:() => void
    closeAction:() => void
}


export const EditorItem: React.FC<EditorProps> = ({ isActive, name, price, recipyDesctiption, updatedNameAction, updatedDescriptionAction, saveAction, closeAction }) => {
    if (!isActive) {
        return (<div> </div>)
    }
    return (
        <div>
            <input
                value={ name }
                type="text"
                placeholder="Enter name"
                style={{margin: 10}}
                onChange={ updatedNameAction }
            />
            <input
                value={ recipyDesctiption }
                type="text"
                placeholder="Enter description"
                style={{margin: 10}}
                onChange={ updatedDescriptionAction }
            />
            <Button className="a" onClick={ saveAction }>Close</Button>
            <Button color="primary" className="b" onClick={ closeAction }>Save</Button>
            </div>)
}
