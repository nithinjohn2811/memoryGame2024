import { useState } from "react";
import Search from "./Search";



function App() {

  // const [todos, settodos] = useState([{
  //   text:'this is a sample todo',
  //   isDone:false
  // },])

  // const addTodo = (text) => {
  //   const newTodos = [...todos,{text}]
  //   settodos(newTodos)
  // }

  // const handleclick = ()=>{
   
    
  // }

const [todo, settodo] = useState('one')

const addTodo = (text)=>{
 const newTodo= [...todo,{text}]
 settodo(newTodo)
 return newTodo
}

const handleClick =()=>{
  addTodo('two')
}



  return (
    <div className="App">
    {/* <Search/>
    <button on
    Click={()=>handleclick()}>click</button>
    */}

    {todo}
   <button onClick = {()=>handleClick()}> click me</button>
    </div>
  );
}

export default App;
