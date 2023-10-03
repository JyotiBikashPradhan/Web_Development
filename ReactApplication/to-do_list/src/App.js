import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Card from "react-bootstrap/Card";

import TodoList from "./components/TodoList";
import React, { useState, useEffect } from 'react';


const App = () => {
  
  return (
    <div className="App">
      <Card >
        <Card >
          <Card.Body className="">
            <h2>To-Do List</h2>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className="field">
            <TodoList/>
          </Card.Body>
        </Card>
        {/* <br /> */}
        <Card className="card">
          <Card.Body className="field">
            {/* <TodoSchema /> */}
          </Card.Body>
        </Card>

        <Card id="lists">
          <Card.Body>
            {/* <TodoList tasks={tasks} /> */}
          </Card.Body>
        </Card>
      </Card>
    </div>
  );
};

export default App;
