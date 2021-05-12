import { createReducer, on } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { Session } from "src/app/models/session";
import { ToDo } from "src/app/models/toDo";
import { User } from "src/app/models/user";
import { actionOnPageLoad } from "./globals.actions";


export interface GlobalState {
    session: Session
}

export const initialState: GlobalState = {
    session: undefined
}

const GLOBALS_REDUCER = createReducer(
    initialState,     
    on(actionOnPageLoad, (state, action) => ({
        ...state,
        session: action.session
    }))
    
)

export function globalsReducer(
    state: GlobalState,
    action: TypedAction<string>
): GlobalState {
    return GLOBALS_REDUCER(state, action);
}