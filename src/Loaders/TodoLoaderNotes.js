import React from 'react';
import loader from '../assets/puff.svg';
import '../App.css';

const TodoLoaderNotes = () => (
  <div className="todo-loader" style={{ marginTop: '1em' }}>
    <img src={loader} width="50" height="50"/>
    <br /><br />
  </div>
)

export default TodoLoaderNotes;
