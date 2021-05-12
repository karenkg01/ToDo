import { createAction, props } from "@ngrx/store";
import { ToDo } from "src/app/models/toDo";
import { Session } from "../../models/session";



 export const actionOnPageLoad = createAction(
    '[Global] User ID Page was Loaded',
    props<{ session:Session }>()
); 

export const actionOnAddingNewItem = createAction(
    '[Global] New Item Added',
    props<{toDos:ToDo}>()
)