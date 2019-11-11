
import React from "react";
import Button from "@material-ui/core/Button";
import "./editor.css"
import {FileParam, InputParam} from "../../Common/constants"
import {imageUpdatedAction} from "../../Redux/Editor/actions";


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

export const EditorComponent: React.FC<EditorProps> = ({
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
                    <img src={img} className="editorItemImg" alt='recipe image' />
                    <input type="file" id="imageFile" name='imageFile' onChange={ e =>  {
                        if (e.target.files && e.target.files[0]) {
                            let reader = new FileReader()
                            reader.onload = (event) => { // called once readAsDataURL is completed
                                if (event.target && event.target.result) {
                                    let image = event.target.result as string
                                    uploadedImageAction(image)
                                }
                            }
                            reader.readAsDataURL(e.target.files[0])
                        }
                    }}/>
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
