import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { TodoContext } from './Context/TodoContext';
import Form from './components/Form';
import TodoItem from './components/TodoItem';

function App() {

  const [Todos,setTodos] = useState([])


  const addTodo =(todo)=>{
     setTodos((prevTodos)=>[todo,...prevTodos])
  }
  const updateTodo =(id,todo)=>{
    setTodos((prevTodos)=>prevTodos.map((prevTodo)=>prevTodo.id===id?{...prevTodo , todo :todo}:prevTodo))
  }
  const deleteTodo = (id)=>{
    setTodos((prevTodos)=>prevTodos.filter((prevTodo=>prevTodo.id !== id)))
  }
  const Checked = (id) =>{
    setTodos((prevTodos)=>prevTodos.map((prevTodo)=>prevTodo.id===id?{...prevTodo ,   completed:true }:prevTodo))
  }

 useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem('todos'))
  
  if(todos && todos.length>0)
  {
    setTodos(todos)
  }

 },[])
 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(Todos))
}, [Todos])
 


  return (

<TodoContext.Provider value={{Todos , addTodo ,updateTodo ,deleteTodo , Checked}}>


    
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <Form/>
        </div>
        <div className="flex flex-wrap gap-y-3">
        {Todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
       
        </div>
    </div>
</div>

</TodoContext.Provider>
  );
}

export default App;
