import { useState , useRef , useEffect } from "react"

let counter = 1
export default function TodoForm ({onSubmit}){
    const [input,SetInput] = useState('')
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleSubmit = e =>{
        e.preventDefault()

        onSubmit({id: counter++, text: input})

        SetInput('')
    }
    const handleChangeInput = e =>{
        SetInput(e.target.value)
    }
    return(
        <form onSubmit={handleSubmit} >
            <input type="text" name="text" placeholder="Add Todo" value={input} onChange={handleChangeInput} ref={inputRef}/>
            <button>Enter</button>
        </form>
    )
}