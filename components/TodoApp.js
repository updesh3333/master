import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/actions'
import AddTodo from './AddTodo.js'
import TodoList from './TodoList.js'

class TodoApp extends Component {
   /*Using async await*/
   async componentDidMount() {
      let w = "hello";
      const res = await fetch(`https://api.datamuse.com/words?ml=${w}&max=1`); //Getting synonym of hello
      const words = await res.json();
      alert("synonym of hello is : " + words[0].word);
   }
   render() {
      const { dispatch, visibleTodos } = this.props
      
      return (
         <div>
            <AddTodo onAddClick = {text => dispatch(addTodo(text))} />
            <TodoList todos = {visibleTodos}/>
         </div>
      )
   }
}
function select(state) {
   return {
      visibleTodos: state.todos
   }
}
export default connect(select)(TodoApp);