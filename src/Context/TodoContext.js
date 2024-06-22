import React, { createContext, useContext } from "react";

 export const TodoContext = createContext({
    Todos :[
        {
            id : 5,
            todo : "work",
            completed : false 

        }
        
    ],
    addTodo : (todo) =>{},
    updateTodo : (id,todo) =>{},
    deleteTodo :(id)=>{},
    Checked : (id)=>{}
 })


