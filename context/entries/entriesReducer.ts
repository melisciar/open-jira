import { EntriesState } from '.';

type EntriesActionType = 
| {type: 'Entries - ActionName'}

//Recibe un estado o acción y produce un nuevo estado
export const entriesReducer = ( state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {
        case 'Entries - ActionName':
            return {
                ...state,
            }
    
        default:
            return state
    }
}