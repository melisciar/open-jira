import { Entry } from '@/interfaces';
import { EntriesState } from '.';

type EntriesActionType = 
| {type: 'Agregar entrada', payload: Entry}
| {type: 'Actualizar entrada', payload: Entry}

//Recibe un estado o acción y produce un nuevo estado
export const entriesReducer = ( state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {
        case 'Agregar entrada':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case 'Actualizar entrada':
            return {
                ...state,
                entries: state.entries.map( entry => {
                    if (entry._id === action.payload._id){
                        entry.status = action.payload.status
                        entry.description = action.payload.description
                    }
                    return entry
                })
            }
    
        default:
            return state
    }
}