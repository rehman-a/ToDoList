//import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/header';
import { ToDos } from './MyComponents/ToDos';
import { AddTodo } from './MyComponents/AddTodo';
import { Footer } from './MyComponents/Footer';
import React, { useState } from 'react';
//import { ToDoItem } from './MyComponents/ToDoItem';

function App() {

  const onDelete = (todo) => {
    console.log("I am on delete of todo" ,todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const addTodo=(title, desc)=>{
    console.log("I am adding this todo", title, desc);
    let sno = todos[todos.length-1].sno + 1;
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc      
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  
  

  const [todos, setTodos] = useState([
    {
    sno: 1,
    title: "Go to the Birthday Party",
    desc: "You need to go to the Birthday Party @ 11 "
    },
    {
    sno: 2,
    title: "Go to the Mall",
    desc: "You need to go to the mall to buy groceries"
    },
    {
    sno: 3,
    title: "English Exam tomorrow ",
    desc: "Study for the English exam tomorrow morning "
    },
    ]);
  let myvar = "Hello";
  return (
    <>
      <Header searchbar={true} />
      <AddTodo addTodo = {addTodo}/>
      <ToDos todos={todos} onDelete={onDelete} />
      
      <Footer />
    </>
  );
}

export default App;
