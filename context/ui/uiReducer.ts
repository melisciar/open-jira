import { UIState } from ".";

type UIActionType = 
| {type: 'UI - Open Sidebar'}
| {type: 'UI - Close Sidebar'}

//Recibe un estado o acción y produce un nuevo estado
export const uiReducer = ( state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case 'UI - Open Sidebar':
            return {
                ...state,
                sidemenuOpen: true
            }
        case 'UI - Close Sidebar':
            return {
                ...state,
                sidemenuOpen: false
            }
    
        default:
            return state
    }
}