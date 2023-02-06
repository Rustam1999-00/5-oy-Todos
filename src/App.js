

      
   

import {List} from './components/List'
import {Item} from './components/Item'
import { useRef, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  let inputValue = useRef()
  let [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])

  const handleSubmit = (evt) => {
      evt.preventDefault()

     setTodos([
      ...todos,
      {
        id: todos.at(-1)?.id + 1 || 1,
        text: inputValue.current.value,
        isCompleted: false
      }
     ])

      inputValue.current.value = ''
      toast.success("Todo qo'shildi!!!")
  }

  localStorage.setItem('todos', JSON.stringify(todos))

  return (
    <div className="container ">
<h2 className="h2 text-center mt-5">TODO APP</h2>
     <form onSubmit={handleSubmit} className="w-50 mx-auto p-5 mt-5 shadow">
      <div className="input-group rounded">
        <input required ref={inputValue} className="form-controll w-75 rounded" type='text' placeholder="Add"/>
        <button  className="btn btn-primary" type="submit">SEND Todo</button>
      </div>
     </form>
     
    
      <List>
        {
          todos.length ? todos.map((todo) => {
            return (
              <Item
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
              id={todo.id}
              text={todo.text}
              isComleted={todo.isCompleted}
              />
            )
          }) : <h1 className='text-center h2'>Todo Not Fonde </h1>
        }
      </List>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
  );
}

export default App;

