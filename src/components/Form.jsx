import React from 'react';
import {FaPlus } from 'react-icons/fa'

function Form( { inputText , setInputText , todos , setTodos } ) {

    const inputHandle = (e) => {
        setInputText(e.target.value)
    }

    const submitHandle = (e) => {
        e.preventDefault()
        setTodos([
            ...todos , {text: inputText , complet: false , id: Math.random() * 100}
        ])
        setInputText("")
    }
  return (
    <div>
        <div>
            <input value={inputText} onChange={inputHandle}/>
            <span> 
                <button onClick={submitHandle}> <FaPlus/> </button>
            </span> 
        </div>
       
    </div>
  )
}

export default Form
