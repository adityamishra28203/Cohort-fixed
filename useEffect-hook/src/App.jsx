import { useEffect, useState } from "react"


function App () {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then( async (res)=> {
        const json = await res.json();                  //it will fetch the todos from backend at every 10 seconds and render
        setTodos(json.todos)
      })
    }, 10000)
  }, [])

  
 return <div>
  {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
 </div>

}


function Todo({ title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}


export default App