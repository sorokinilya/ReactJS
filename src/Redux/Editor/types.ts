export const SAVE_ACTON = 'EDITOR_SAVE_ACTION';
export const CANCEL_ACTION = 'EDITOR_CANCEL_ACTION';
export const NAME_UPDATED = 'EDITOR_NAME_UPDATED';
export const DESCRIPTION_UPDATED = 'EDITOR_DESCRIPTION_UPDATED';

export interface EditorState {
    isActive: boolean
    id: number
    name: string
    price: number
   // img: string
    recipyDesctiption: string
}

interface SaveAction {
    type: typeof SAVE_ACTON
}

interface CancelAction {
    type: typeof CANCEL_ACTION
}

interface NameUpdatedAction {
    type: typeof NAME_UPDATED
    payload: string
}

interface DescriptionUpdatedAction {
    type: typeof DESCRIPTION_UPDATED
    payload: string
}

export type EditorAction = SaveAction | CancelAction | NameUpdatedAction | DescriptionUpdatedAction;
