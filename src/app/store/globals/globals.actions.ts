import { createAction, props } from "@ngrx/store";
import { ToDo } from "src/app/models/toDo";
import { Session } from "../../models/session";



 export const actionOnPageLoad = createAction(
    '[Global] User ID Page was Loaded',
    props<{ session:Session }>() //right side is the type like type string or type ToDo model
); 

export const actionOnAddingNewItem = createAction(
    '[Global] New Item Added',
    props<{toDos:ToDo}>()
)

export const actionOnDeletingNewItem = createAction(
    '[Global] Item Deleted',
    props<{toDoId:string}>()
)
export const actionOnSearchNewItems = createAction(
    '[Global] Found Item',
    props<{toDoId:string}>()
)