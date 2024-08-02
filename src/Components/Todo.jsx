import { useState } from "react";
import TodoForm from "./Todoform";
export default function Todo({todos,removeTodo,editTodo,doneTodo}){
    const [edit, SetEdit] = useState({
        id: null,
        value: ''
    })


    const submitUpdate = value =>{
        editTodo(edit.id,value)
        SetEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id){
        return <div className="task edit-task"><TodoForm onSubmit={submitUpdate} edit={edit}/></div>
    }
    return(
        todos.map((todo,index)=>
        <div key={index} className={todo.isComplete ? 'task green' : 'task'}>
            <div key={todo.id}>{todo.text}</div>
            <div>
                <button onClick={()=> doneTodo(todo.id)}>done</button>
                <button onClick={()=> removeTodo(todo.id)}>delete</button>
                <button onClick={()=> SetEdit({id : todo.id , value: todo.text})}>edit</button>
            </div>
        </div>)
    )
}