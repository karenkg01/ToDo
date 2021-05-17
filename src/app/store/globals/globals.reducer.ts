import { createReducer, on } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { Session } from "src/app/models/session";
import { actionOnAddingNewItem, actionOnDeletingNewItem, actionOnPageLoad } from "./globals.actions";

//Defining what our global state object looks like
export interface GlobalState {
    //our 1 object called sesssion
    session: Session
}

//creating an object of global state, this initializes it , its starting point is undefine
export const initialState: GlobalState = {
    session: undefined
}

//Creating first reducer here
const GLOBALS_REDUCER = createReducer(
    initialState,     
    on(actionOnPageLoad, (state, action) => ({
        ...state,
        session: action.session
    })),
    on(actionOnAddingNewItem, (state, action) => ({
        ...state,
        //it works like push
        session: {...state.session, toDos:[...state.session.toDos,action.toDos]} 
    })),

    on(actionOnDeletingNewItem, (state, action) => ({
        ...state,
        //it works like push  //filter is looping if 
        session: {...state.session, toDos: state.session.toDos.filter((toDos)=>{
            return toDos.toDoId !== action.toDoId
        })} 
    }))
    
)

export function globalsReducer(
    state: GlobalState,
    action: TypedAction<string>
): GlobalState {
    return GLOBALS_REDUCER(state, action);
}