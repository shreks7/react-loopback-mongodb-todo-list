import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Item from "./Item";
import AddItem from "./AddItem";

class Todo extends Component{
  constructor(){
      super();
      this.state = {
          todos: []
      }
  }

  getTodos(){
    axios.get("http://localhost:3001/api/items")
        .then(response => {
          //console.log(response.data);
          this.setState({
            todos:response.data
          }, ()=>{
            //console.log(this.state);
          })
        })
        .catch(err => console.log("Error in getTodos"));
  }

  delete(id){
    this.setState(prevState => ({
     todos: prevState.todos.filter(el => el.id != id )
    }));
  }

  addItem(todo){
    let xtodos = this.state.todos.slice();
    xtodos.push(todo);
    this.setState(prevState => ({
      todos: xtodos
    }));
  }

  componentWillMount(){
    this.getTodos();
  }

  render(){
    const todoItems = this.state.todos
    .sort((a, b) => a.date < b.date )
    .map((todo,index) =>{
        return(
          <Item todo={todo} key={todo.id} _handleDelete={this.delete.bind(this)} />
        )
    });

    return(
          <div className="uk-section">
            <div className="uk-container tm-container-background-light \
            uk-container-small \
            uk-position-relative">
              <AddItem _handleAddItem={this.addItem.bind(this)}/>
              <ul className="uk-list uk-list-striped">
                {todoItems}
              </ul>
            </div>
          </div>
    )
  }
}

export default Todo;
