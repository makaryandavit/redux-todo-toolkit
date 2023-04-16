import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, checkTodo, clear, delTodo } from './todoSlice';

export const Todo = () => {

    const todos = useSelector((state) => state.todo);
    const [text,setText] = useState('');
    const dispatch = useDispatch();

  return (
    <>
        <header>
            <form onSubmit={(e) =>{
                e.preventDefault()
                if(text.length >= 3){
                    dispatch(addTodo(text))
                }
                setText('')
            }}>
                <input type="text" placeholder='Write Your Item' value={text} onChange={(e) =>{
                    setText(e.target.value)
                }} />
                <button>Add</button>
            </form>
        </header>
        <main>
            <ul>
                {
                    todos.map(item =>(
                        <li key={item.id}>
                            <label htmlFor={`cont-${item.id}`}>
                                {
                                    item.value
                                }
                            </label>
                            <div className='controls'>
                                <input type="checkbox" id={`cont-${item.id}`} checked={item.isChecked} onChange={() =>{
                                    dispatch(checkTodo({
                                        ...item,
                                        isChecked:!item.isChecked
                                    }))
                                }} />
                                <button onClick={() =>{
                                    dispatch(delTodo(item))
                                }}>Delete</button>
                            </div> 
                        </li>
                    ))
                }
            </ul>
        </main>
        <footer>
            <p>{todos.filter(item => item.isChecked).length}/{todos.length} Completed</p>
            <button onClick={() =>{
                dispatch(clear())
            }}>Clear</button>
        </footer>
    </>
  )
}
