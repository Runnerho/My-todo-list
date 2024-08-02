import { useState } from "react"
import TodoForm from "./Todoform"
import Todo from "./Todo"


export default function TodoList(){
    const [todos, SetTodos] = useState([])

    const addTodo = Todo =>{
        if (!Todo.text || /^\s*$/.test(Todo.text)){
            return;
        }

        const newTodos = [...todos, Todo]
        SetTodos(newTodos)
    }

    const editTodo = (todoId, newValue)=>{
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        SetTodos(prev=> prev.map(item => item.id === todoId ? newValue: item))
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)
        SetTodos(removeArr)
    }

    const doneTodo = id =>{
        let doning = todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        SetTodos(doning)
    }

    return(
        <>
            <h1>write a plan today</h1>
            <TodoForm onSubmit = {addTodo}/>
            <Todo todos = {todos}
                removeTodo = {removeTodo}
                editTodo = {editTodo}
                doneTodo={doneTodo}
            />
        </>
    )
}