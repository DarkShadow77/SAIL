import { useState } from 'react'
import './App.css'
import Header from './components/header'

function App() {
  // const [todo, setTodo] = useState([])
  const [inputText, setInput] = useState("")

  const [todo, setTodo] = useState([])


  function change(event) {
    setInput(event)
    console.log(event)
  }

  function addToDo() {
    console.log(todo)
    setTodo([...todo, inputText])
    setInput("")
  }

  function editTodo(index){
    let prompt = window.prompt("Edit Todo");
    let array = [...todo]
    array.splice(index, 1, prompt)

    setTodo([...array])

  }

  
  function deleteTodo(index){
    let array = [...todo]
    array.splice(index, 1)

    setTodo([...array])

  }

  return (
    <>

      <Header value={inputText} click={() => addToDo()} onChange={() => change(event.target.value)} />

      {
        todo.map((items, index) => {
          return (<p>{items} <button onClick={()=>editTodo(index)}>Edit</button><button onClick={()=>deleteTodo(index)}>Delete</button></p>)
        })
      }


    </>
  )
}

export default App
