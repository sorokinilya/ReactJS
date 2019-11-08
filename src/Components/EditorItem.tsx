
import React from "react";
import Button from "@material-ui/core/Button";
import  "./editor.css"
import {FileParam, InputParam} from "../Common/constants"


interface EditorProps {
    isActive: boolean

    name: string
    price: number
    img: string
    recipyDesctiption: string
    uploadedImageAction:(file: FileParam) => void
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
                                                      uploadedImageAction,
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
                    <input type="file" id="imageFile" name='imageFile' onChange={ e => uploadedImageAction(e.target.files) }/>
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
                        placeholder="Write something.." onChange={ updatedDescriptionAction }>
                        { recipyDesctiption }
                    </textarea>
                </div>
            </div>
        </div>)

}
