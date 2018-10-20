import React from 'react';
import loader from '../assets/puff.svg';
import '../App.css';

const TodoLoaderPatient = () => (
  <div className="todo-loader">
    <img src={loader} width="50" height="50"/>
    <br /><br />
    <h4>Fetching patients</h4>
  </div>
)

export default TodoLoaderPatient;
