import { Entry } from '@/interfaces';
import { EntriesState } from '.';

type EntriesActionType = 
| {type: 'Agregar entrada', payload: Entry}

//Recibe un estado o acción y produce un nuevo estado
export const entriesReducer = ( state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {
        case 'Agregar entrada':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
    
        default:
            return state
    }
}